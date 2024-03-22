"use client"
import useConversation from "@/app/hooks/useConversations"
import useRoutes from "@/app/hooks/useRoutes"
import MobileItem from "./MobileItem"

export default function MobileFooter() {
    const routes = useRoutes()
    const { isOpen } = useConversation()

    if (isOpen) {
        return null
    }

    return (
        <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
            {routes.map((route) => (
                <MobileItem key={route.label} {...route}></MobileItem>
            ))}
        </div>
    )
}