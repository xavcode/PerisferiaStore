const { StoreReview } = require('../../db');

const delete_store_review = async (req, res) => {
    try {
        const { id } = req.params;
        await StoreReview.destroy({
            where: {
                id: id
            }
        })
        res.status(200).send('eliminado con exito');
    } catch (error) {
        console.error('Hubo un error al eliminar el comentario', error);
    }
}

module.exports = {
    delete_store_review
}
        