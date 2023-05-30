const { StoreReview } = require('../../db');

const create_store_review = async (req, res) => {
    try {
        const { userId } = req.params;
        const { comment } = req.body;
        const newReview = await StoreReview.create({
            id: userId,
            comment: comment
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