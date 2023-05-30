const { StoreReview } = require('../../db');

const get_store_review = async (req, res) => {
    try {
        const allReview = await StoreReview.findAll();
        res.status(200).json(allReview);
    } catch (error) {
        console.error('Hubo un error al generar el comentario', error);
    }
}

module.exports = {
    get_store_review
}