"use client"

import useConversation from "@/app/hooks/useConversations"
import axios from "axios"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2"
import MessageInput from "./MessageInput"
import { CldUploadButton } from 'next-cloudinary'

export default function Footer() {
    const { conversationId } = useConversation()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            'message': ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('here')
        setValue('message', "", { shouldValidate: true })
        axios.post('/api/messages', {
            ...data, conversationId
        })
    }

    const handleUpload = (result: any) => {
        axios.post('/api/messages', { image: result.info.secure_url, conversationId })
    }

    return (
        <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
            <CldUploadButton options={{ maxFiles: 1 }} onSuccess={handleUpload} uploadPreset="bojx8ogh">
                <HiPhoto size={30} className="text-green-500"></HiPhoto>
            </CldUploadButton>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
                <MessageInput id="message" register={register} errors={errors} required placeholder='Write a message'></MessageInput>
                <button type="submit" className="rounded-full p-2 bg-green-500 cursor-pointer hover:bg-green-600 transition">
                    <HiPaperAirplane className="text-white" size={18}></HiPaperAirplane>
                </button>
            </form>
        </div>
    )
}