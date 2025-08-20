import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_API);
        console.log("mongoDB is connected");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;