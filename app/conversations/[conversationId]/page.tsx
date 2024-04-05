import getConversationById from "@/app/actions/getConversationById"
import getMessages from "@/app/actions/getMessages"
import Body from "@/components/Body"
import EmptyState from "@/components/EmptyState"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

interface IParams {
    conversationId: string
}

export default async function ConversationId({ params }: { params: IParams }) {
    const conversation = await getConversationById(params?.conversationId)
    const messages = await getMessages(params?.conversationId)

    if (!conversation) {
        return (
            <div className="lg:pl-80 h-full">
                <div className="h-full flex flex-col">
                    <EmptyState></EmptyState>
                </div>
            </div>
        )
    }

    return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <Header conversation={conversation}></Header>
                <Body initialMessages={messages}></Body>
                <Footer></Footer>
            </div>
        </div>
    )
}