const { Products } = require('../db');
const axios = require('axios')

const getProduct_api = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const dataApi = await response.data.map(({
            id, title, price, description, category, image, rating
        }) => {
            return {
                id: id,
                name: title,
                price: price,
                description: description,
                category: category,
                img: image,
                rating: rating,
            }
        });
        return dataApi;
    } catch (error) {
        return { error: error.message };
    };
};

const prepareDataDataBase = async (product) => {
    
    const prod = await Products.findOrCreate({
        where: {
            id: product.id,
            name: product.name
        },
        defaults: {
            price: product.price,
            description: product.price,
            category: product.category,
            img: product.img,
            rating: product.rating.rate
        }
    }).catch(error => {
        return { error: error.message }
    })
    console.log(prod)
    return prod;
};

const createRecordProduct = async (req, res) => {
    try {
        const record = await getProduct_api()
        record.forEach(async (product) => {
            const { id, name, price, description, category, img, rating } = product;
            return await prepareDataDataBase({
                id,
                name,
                price,
                description,
                category,
                img,
                rating,
            })
        })
        res.status(200).send('<h1>Dato creados</h1>');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {

    const products = await Products.findAll();
    res.status(200).json(products);
    } catch (error) {
    res.status(500).json({ message: error.message });
    } 
};

//----------------------------------------------------------------//

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
        return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
    };

module.exports = { getProductById };

//----------------------------------------------------------------//

    const getProductsByName = async (req, res) => {
        try {
        const { name } = req.params;
        const products = await Product.findAll({
            where: { name: { [Op.like]: `%${name}%` } },
        });
        return res.status(200).json(products);
        } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
        }
    };

module.exports = {
    getAllProducts,
    createRecordProduct,
    getProduct_api,
    getProductsByName,
};
    
//----------------------------------------------------------------//