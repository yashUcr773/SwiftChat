"use client"
import useConversation from "@/app/hooks/useConversations"
import useRoutes from "@/app/hooks/useRoutes"
import MobileItem from "./MobileItem"
import SettingsModal from "./SettingsModal"
import Avatar from "./Avatar"
import { User } from "@prisma/client"
import { useState } from "react"

interface DesktopSidebarProps {
    currentUser: User
}

export default function MobileFooter({ currentUser }: DesktopSidebarProps) {
    const routes = useRoutes()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { isOpen } = useConversation()

    if (isOpen) {
        return null
    }

    return (
        <>
            <SettingsModal currentUser={currentUser} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></SettingsModal>
            <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
                {routes.map((route) => (
                    <MobileItem key={route.label} {...route}></MobileItem>
                ))}
                <div onClick={() => { setIsModalOpen(true) }} className="cursor-pointer hover:opacity-75 transition group flex h-fit w-fit mx-4 rounded-full justify-center text-gray-500 hover:text-black hover:bg-gray-100">
                    <Avatar user={currentUser}></Avatar>
                </div>
            </div>
        </>
    )
}