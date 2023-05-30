const { Review, Users, Products } = require('../../db');

const add_review = async (productId, userId, comment, rating) => {
    try {
        const user = await Users.findByPk(userId);
        const product = await Products.findByPk(productId);
        const newreview = await Review.create({
            userId: user.name,
            comment: comment,
            rating: rating
        });
        await product.addReview(newreview)
    } catch (error) {
        console.error('Error al cargar el comentario', error)
    }
}

const create_record_review = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, comment, rating } = req.body;
        const createRecord = await add_review(id, userId, comment, rating);
        return res.status(200).send('Comentario creado con exito');
    } catch (error) {
        throw new Error('Error al crear el comentario', error);
    }
};

module.exports = {
    create_record_review
}