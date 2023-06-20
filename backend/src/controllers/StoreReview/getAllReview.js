const { StoreReview } = require('../../db');

// const get_store_review = async (req, res) => {
//     try {
//         const all_review = await StoreReview.findAll();
//         res.status(200).json(all_review);
//     } catch (error) {
//         console.error('Hubo un error al generar el comentario', error);
//     }
// }

// const delete_store_review = async (req, res) => {
//     const { id } = req.params;
//     try {
//       const deletedReview = await StoreReview.destroy({ where: { id } });
//       if (deletedReview) {
//         res.status(200).json({ message: 'Comentario eliminado correctamente.' });
//       } else {
//         res.status(404).json({ error: 'No se encontró el comentario.' });
//       }
//     } catch (error) {
//       console.error('Hubo un error al eliminar el comentario:', error);
//       res.status(500).json({ error: 'Error al eliminar el comentario.' });
//     }
//   };
  
const get_store_review = async (req, res) => {
    try {
      const all_review = await StoreReview.findAll();
      res.status(200).json(all_review);
    } catch (error) {
      console.error('Hubo un error al obtener los comentarios', error);
      res.status(500).json({ error: 'Error al obtener los comentarios.' });
    }
  };
  
  const delete_store_review = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body; // Se asume que el ID del usuario que hizo el comentario se envía en el cuerpo de la solicitud
  
    try {
      const reviewToDelete = await StoreReview.findByPk(id);
  
      if (!reviewToDelete) {
        return res.status(404).json({ error: 'No se encontró el comentario.' });
      }
  
      if (reviewToDelete.userId !== userId) {
        return res.status(403).json({ error: 'No tienes permisos para eliminar este comentario.' });
      }
  
      await reviewToDelete.destroy();
      res.status(200).json({ message: 'Comentario eliminado correctamente.' });
    } catch (error) {
      console.error('Hubo un error al eliminar el comentario:', error);
      res.status(500).json({ error: 'Error al eliminar el comentario.' });
    }
  };
  
  module.exports = {
    get_store_review,
    delete_store_review
  };
  