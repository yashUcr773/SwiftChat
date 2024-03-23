"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface MessageInputProps {
    id: string
    type?: string
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    placeholder?: string
    required?: boolean
}

export default function MessageInput({ id, register, type, errors, placeholder, required }: MessageInputProps) {
    return (
        <div className="relative w-full">
            <input id={id} type={type} autoComplete={id} {...register(id, { required })} placeholder={placeholder}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none">
            </input>
        </div>
    )
}