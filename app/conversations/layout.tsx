import ConversationsList from "@/components/ConversationsList"
import Sidebar from "@/components/Sidebar"
import getConversations from "../actions/getConversations"
import getUsers from "../actions/getUsers"

interface ConversationsLayoutProps {
    children: React.ReactNode
}

export default async function ConversationsLayout({ children }: ConversationsLayoutProps) {

    const conversations = await getConversations()
    const users = await getUsers()

    return (
        <Sidebar>
            <div className="h-full">
                <ConversationsList initialItems={conversations} users={users}></ConversationsList>
                {children}
            </div>
        </Sidebar>
    )

}