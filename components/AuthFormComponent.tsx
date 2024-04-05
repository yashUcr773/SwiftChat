"use client"

import { useCallback, useEffect, useState } from "react"
import { SubmitHandler, FieldValues, useForm } from "react-hook-form"
import InputComponent from "./InputComponent"
import ButtonComponent from "./ButtonComponent"
import AuthSocialButtonsComponent from "./AuthSocialButtonsComponent"
import { BsGithub, BsGoogle } from "react-icons/bs"
import axios from "axios"
import toast from "react-hot-toast"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

type VARIANT = 'LOGIN' | "REGISTER"
type SOCIALS = 'github' | 'google'

export default function AuthFormComponent() {

    const session = useSession()
    const router = useRouter()
    const [variant, setVariant] = useState<VARIANT>('LOGIN')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (session.status === 'authenticated') {
            router.push('/users')
        }
    }, [router, session])

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true)

        try {
            if (variant === 'REGISTER') {
                await axios.post('/api/register', data)
                toast.success('Sign up successful!')
                router.push('/users')

            }
            if (variant === 'LOGIN') {
                let result = await signIn('credentials', {
                    ...data, redirect: false
                })
                if (result?.error) {
                    toast.error('Invalid Credentials!')
                }
                if (result?.ok && !result?.error) {
                    toast.success('Log in Successful!')
                    router.push('/users')
                }

            }
        } catch (e) {
            toast.error('Something went wrong!')
        }
        finally {
            setLoading(false)
        }

    }

    const socialAction = async (action: SOCIALS) => {
        try {
            setLoading(true)
            const result = await signIn(action, { redirect: false })
            if (result?.error) {
                toast.error('Invalid Credentials!')
            }
            if (result?.ok && !result?.error) {
                toast.success('Log in Successful!')
                router.push('/users')
            }
        } catch (e) {
            toast.error('Something went wrong!')
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {
                        variant === 'REGISTER' && (
                            <InputComponent label="Name" id="name" disabled={loading} register={register} errors={errors} />
                        )
                    }
                    <InputComponent label="Email Address" id="email" disabled={loading} type="email" register={register} errors={errors} />
                    <InputComponent label="Password" id="password" disabled={loading} type="password" register={register} errors={errors} />
                    <div>
                        <ButtonComponent type="submit" fullWidth disabled={loading}>
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </ButtonComponent>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or contiue with</span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButtonsComponent icon={BsGithub} onClick={() => socialAction('github')}></AuthSocialButtonsComponent>
                        <AuthSocialButtonsComponent icon={BsGoogle} onClick={() => socialAction('google')}></AuthSocialButtonsComponent>
                    </div>
                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    {variant === 'LOGIN' ? 'New to Messenger?' : "Already a user?"}
                    <div onClick={toggleVariant} className="underline cursor-pointer">
                        {variant === 'LOGIN' ? 'Create an account' : "Login"}
                    </div>
                </div>
            </div>
        </div>
    )
}