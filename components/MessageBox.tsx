"use client"

import { FullMessagetype } from "@/app/types"
import clsx from "clsx"
import { useSession } from "next-auth/react"
import Avatar from "./Avatar"
import { format } from "date-fns"
import Image from "next/image"
import { useState } from "react"
import ImageModal from "./ImageModal"

interface MessageBoxProps {
    isLast: boolean
    data: FullMessagetype
}

export default function MessageBox({ data, isLast }: MessageBoxProps) {

    const session = useSession();
    const [imageModalOpen, setImageModelOpen] = useState(false)


    const isOwn = session.data?.user?.email === data?.sender.email;
    const seenList = (data?.seen || []).filter(user => user.email !== data?.sender.email).map(user => user?.name).join(', ')

    const container = clsx("flex gap-3 p-4", isOwn && "justify-end")
    const avatar = clsx(isOwn && 'order-2')
    const body = clsx("flex flex-col gap-2", isOwn && "items-end")
    const message = clsx("text-sm w-fit overflow-hidden", isOwn ? 'bg-green-500 text-white' : 'bg-gray-100', data?.image ? 'rounded-md p-0 !bg-gray-100' : "rounded-full py-2 px-3")

    return (
        <div className={container}>
            <div className={avatar}> <Avatar user={data?.sender}></Avatar></div>
            <div className={body}>
                <div className="flex items-center gap-1">
                    <div className="text-sm text-gray-500">{data?.sender?.name}</div>
                    <div className="text-xs text-gray-400">{format(new Date(data?.createdAt), 'p')}</div>
                </div>
                <div className={message}>
                    <ImageModal src={data?.image} isOpen={imageModalOpen} onClose={() => { setImageModelOpen(false) }}></ImageModal>
                    {
                        data?.image ?
                            (<Image onClick={() => { setImageModelOpen(true) }} className="object-cover cursor-pointer hover:scale-110 transition translate" src={data?.image} alt='image' height={144} width={144}></Image>) :
                            <div>{data?.body}</div>
                    }
                </div>
                {isLast && isOwn && seenList.length > 0 && (
                    <div className="text-xs font-light text-gray-500">{`Seen by ${seenList}`}</div>
                )}
            </div>
        </div>
    )
}