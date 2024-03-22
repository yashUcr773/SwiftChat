"use client"

import EmptyState from "@/components/EmptyState"
import useConversation from "../hooks/useConversations"
import clsx from "clsx"

export default function Home() {

    const { isOpen } = useConversation()

    return (
        <div className={clsx(
          'lg:pl-80 h-full lg:block', 
          isOpen ? 'block' : 'hidden'
        )}>
          <EmptyState />
        </div>
      )
    }