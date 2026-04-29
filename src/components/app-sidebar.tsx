import {
  AlignLeft,
  AlertTriangle,
  BarChart2,
  Bell,
  CalendarDays,
  CheckSquare,
  ChevronRight,
  CreditCard,
  FileText,
  FileUp,
  Home,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  ListOrdered,
  LogIn,
  Mail,
  Menu,
  MessageSquare,
  MousePointerClick,
  PanelRight,
  Radio,
  SlidersHorizontal,
  Smile,
  Sparkles,
  SquareStack,
  Table2,
  Tag,
  ToggleLeft,
  ToggleRight,
  Type,
  UserPlus,
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar"
import useIsRtl from "@/hooks/useIsRtl"

const sections = [
  {
    titleKey: "sidebar.dashboard",
    items: [{ titleKey: "sidebar.dashboard", url: "/", icon: LayoutDashboard }],
  },
  {
    titleKey: "sidebar.uiComponents",
    items: [
      { titleKey: "sidebar.cards", url: "/cards", icon: CreditCard },
      { titleKey: "sidebar.buttons", url: "/buttons", icon: MousePointerClick },
      { titleKey: "sidebar.badges", url: "/ui/badges", icon: Tag },
      { titleKey: "sidebar.toast", url: "/ui/toast", icon: Bell },
      { titleKey: "sidebar.tabs", url: "/ui/tabs", icon: SquareStack },
      { titleKey: "sidebar.modalPopups", url: "/ui/modal-popups", icon: Layers },
      { titleKey: "sidebar.sideDrawers", url: "/ui/side-drawers", icon: PanelRight },
      { titleKey: "sidebar.table", url: "/ui/table", icon: Table2 },
      { titleKey: "sidebar.dropdownMenu", url: "/ui/dropdown-menu", icon: Menu },
      { titleKey: "sidebar.progressBar", url: "/ui/progress-bar", icon: ListOrdered },
      { titleKey: "sidebar.charts", url: "/charts", icon: BarChart2 },
      { titleKey: "sidebar.accordion", url: "/ui/accordion", icon: ChevronRight },
      { titleKey: "sidebar.breadcrumb", url: "/ui/breadcrumb", icon: LayoutGrid },
      { titleKey: "sidebar.navigationMenu", url: "/ui/navigation-menu", icon: Home },
      { titleKey: "sidebar.alert", url: "/ui/alert", icon: AlertTriangle },
      { titleKey: "sidebar.profileSwitcher", url: "/ui/profile-switcher", icon: UserPlus },
    ],
  },
  {
    titleKey: "sidebar.forms",
    items: [
      { titleKey: "sidebar.form", url: "/forms/form", icon: FileText },
      { titleKey: "sidebar.input", url: "/forms/input", icon: Type },
      { titleKey: "sidebar.select", url: "/forms/select", icon: ListOrdered },
      { titleKey: "sidebar.checkbox", url: "/forms/checkbox", icon: CheckSquare },
      { titleKey: "sidebar.radio", url: "/forms/radio", icon: Radio },
      { titleKey: "sidebar.textarea", url: "/forms/textarea", icon: MessageSquare },
      { titleKey: "sidebar.datepicker", url: "/forms/datepicker", icon: CalendarDays },
      { titleKey: "sidebar.fileupload", url: "/forms/fileupload", icon: FileUp },
      { titleKey: "sidebar.slider", url: "/forms/slider", icon: SlidersHorizontal },
      { titleKey: "sidebar.toggle", url: "/forms/toggle", icon: ToggleLeft },
      { titleKey: "sidebar.switch", url: "/forms/switch", icon: ToggleRight },
      { titleKey: "sidebar.textEditor", url: "/forms/text-editor", icon: AlignLeft },
    ],
  },
  {
    titleKey: "sidebar.icons",
    items: [{ titleKey: "sidebar.hugeIcons", url: "/icons/huge-icons", icon: Smile }],
  },
  {
    titleKey: "sidebar.pages",
    items: [
      { titleKey: "sidebar.login", url: "/login", icon: LogIn },
      { titleKey: "sidebar.signup", url: "/signup", icon: UserPlus },
      { titleKey: "sidebar.emailTemplates", url: "/email-templates", icon: Mail },
      { titleKey: "sidebar.lottieIcons", url: "/lottie-icons", icon: Sparkles },
      { titleKey: "sidebar.services", url: "/services", icon: LayoutGrid },
    ],
  },
]

export function AppSidebar() {
  const location = useLocation()
  const { t } = useTranslation()
  const isRtl = useIsRtl()

  return (
    <Sidebar side={isRtl ? "right" : "left"} collapsible="icon" variant="floating" className="overflow-hidden ">
      <SidebarHeader className="flex group-data-[collapsible=icon]:flex-col flex-row items-center justify-between">
        {/* <span className="block size-[400px] absolute pointer-events-none top-0 left-0 -translate-x-[30%] -translate-y-[30%] bg-[radial-gradient(#F1FFFA,transparent_75%)] rounded-full"></span> */}
        <div className="flex  items-center px-2">
          <NavLink to="/" className="flex items-center">
            {/* Expanded: full colour logo */}
            <img
              src="/img/dp-logo-color.svg"
              alt="Dubai Police"
              className="aspect-[16/5] h-10 w-auto object-contain group-data-[collapsible=icon]:hidden"
            />
            {/* Collapsed: icon only */}
            <img
              src="/img/Dubai-Police-Default-Icon.svg"
              alt="Dubai Police"
              className="aspect-square h-8 w-auto object-contain hidden group-data-[collapsible=icon]:block"
            />
          </NavLink>
        </div>
        <SidebarTrigger className="m-4 " />
      </SidebarHeader>
      <SidebarContent>
        {sections.map((section) => (
          <SidebarGroup key={section.titleKey}>
            <SidebarGroupLabel>{t(section.titleKey)}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.titleKey}>
                    <SidebarMenuButton
                      isActive={location.pathname === item.url}
                      asChild
                    >
                      <NavLink to={item.url} >
                      <item.icon size={20} />
                      <span>{t(item.titleKey)}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}