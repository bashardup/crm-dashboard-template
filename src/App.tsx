import Layout from "./components/layout"
import { Navigate, Route, Routes } from "react-router-dom"
import CardsPage from "./pages/cards-page"
import DashboardPage from "./pages/dashboard-page"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}