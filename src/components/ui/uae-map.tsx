import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

export default function UAEMap() {
  const svgRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const width = 800;
    const height = 500;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`);

    svg.selectAll("*").remove(); // clear on re-render

    d3.json("/uae-topo.json").then((topo) => {
      // Convert TopoJSON → GeoJSON
      const geojson = topojson.feature(topo, topo.objects.uae);

      // Auto-fit projection to UAE
      const projection = d3.geoMercator()
        .fitSize([width, height], geojson);

      const path = d3.geoPath().projection(projection);

      // Draw emirates
      svg.selectAll("path")
        .data(geojson.features)
        .join("path")
        .attr("d", path)
        .attr("fill", "#27d07c57")
        .attr("stroke", "#27d07c")
        .attr("stroke-width", 1)
        .on("mouseover", (event, d) => {
          d3.select(event.currentTarget).attr("fill", "#27d07c");
          setTooltip({
            x: event.offsetX,
            y: event.offsetY,
            name: d.properties.NAME_1  // emirate name from GADM
          });
        })
        .on("mouseout", (event) => {
          d3.select(event.currentTarget).attr("fill", "#27d07c57");
          setTooltip(null);
        });

      // Add emirate labels
      svg.selectAll("text")
        .data(geojson.features)
        .join("text")
        .attr("transform", d => `translate(${path.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("font-size", 11)
        .attr("fill", "#333")
        .text(d => d.properties.NAME_1);
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <svg ref={svgRef} style={{ width: "100%", height: "auto" }} />
      {tooltip && (
        <div style={{
          position: "absolute",
          left: tooltip.x + 10,
          top: tooltip.y - 10,
          background: "white",
          border: "1px solid #ccc",
          padding: "4px 8px",
          borderRadius: 4,
          pointerEvents: "none",
          fontSize: 13
        }}>
          {tooltip.name}
        </div>
      )}
    </div>
  );
}