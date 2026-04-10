import {
  IdCard,
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Cards",
    url: "/cards",
    icon: IdCard,
  },
  {
    title: "Orders",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    url: "#",
    icon: Package,
  },
  {
    title: "Customers",
    url: "#",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "#",
    icon: LineChart,
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex h-14 items-center px-4">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span className="font-mono">Acme Inc</span>
          </NavLink>
        </div>
        <SidebarTrigger className="m-4 absolute" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.url !== "#" && location.pathname === item.url}
                    render={item.url === "#" ? <a href={item.url} /> : <NavLink to={item.url} />}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
