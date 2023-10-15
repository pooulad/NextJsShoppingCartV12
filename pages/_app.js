import { CartContextProvider } from '../context/Cart'
import '../styles/globals.css'
import { SessionProvider, useSession } from "next-auth/react"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className='bg-gray-100'>
      <SessionProvider session={session}>
        <CartContextProvider>
          <Auth adminOnly={Component.auth.adminOnly}>
            <Component {...pageProps} />
          </Auth>
        </CartContextProvider>
      </SessionProvider>
    </div>
  )
}

export default MyApp
