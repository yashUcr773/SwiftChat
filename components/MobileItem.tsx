
import clsx from "clsx"
import Link from "next/link"

interface MobileItemProps {
    label: string
    href: string
    icon: any
    active?: boolean
    onClick?: () => void
}

export default function MobileItem({ href, label, onClick, active, icon: Icon }: MobileItemProps) {
    const handleClick = () => {
        if (onClick) {
            return onClick()
        }
    }
    return (
        <Link href={href} onClick={handleClick} className={clsx("group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100", active && 'bg-gray-100 && text-black')}>
            <Icon className="w-6 h-6"></Icon>
        </Link>
    )
}