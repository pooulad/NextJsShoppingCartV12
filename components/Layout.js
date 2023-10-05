import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{`${title} - Shopping`}</title>
            </Head>
            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex h-14 px-8 justify-between items-center border-b-4'>
                        <Link href={"/"}>
                            <a className='text-lg font-bold'>Shopping</a>
                        </Link>
                        <div>
                            <Link href={"/cart"}>
                                <a className='p-2'>Cart</a>
                            </Link>
                            <Link href={"/login"}>
                                <a className='p-2'>Login</a>
                            </Link>
                        </div>
                    </nav>
                </header>
                <main>{children}</main>
                <footer>footer</footer>
            </div>
        </>
    )
}

export default Layout