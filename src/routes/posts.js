const express = require("express");
const router = express.Router();

const PostController = require("../controllers/PostController");

router.get("/", PostController.getPosts);
router.post("/", PostController.savePost);
router.patch("/:id", PostController.editPost);
router.get("/:id", PostController.getPostId);



router.delete("/:id", (req, res) => {
  res.send(`delete id ${req.params.id}`);
});

module.exports = router;
