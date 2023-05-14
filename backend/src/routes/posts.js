const { Router } = require('express');
const router_Post = Router();

router_Post.post('/', (req, res) => {
    res.send('<h1>Ruta post</h1>')
})

module.exports = router_Post;