import Head from 'next/head'
import Link from 'next/link'

import { useContext, useState, useEffect } from 'react'

import { useSession, signOut } from 'next-auth/react'
import { Menu } from '@headlessui/react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Cookies from 'js-cookie'

import { Store } from '../context/Cart'

import DropDown from './DropDown'

function Layout({ title, children }) {
  const { status, data: session } = useSession()

  const { state, dispatch } = useContext(Store)
  const { cart } = state

  const [cartItemsCount, setCartItemsCount] = useState(0)

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.qty, 0))
  }, [cart.cartItems])

  function logoutHandler() {
    Cookies.remove()

    signOut({ callbackUrl: '/login' })
  }

  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </Head>
      <ToastContainer position='bottom-center' limit={1} />
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-14 px-8 justify-between items-center border-b-4 bg-white'>
            <Link href='/'>
              <a className='text-lg font-bold'>Shopping</a>
            </Link>
            <div>
              <Link href='/cart'>
                <a className='p-2'>
                  Cart
                  <span className='ml-1 rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold'>
                    {cartItemsCount}
                  </span>
                </a>
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as='div' className='relative inline-block'>
                  <Menu.Button className='text-blue-500'>
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className='absolute right-0 w-56 bg-white rounded-xl p-4 origin-top-right border-w border-slate-100'>
                    <Menu.Item>
                      <a className='flex p-2' href='#' onClick={logoutHandler}>
                        Logout
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <DropDown className='flex p-2' href='/order-history'>
                        Order History
                      </DropDown>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropDown className='flex p-2' href='/admin/dashboard'>
                          Dashboard
                        </DropDown>
                      </Menu.Item>
                    )}
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href='/login'>
                  <a className='p-2'>Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex justify-center items-center h-10'>
          Footer
        </footer>
      </div>
    </>
  )
}

export default Layout
