import mongoose from 'mongoose'

const CommentSchema  = mongoose.Schema({
     userId: String,
     userCommented: String,
     commentBody: String,
    answeredOn: { type: Date, default: Date.now},
   
})

export default mongoose.model("comment", CommentSchema)