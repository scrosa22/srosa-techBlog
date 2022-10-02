const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: { user_id: req.session.user_id},
            attributes: ['id', 'postTitle', 'postContents'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'user_id', 'post_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ]
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ],
       
        });
        const postsList = posts.map(x => x.get({plain: true}));

        const user = await User.findByPk(req.session.user_id, {
            attributes: ['username']
        });
        const username = user.username;
        const data = {username, postsList};
        res.render('dashboard', {data, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/create/', withAuth, async (req, res) => {
    try {
        const data = await Post.findAll({
            where: {user_id: req.session.user_id},
            attributes: ['id', 'postTitle', 'postContents'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'user_id', 'post_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ]
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const postsList = data.map(x => x.get({plain: true}));
        res.render('createPost', {postsList, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const data = await Post.findByPk(req.params.id, {
            attributes: ['id', 'postTitle', 'postContents'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'user_id', 'post_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ]
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const post = data.get({plain: true});
        res.render('edit-post', {post, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err); 
    }
});

router.get('/editComment/:id', withAuth, async (req, res) => {
    try {
        const data = await Comment.findByPk(req.params.id, {
            attributes: ['id', 'postTitle', 'postContents'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const comment = data.get({plain: true});
        res.render('edit-comment', {comment, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err); 
    }
});

module.exports = router;