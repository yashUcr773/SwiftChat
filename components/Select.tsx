"use client"

import ReactSelect from 'react-select'

interface SelectProps {
    disabled?: boolean
    label: string
    options: Record<string, any>[]
    onChange: (value: Record<string, any>) => void
    value: Record<string, any>[]
}

export default function Select({ disabled, label, options, onChange, value }: SelectProps) {
    return (
        <div className="z-[100]">
            <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
            <div className="mt-2">
                <ReactSelect isDisabled={disabled} value={value} onChange={onChange} isMulti options={options} menuPortalTarget={document.body} styles={{
                    menuPortal: (base) => ({ ...base, zIndex: 999 })
                }} classNames={{ control: () => "text-sm" }}></ReactSelect>
            </div>
        </div>
    )
}