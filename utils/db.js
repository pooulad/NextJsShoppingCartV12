import mongoose from "mongoose";


async function connect() {
    const uri = "mongodb+srv://poooooladi:YNT4q0yU57LqmDlb@cluster0.oc3ohkf.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(uri)

    console.log("Connected");
}

const db = { connect }
export default db