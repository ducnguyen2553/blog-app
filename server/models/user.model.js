
import mongoose from "mongoose";
import { Schema } from "mongoose";

var userSchema = new Schema({
    clerkUserId: {
        type: String,
        require: true,
        unique: true,
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    img: {
        type: String,
    },
    savedPosts: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

export default mongoose.model("User", userSchema)