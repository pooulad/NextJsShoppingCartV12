import mongoose from "mongoose";


async function connect() {
    // online address sample
    // const uri = "mongodb+srv://poooooladi:YNT4q0yU57LqmDlb@cluster0.oc3ohkf.mongodb.net/?retryWrites=true&w=majority";


    // connect to local server with run this code :
    // step 1 : cd "C:\Program Files\MongoDB\Server\[MongoDB version]\bin"
    // step 2 : mongod -> runs the server in cmd
    const uri = "mongodb://127.0.0.1:27017/nextJsShopv12";

    await mongoose.connect(uri)

    console.log("Connected");
}

const db = { connect }
export default db