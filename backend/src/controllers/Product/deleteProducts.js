// const { Products } = require('../db');

// const delete_Product = async (req, res) => {
//     const { id } = req.params;

//     try {
//     const product = await Products.findOne({ where: { id: id } });

//     if (!product) {
//         return res.status(404).json({ message: 'Producto no encontrado' });
//         }

//         product.status = 'eliminado';
//         await product.save();

//         return res.status(200).json({ message: 'Producto eliminado con éxito' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Ocurrió un error al eliminar el producto' });
//     }
// };

// module.exports = {
//     delete_Product
// }
const { Products } = require('../../db');
 
const delete_Product = async (req, res) => {
    const { id } = req.params;

    try {
    const product = await Products.findOne({ where: { id: id } });

    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }

    await product.destroy();

    return res.status(200).json({ message: 'Producto eliminado con éxito' });
    } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ocurrió un error al eliminar el producto' });
    }
};

module.exports = {
    delete_Product
};