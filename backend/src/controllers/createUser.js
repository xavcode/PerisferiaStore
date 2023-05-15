const { Users } = require('../db');

const create_user =  (newUser) => {
    const newUserio = Users.create(newUser);
    return newUserio;
};

const create_record_user = async (req, res) => {
    try {
        const { name, last_name, username, address, password,
        mail, img, phone, is_admin } = req.body;
        const userCreate = await create_user({ name, last_name, username, address, password,
            mail, img, phone, is_admin });
        return res.status(200).send('<p>Usuario creado con exito</p>')
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
}

module.exports = {
    create_user,
    create_record_user
}