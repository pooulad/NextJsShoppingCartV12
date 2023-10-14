import Layout from "../components/Layout"
import ProductItem from "../components/ProductItem"
import db from "../utils/db"
import Product from "../models/product"

function Home() {
  return (
    <Layout title={"Home page"}>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
        {ProductItems.map((item) => (
          <Product item={item} key={item.slug}></Product>
        ))}
      </div>
    </Layout>
  )
}


export default Home
