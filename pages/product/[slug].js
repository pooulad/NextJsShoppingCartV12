import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { CartContext } from '../../context/Cart';
import db from '../../utils/db';
import Product from '../../models/product';

function SingleProductPage() {
    const { state, dispatch } = useContext(CartContext)
    const router = useRouter();
    const { query } = useRouter();
    const { slug } = query;

    const Product = ProductItems.find((item) => item.slug === slug)

    if (!Product) {
        return <div>Product Not Found.</div>
    }

    function addToCartHandler() {
        const existingItem = state.cart.cartItems.find(
            (item) => item.slug === Product.slug
        )

        const qty = existingItem ? existingItem.qty + 1 : 1

        if (Product.cound < qty) {
            alert('You cant add this product anymore')
            return
        }

        dispatch({ type: "ADD_ITEMS", payload: { ...Product, qty } })

        router.push("/cart")
    }
    return (
        <Layout title={Product.title}>
            <div className='grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10'>
                <div className='md:col-span-2'>
                    <Image className='rounded-xl' src={Product.image} width={340} height={340} layout='responsive' />
                </div>
                <div>
                    <div className='text-lg'>
                        <h2>{Product.title}</h2>
                        <p>{Product.cat}</p>
                        <p>{Product.description}</p>
                    </div>
                    <div className='p-5'>
                        <div className='mb-2 flex justify-between'>
                            <div>Price:</div>
                            <div>{Product.price}</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Status:</div>
                            <div>{Product.cound > 0 ? "Available" : "Unavailable"}</div>
                        </div>
                        <button onClick={addToCartHandler} className='rounded-xl bg-gray-700 text-white px-4 py-2 w-full'>Add to cart</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleProductPage



export async function getServerSideProps(context) {
