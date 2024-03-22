import Sidebar from "@/components/Sidebar"
import React from "react"

interface UsersLayoutProps {
    children: React.ReactNode
}

export default async function UsersLayout({ children }: UsersLayoutProps) {
    return (
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    )
}