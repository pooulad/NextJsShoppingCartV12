import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import ProductItems from "../../data/products.json"

function SingleProductPage() {
    const { query } = useRouter();
    const { slug } = query;

    const Product = ProductItems.find((item) => item.slug === slug)
    
    if(!Product){
        return <div>Product Not Found.</div>
    }
    return (
        <Layout title={Product.title}>
            <div>{Product.title}</div>
        </Layout>
    )
}

export default SingleProductPage