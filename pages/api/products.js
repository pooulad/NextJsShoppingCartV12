import db from "../../utils/db"
import Product from "../../models/product"
import productsItems from "../../data/products"

export default async function handler(req, res) {
  await db.connect()

  await Product.deleteMany()

  await Product.insertMany(productsItems)

  res.send({ message: "products added" })
}
