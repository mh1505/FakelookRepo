const commentsService = require('../services/commentsService')


const commentsController = () => {

    const getCommentsByPostId = (req, res) => {
        try {
            commentsService.getCommentsByPostId(req.params.id, (data) => {
                res.json(data)
            })
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send(err.message)
        }
    }

    return {
        getCommentsByPostId
    };
}

module.exports = commentsController;
