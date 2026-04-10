import { SidebarProvider } from "@/components/ui/sidebar"
import React from "react"
import { AppSidebar } from "./app-sidebar"
import { Input } from "./ui/input"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ThemeProvider } from "./theme-provider"
import { ModeToggle } from "./menu-toggle"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full bg-secondary-10">
                    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                        <div className="w-full flex-1">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search products..."
                                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                    />
                                </div>
                            </form>
                        </div>
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
        </ThemeProvider>
    )
}
