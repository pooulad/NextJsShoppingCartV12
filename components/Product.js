import Link from 'next/link'
import React from 'react'

function Product({ item }) {
    return (
        <div className='bg-white rounded-xl mb-5 block'>
            <Link href={`/product/${item.slug}`}>
                <a>
                    <img src={item.image} alt={item.title} className='rounded-t-xl' />
                </a>
                <div className='flex flex-col items-center justify-center p-5'>
                    <Link href={`/product/${item.slug}`}>
                        <a>
                            <h2 className='text-lg'>{item.title}</h2>
                        </a>
                    </Link>
                    <p className='p-2'>{item.price}</p>
                    <button className='rounded-xl bg-gray-700 text-white px-4 py-2'>Add to cart</button>
                </div>
            </Link>
        </div>
    )
}

export default Product