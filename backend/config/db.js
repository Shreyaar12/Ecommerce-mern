import mongoose from "mongoose";

const connectDB= async() =>{
try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    // we re waiting on the promise that mongoose ocnnect will return 
    console.log(`MONGODB CONNECTED : ${conn.connection.host}`)
} catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);

}
};
export default connectDB;