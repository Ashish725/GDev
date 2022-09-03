import express from "express"

import { postComment } from '../controllers/Comments.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.patch('/post/:id', auth, postComment)
 

export default router