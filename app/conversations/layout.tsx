import ConversationsList from "@/components/ConversationsList"
import Sidebar from "@/components/Sidebar"
import getConversations from "../actions/getConversations"

interface ConversationsLayoutProps {
    children: React.ReactNode
}

export default async function ConversationsLayout({ children }: ConversationsLayoutProps) {

    const conversations = await getConversations()

    return (
        <Sidebar>
            <div className="h-full">
                <ConversationsList initialItems={conversations}></ConversationsList>
                {children}
            </div>
        </Sidebar>
    )

}