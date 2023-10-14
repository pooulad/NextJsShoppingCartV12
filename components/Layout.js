import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/Cart'
import { useSession } from "next-auth/react"

function Layout({ children, title }) {
    const { status, data: session } = useSession()
    const { state, dispatch } = useContext(CartContext)
    const { cart } = state

    const [cartItemsCount, setCartItemsCount] = useState(0);
    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((acc, cur) => acc + cur.qty, 0))
    }, [cart.cartItems])
    return (
        <>
            <Head>
                <title>{`${title} - Shopping`}</title>
            </Head>
            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex h-14 px-8 justify-between items-center border-b-4 bg-white'>
                        <Link href={"/"}>
                            <a className='text-lg font-bold'>Shopping</a>
                        </Link>
                        <div>
                            <Link href={"/cart"}>
                                <a className='p-2'>
                                    Cart
                                    {cart.cartItems.length > 0 && (
                                        <span className='ml-1 rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold'>{cartItemsCount}</span>
                                    )}
                                </a>
                            </Link>
                            {state === "loading" ? "Loading" : (
                                session?.user ? (
                                    session.user.name
                                ) : (

                                    <Link href={"/login"}>
                                        <a className='p-2'>Login</a>
                                    </Link>
                                )
                            )}
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4'>{children}</main>
                <footer className='flex justify-center items-center h-10'>footer</footer>
            </div>
        </>
    )
}

export default Layout