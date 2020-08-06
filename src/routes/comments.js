const express = require("express");
const router = express.Router();

const CommentController = require("../controllers/CommentController");

router.get("/", CommentController.getComment);
router.post("/", CommentController.saveComment);
router.patch("/:id", CommentController.editComment);
router.get("/:id", CommentController.getCommentId);



router.delete("/:id", (req, res) => {
  res.send(`delete id ${req.params.id}`);
});

module.exports = router;
