const { Products } = require('../../db');
const datab = require('../../datab.json')

const getProduct_api =  () => {
    try {
        const response =  datab
        const dataApi = response.products.map(({
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
            description: product.description,
            category: product.category,
            img: product.img,
            rating: product.rating
        }
    }).catch(error => {
        return { error: error.message }
    })
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

//----------------------------------------------------------------//

module.exports = {
    getAllProducts,
    createRecordProduct,
    getProduct_api
};
    
//----------------------------------------------------------------//
