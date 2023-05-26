const { Op } = require('sequelize');
const { Products } = require('../../db');

const get_Products_By_Name = async (req, res) => {
        try {
            const productName = req.query.name;
            console.log(productName)
            const produ = await Products.findAll({
            where: {
                name: {
                    [Op.like]: `%${productName}%`
                }
            },
        });
            produ.length ? res.status(200).json(produ) :
                res.status(404).send({ message: "El Producto no existe" });
        } catch (error) {
        res.status(500).json({ message: 'Server Error' });
        }
};
    
module.exports = {
    get_Products_By_Name
}