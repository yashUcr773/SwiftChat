"use client"

import { User } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import Modal from "./Modal"
import InputComponent from "./InputComponent"
import Image from "next/image"
import { CldUploadButton } from "next-cloudinary"
import ButtonComponent from "./ButtonComponent"
import Select from "./Select"

interface GroupChatModalProps {
    isOpen: boolean
    onClose: () => void
    users: User[]
}

export default function GroupChatModal({ isOpen, onClose, users }: GroupChatModalProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            members: []
        }
    })

    const members = watch('members')

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {

            setIsLoading(true)
            await axios.post('/api/conversations', {
                ...data, isGroup: true
            })
            router.refresh()
            onClose()

        } catch (e) {
            toast.error('Something went wrong!')
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-700">
                            Create a group chat
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Create a chat with more than 2 poeple
                        </p>
                        <div className="mt-10 flex flex-col gap-y-8">
                            <InputComponent register={register} label="Name" id="name" disabled={isLoading} required errors={errors}></InputComponent>
                            <Select disabled={isLoading} label='Members' options={
                                users.map(user => ({ label: user.name, value: user.id }))} onChange={(value) => { setValue('members', value, { shouldValidate: true }) }} value={members}></Select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <ButtonComponent disabled={isLoading} secondary onClick={onClose} type="button">Cancel</ButtonComponent>
                        <ButtonComponent disabled={isLoading} type="submit">Create</ButtonComponent>
                    </div>
                </div>
            </form>
        </Modal>
    )
}