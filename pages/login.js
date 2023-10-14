import React from 'react'
import Layout from "../components/Layout"
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { signIn } from "next-auth/react"

function login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    async function submitHandler({ email, password }) {
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password
            })

            if (result.error) {
                console.log("result error is : ", result.error);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout title="Login">
            <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
                <h2 className='mb-4 text-xl'>Login</h2>
                <div className='mb-4'>
                    <input {...register("email", { required: true })} type='email' className='w-full rounded-xl p-2 outline-0' id='email' placeholder='Email' autoFocus />
                </div>
                {errors.email && (
                    <div className='text-red-500'>Please enter email.</div>
                )}
                <div className='mb-4'>
                    <input {...register("password", {
                        required: true, minLength: {
                            value: 5,
                            message: "Password must be at least 5 chars."
                        }
                    })} type='password' className='w-full rounded-xl p-2 outline-0' id='password' placeholder='Password' autoFocus />
                </div>
                {errors.password && (
                    <div className='text-red-500'>{errors.password.message}</div>
                )}
                <div className='mb-4'>
                    <button className='rounded-xl bg-gray-700 text-white px-4 py-2 w-28'>Login</button>
                </div>
                <div className='mb-4'>
                    <Link href="/register">Register</Link>
                </div>
            </form>
        </Layout>
    )
}

export default login