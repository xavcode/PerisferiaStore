const { StoreReview, Users } = require('../../db');

const create_store_review = async (req, res) => {
    try {
        const { userId } = req.params;
        const { comment } = req.body;
        const user = await Users.findByPk(userId);
        const newReview = await StoreReview.create({
            id: userId,
            userId: user.username,
            comment: comment,
            image: user.img
        });
        const allReview = await StoreReview.findAll();
        res.status(200).json(allReview);
    } catch (error) {
        console.error('Hubo un error al generar el comentario', error);
    }
}

module.exports = {
    create_store_review
}