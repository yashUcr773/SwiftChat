import getCurrentUser from "@/app/actions/getCurrentUser"
import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileFooter"

interface SidebarProps {
    children: React.ReactNode
}
export default async function Sidebar({ children }: SidebarProps) {

    const currentUser = await getCurrentUser()

    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!}></DesktopSidebar>
            <MobileFooter></MobileFooter>
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}