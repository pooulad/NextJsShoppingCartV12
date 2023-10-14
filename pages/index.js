import Layout from "../components/Layout"
import ProductItem from "../components/ProductItem"
import db from "../utils/db"
import Product from "../models/product"
import { useContext } from "react"
import {CartContext} from "../context/Cart"

function Home({ products }) {
  const { state, dispatch } = useContext(CartContext)
  const { cart } = state

  function addToCartHandler(product) {
    const existingItem = cart.cartItems.find(
      (item) => item.slug === product.slug
    )

    const qty = existingItem ? existingItem + 1 : 1

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, qty }
    })
  }
  return (
    <Layout title={"Home page"}>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <ProductItem addToCartHandler={addToCartHandler} item={item} key={item.slug}></ProductItem>
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
    props: {
      products: products.map(db.convertToObj)
    }
  }
}
