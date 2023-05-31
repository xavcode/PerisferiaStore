const { Favorites } = require('../../db');

const delete_favorite = async (req, res) => {
    try {
        const { producID, userID } = req.body;
        await Favorites.destroy({
            where: {
                ProductId: producID,
                UserId: userID
            }
        });
        res.status(200).send('eliminado exitoso');
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = {
    delete_favorite
}