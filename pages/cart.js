import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { CartContext } from '../context/Cart'
import Link from 'next/link'
import {AiFillHome} from "react-icons/ai"

function CartPage() {
    const { state, dispatch } = useContext(CartContext)
    const { cart: { cartItems } } = state
    return (
        <Layout title="Shopping Cart">
            <h1 className='mb-4 text-lg'>Shopping Cart</h1>
            {cartItems.length === 0 ? <div className='bg-amber-400 rounded-xl p-4 text-white font-bold flex flex-row justify-between'>
                <div>Cart is Empty😭</div>
                <Link href={"/"}>
                    <a><AiFillHome /></a>
                </Link>
            </div> : <div>s</div>}
        </Layout>
    )
}

export default CartPage