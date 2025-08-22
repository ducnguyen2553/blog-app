
import { format } from "timeago.js"
import MyImage from "./MyImage"


const Comment = ({ comment }) => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
            <div className="flex items-center gap-4">
                <MyImage src={comment.user.img || "/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"}
                    className="w-10 h-10 rounded-full object-cover "
                    w="40" />
                <span className="font-medium">{comment.user.username}</span>
                <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
            </div>
            <div className="mt-4">
                <p>
                    {comment.desc}
                </p>

            </div>
        </div>
    )
}

export default Comment