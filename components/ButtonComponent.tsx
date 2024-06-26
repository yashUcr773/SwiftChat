"use client"

import clsx from "clsx"

interface ButtonComponentProps {
    type?: 'button' | 'submit' | 'reset' | undefined,
    fullWidth?: boolean
    children: React.ReactNode
    onClick?: () => void
    secondary?: boolean
    danger?: boolean
    disabled?: boolean
}

export default function ButtonComponent({ children, danger, disabled, fullWidth, onClick, secondary, type }: ButtonComponentProps) {
    return (
        <button onClick={onClick} type={type} disabled={disabled}
            className={clsx('flex justify-center rounded-md px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                disabled && 'opacity-50 cursor-default',
                fullWidth && 'w-full',
                secondary ? 'text-gray-900' : 'text-white',
                danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
                !secondary && !danger && "bg-green-500 hover:bg-green-600 focus-visible:outline-green-600")}>
            {children}
        </button>
    )
}