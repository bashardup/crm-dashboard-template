import { SidebarProvider } from "@/components/ui/sidebar"
import React from "react"
import { AppSidebar } from "./app-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ThemeProvider } from "./theme-provider"
import { ModeToggle } from "./menu-toggle"
import { useTranslation } from "react-i18next"
import { BreadcrumbProvider, useBreadcrumbSlot } from "./breadcrumb-context"

function HeaderBreadcrumb() {
  const { breadcrumb } = useBreadcrumbSlot()
  return <>{breadcrumb}</>
}

function HeaderAction() {
  const { headerAction } = useBreadcrumbSlot()
  return <>{headerAction}</>
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const { i18n, t } = useTranslation()

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value === "ar" ? "ar" : "en"
        i18n.changeLanguage(selectedLanguage)
        localStorage.setItem("app-language", selectedLanguage)
    }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
            <BreadcrumbProvider>
            <SidebarProvider className="bg-secondary-10 dark:bg-black dark:bg-[linear-gradient(150deg,#016C56_-40%,transparent_40%)]">
                <AppSidebar />
                <main className="w-full">
                    <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
                        <div className="w-full flex-1">
                          <HeaderBreadcrumb />
                        </div>
                        <HeaderAction />
                        <select
                            aria-label={t("common.language")}
                            value={i18n.language === "ar" ? "ar" : "en"}
                            onChange={handleLanguageChange}
                            className="h-9 rounded-md border bg-background px-3 text-sm" >
                              <option value="en">{t("common.english")}</option>
                              <option value="ar">{t("common.arabic")}</option>
                        </select>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <ModeToggle />
                    </header>
                    
                    <div className="container mx-auto">
                        {children}
                    </div>
                </main>
            </SidebarProvider>
            </BreadcrumbProvider>
        </ThemeProvider>
    )
}

// Dashboard

// UI Components
// --Cards
// --Buttons
// --Badges 
// --Toast
// --Tabs
// --Modal Popups
// --Side Drawers
// --Table (with pagination and sorting)
// --Dropdown Menu
// --Progress Bar
// --Charts
// --Accordion
// --BreadCrumb
// --Navigation Menu
// --Alert

// Forms
// --Form
// --Input
// --Select
// --Checkbox
// --Radio
// --Textarea
// --Datepicker
// --Fileupload
// --Slider
// --Toggle
// --Switch
// --Text Editor

// Icons
// --HugeIcons





