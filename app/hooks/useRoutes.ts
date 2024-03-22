import { usePathname } from "next/navigation";
import useConversation from "./useConversations";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";

export default function useRoutes() {
    const pathName = usePathname()
    const { conversationId } = useConversation()

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathName === '/conversations' || !!conversationId
        }, {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathName === '/users'
        }, {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiArrowLeftOnRectangle,
        }
    ], [pathName, conversationId])
    return routes
}