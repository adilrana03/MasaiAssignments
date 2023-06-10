const Post = require('../Database/post');

async function createBlog(req, res) {
    let { post: postData } = req.body;

    let post = new Post(postData);
    await post.save();
    return res.send({
        data: post,
        message: ' Your Post has been added',
    });
}

async function getPost(req, res) {
    let post = await Post.find();
    return res.send({
        data: post,
    });
}

async function updatePost(req, res) {
    let { id } = req.params;
    let { post: postData } = req.body;
    let post = await Post.findById(id);
    for (const [key, value] of Object.entries(postData)) {
        post[key] = value;
    }
    await post.save();
    return res.send({
        msg: 'post has been updated',
        data: posts,
    });
}

async function deletePost(req, res, next) {
    let { id } = req.params;

    await Post.findByIdAndDelete(id);

    return res.send({
        msg: 'Your Post has been Deleted',
    });
}

module.exports = {
    createBlog,
    getPost,
    updatePost,
    deletePost,
};
