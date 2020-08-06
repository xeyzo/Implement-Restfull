const { post } = require("../models");

const response = {
  data: [],
  message: "Your Message",
  status: "success",
};

class CommentController {
  static async getComment(req, res) {
    const comment = await comment.findAll();
    response.data = comment;
    response.message = "Succes get data";

    res.json(response);
  }

  static async getCommentId(req, res) {
    const commentId= req.params.id;
    const comment = data.find(commentId => comment.id === commentId);
    if (comment) {
      res.status(201).json();
   } else {
      res.status(400).json({ message: `item ${commentId} doesn't exist`})
   }
  }



  static async saveComment(req, res) {
    const {
      body: { content, status, userId, email, url, postId },
    } = req;

    try {
      const insert = await post.create({
        content,
        status,
        userId,
        email,
        url,
        postId
      });
      response.data = insert;
      response.message = "Succes save data";

      res.status(201).json(response);
    } catch (error) {
      response.data = [];
      response.message = "failed save data";
      res.status(400).json(response);
    }
  }

  static async editComment(req, res){
    const commentId = req.params.id;
    const  { 
        content,
        status,
        userId,
        email,
        url,
        postId
    } = req.body;
    const update = await comment.update({
        content,
        status,
        userId,
        email,
        url,
        postId
    }, {
      where: {
        id: commentId
      }
    });
    if (post) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'post berhasil diupdate',
        'data': update,
      })
    }
  }
    catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
  }
    }
  


module.exports = CommentController;
