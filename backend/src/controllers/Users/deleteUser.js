// const { Users } = require("../../db");

// const delete_User = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await Users.findOne({ where: { id } });

//     if (!user) {
//       return res.status(404).json({ message: "Usuario no encontrado" });
//     }

//     await user.destroy();

//     return res.status(200).json({ message: "Usuario eliminado con éxito" });
//   } catch (error) {
//     console.error(error);
//     return res
//       .status(500)
//       .json({ message: "Ocurrió un error al eliminar el usuario" });
//   }
// };
// module.exports = {
//   delete_User,
// };
