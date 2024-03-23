"use client"

import useConversation from "@/app/hooks/useConversations"
import { useRouter } from "next/navigation"
import Modal from "./Modal"
import { useCallback, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { FiAlertTriangle } from 'react-icons/fi'
import { Dialog } from "@headlessui/react"
import ButtonComponent from "./ButtonComponent"

interface ConfirmModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ConfirmModal({ isOpen, onClose }: ConfirmModalProps) {

    const router = useRouter()
    const { conversationId } = useConversation()
    const [isLoading, setIsLoading] = useState(false)

    const onDelete = useCallback(async () => {
        try {

            setIsLoading(true)
            await axios.delete(`/api/conversations/${conversationId}`)
            onClose()
            router.push('/conversations')
            router.refresh()
        } catch (e) {
            toast.error('Something went wrong!')
        } finally {
            setIsLoading(false)
        }
    }, [conversationId, router, onClose])


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FiAlertTriangle className="h-6 w-6 text-red-600"></FiAlertTriangle>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as='h3' className='text-base font-semibold leading-6 text-gray-900'>
                        Delete Conversation
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Are you sure you want to delete this conversation? This action can not by undone.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <ButtonComponent danger onClick={onDelete} disabled={isLoading}>Delete</ButtonComponent>
                <ButtonComponent secondary onClick={onClose} disabled={isLoading}>Cancel</ButtonComponent>
            </div>
        </Modal>
    )
}