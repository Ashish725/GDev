import mongoose from 'mongoose'
import Comments from '../models/comment.js'
export const postComment = async(req, res) => {
    const postCommentData = req.body;
    const userId = req.userId;
    const postComment = new Comments({ ...postCommentData, userId});
    try {
        await postComment.save();
        res.status(200).json("Posted a commented successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post a new comment")        
    }
}