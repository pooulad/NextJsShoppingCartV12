import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { CartContext } from '../context/Cart'
import Link from 'next/link'
import { AiFillHome } from "react-icons/ai"

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
            </div> : <div className='grid md:grid-cols-4 md:gap-5'>
                <div className='overflow-x-auto md:col-span-3'>
                    <table className='min-w-full'>
                        <thead>
                            <tr>
                                <th className='px-5 text-left'>Item</th>
                                <th className='p-5 text-left'>Quantity</th>
                                <th className='p-5 text-right'>Price</th>
                                <th className='p-5'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr className='border-b' key={item.slug}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}
        </Layout>
    )
}

export default CartPage