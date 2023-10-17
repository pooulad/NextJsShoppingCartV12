import { useContext } from 'react'
import { toast } from 'react-toastify'

import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'

import { Store } from '../context/Cart'

import db from '../utils/db'
import Product from '../models/product'

function Home({ products }) {
  const { state, dispatch } = useContext(Store)
  const { cart } = state

  function addToCartHandler(product) {
    const existingItem = cart.cartItems.find(
      (item) => item.slug === product.slug
    )

    const qty = existingItem ? existingItem.qty + 1 : 1

    dispatch({ type: 'ADD_TO_CART', payload: { ...product, qty } })

    toast.success('Product added.')
  }

  return (
    <Layout title='Home Page'>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((pItem) => (
          <ProductItem
            addToCart={addToCartHandler}
            item={pItem}
            key={pItem.slug}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  )
}

export default Home

export async function getServerSideProps() {
  await db.connect()

  const products = await Product.find().lean()

  return {
    props: { products: products.map(db.convertToObj) },
  }
}
