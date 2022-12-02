import { Router } from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
const router = Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", getUserPosts);
router.patch("/:id/like", verifyToken, likePost);

export default router;
