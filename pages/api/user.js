import db from "../../utils/db"
import User from "../../models/user"
import userItems from "../../data/users"

export default async function handler(req, res) {
  await db.connect()

  await User.deleteMany()

  await User.insertMany(userItems)

  res.send({ message: "user added" })
}
