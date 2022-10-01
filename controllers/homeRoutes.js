const router = require("express").Router();
const { User, Post, Comment } = require("../models/");
const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'postTitle', 'postContents'],
    include: [{model: Comment, attributes: ['id', 'comment', 'post_id', 'user_id'], include: {model: User, attributes: ['username']}}, {model: User, attributes: ['username']}]
  })
.then(postData => {
  const posts = postData.map(post => post.get({plain: true}));
  res.render('homepage')
  // , {posts, logged_in: req.session.logged_in}
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
})
})


module.exports = router;
