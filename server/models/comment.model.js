
import mongoose from "mongoose";
import { Schema } from "mongoose";

var commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        require: true
    },
    desc: {
        type: String,
    },


}, { timestamps: true });

export default mongoose.model("Comment", commentSchema)