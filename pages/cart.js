import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { CartContext } from '../context/Cart'
import Link from 'next/link'
import { AiFillHome } from "react-icons/ai"
import Image from 'next/image'
import { BsFillTrashFill } from "react-icons/bs"
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

function CartPage() {
    const router = useRouter();
    const { state, dispatch } = useContext(CartContext)
    const { cart: { cartItems } } = state

    function removeItemHandler(item) {
        dispatch({
            type: "REMOVE_ITEM",
            payload: item
        })
    }
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
                                <th className='p-5 text-right'>Quantity</th>
                                <th className='p-5 text-right'>Price</th>
                                <th className='p-5'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr className='border-b' key={item.slug}>
                                    <td>
                                        <span className='flex items-center'>
                                            <Image className='rounded hover:opacity-90' src={item.image} width={50} height={50} />
                                            <div className='p-2 my-auto'>{item.title}</div>
                                        </span>
                                    </td>
                                    <td className='p-5 text-right'>{item.qty}</td>
                                    <td className='p-5 text-right'>{item.price}</td>
                                    <td className='p-5 text-center'>
                                        <button className='flex flex-row items-center justify-around m-auto px-2 rounded-xl text-white bg-red-400' onClick={() => { removeItemHandler(item) }}>
                                            <span>Remove</span><BsFillTrashFill />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='p-5'>
                    <div className='pb-5'>
                        Total Price:{" "}
                        {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}
                    </div>
                   <div>
                   <button onClick={() => router.push("/shipping")} className='rounded-xl bg-gray-700 text-white px-4 py-2'>Checkout</button>
                   </div>
                </div>
            </div>}
        </Layout>
    )
}

export default dynamic(() => Promise.resolve(CartPage),{ssr : false})