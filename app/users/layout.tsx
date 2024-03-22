import Sidebar from "@/components/Sidebar"
import React from "react"
import getUsers from "../actions/getUsers"
import UsersList from "@/components/UsersList"

interface UsersLayoutProps {
    children: React.ReactNode
}

export default async function UsersLayout({ children }: UsersLayoutProps) {

    const users = await getUsers()

    return (
        <Sidebar>
            <div className="h-full">
                <UsersList items={users}></UsersList>
                {children}
            </div>
        </Sidebar>
    )
}