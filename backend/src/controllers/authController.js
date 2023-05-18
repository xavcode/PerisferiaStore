const jwt = require('jsonwebtoken');
const { User } = require('../db');

const loginUser = async (req, res) => {
const { username, password } = req.body;

try {
    // Validar los datos de registro aquí
    if (!username || !password) {
    return res.status(400).json({ error: 'Debe proporcionar un nombre de usuario y una contraseña.' });
    }

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
    return res.status(400).json({ error: 'El nombre de usuario ya está en uso.' });
    }

    // Crea un nuevo usuario en tu modelo User
    const newUser = await User.create({ username, password });

    // Generar el token JWT
    const token = jwt.sign({ userId: newUser.id }, 'secreto', { expiresIn: '1h' });

    // Devolver el token JWT al cliente
    return res.status(200).json({ token });

} catch (error) {
    // Manejo de errores
    console.log(error);
    return res.status(500).json({ error: 'Error en el servidor' });
}
};

module.exports = { loginUser };