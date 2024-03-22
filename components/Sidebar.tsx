import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileFooter"

interface SidebarProps {
    children: React.ReactNode
}
export default async function Sidebar({ children }: SidebarProps) {
    return (
        <div className="h-full">
            <DesktopSidebar></DesktopSidebar>
            <MobileFooter></MobileFooter>
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}