
import mongoose from "mongoose";
import { Schema } from "mongoose";

var commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    desc: {
        type: String,
    },


}, { timestamps: true });

export default mongoose.model("Comment", commentSchema)