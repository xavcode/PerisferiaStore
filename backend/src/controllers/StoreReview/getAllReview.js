const { StoreReview } = require('../../db');

const get_store_review = async (req, res) => {
    try {
        const all_review = await StoreReview.findAll();
        res.status(200).json(all_review);
    } catch (error) {
        console.error('Hubo un error al generar el comentario', error);
    }
}

module.exports = {
    get_store_review
}