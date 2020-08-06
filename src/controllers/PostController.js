const { post } = require("../models");

const response = {
  data: [],
  message: "Your Message",
  status: "success",
};

class PostController {
  static async getPosts(req, res) {
    const post = await post.findAll();
    response.data = post;
    response.message = "Succes get data";

    res.json(response);
  }

  static async getPostId(req, res) {
    const postId= req.params.id;
    const post = data.find(postId => post.id === postId);
    if (post) {
      res.status(201).json();
   } else {
      res.status(400).json({ message: `item ${postId} doesn't exist`})
   }
  }



  static async savePost(req, res) {
    const {
      body: { title, content, tags, status, userId },
    } = req;

    try {
      const insert = await post.create({
        title,
        content,
        tags,
        status,
        userId,
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

  static async editPost(req, res){
    const postId = req.params.id;
    const  { 
      title, 
      content, 
      tags, 
      status, 
      userId 
    } = req.body;
    const update = await post.update({
      title,
      content,
      tags,
      status,
      userId
    }, {
      where: {
        id: postId
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
  


module.exports = PostController;
