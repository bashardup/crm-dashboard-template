import Layout from "./components/layout"
import { Navigate, Route, Routes } from "react-router-dom"
import CardsPage from "./pages/cards-page"
import DashboardPage from "./pages/dashboard-page"
import ChartsPage from "./pages/charts-page.tsx"
import ButtonsPage from "./pages/buttons-page.tsx"
import UiComponentsPage from "./pages/ui-components-page"
import FormsPage from "./pages/forms-page"
import IconsPage from "./pages/icons-page"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/charts" element={<ChartsPage />} />
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/ui/badges" element={<UiComponentsPage section="badges" />} />
        <Route path="/ui/toast" element={<UiComponentsPage section="toast" />} />
        <Route path="/ui/tabs" element={<UiComponentsPage section="tabs" />} />
        <Route path="/ui/modal-popups" element={<UiComponentsPage section="modal-popups" />} />
        <Route path="/ui/side-drawers" element={<UiComponentsPage section="side-drawers" />} />
        <Route path="/ui/table" element={<UiComponentsPage section="table" />} />
        <Route path="/ui/dropdown-menu" element={<UiComponentsPage section="dropdown-menu" />} />
        <Route path="/ui/progress-bar" element={<UiComponentsPage section="progress-bar" />} />
        <Route path="/ui/accordion" element={<UiComponentsPage section="accordion" />} />
        <Route path="/ui/breadcrumb" element={<UiComponentsPage section="breadcrumb" />} />
        <Route path="/ui/navigation-menu" element={<UiComponentsPage section="navigation-menu" />} />
        <Route path="/ui/alert" element={<UiComponentsPage section="alert" />} />
        <Route path="/forms/form" element={<FormsPage section="form" />} />
        <Route path="/forms/input" element={<FormsPage section="input" />} />
        <Route path="/forms/select" element={<FormsPage section="select" />} />
        <Route path="/forms/checkbox" element={<FormsPage section="checkbox" />} />
        <Route path="/forms/radio" element={<FormsPage section="radio" />} />
        <Route path="/forms/textarea" element={<FormsPage section="textarea" />} />
        <Route path="/forms/datepicker" element={<FormsPage section="datepicker" />} />
        <Route path="/forms/fileupload" element={<FormsPage section="fileupload" />} />
        <Route path="/forms/slider" element={<FormsPage section="slider" />} />
        <Route path="/forms/toggle" element={<FormsPage section="toggle" />} />
        <Route path="/forms/switch" element={<FormsPage section="switch" />} />
        <Route path="/forms/text-editor" element={<FormsPage section="text-editor" />} />
        <Route path="/icons/huge-icons" element={<IconsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}