const { Users } = require('../../db');
const { STORAGE_KEY, DB_URL } = process.env;
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });// Directorio donde se guardarán los archivos subidos
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(`${DB_URL}`, `${STORAGE_KEY}`);

const create_user =  (newUser) => {
    const newUserio = Users.create(newUser);
    return newUserio;
};

const create_record_user = async (req, res) => {
    try {
        const { name, last_name, username, address, password,
            mail, phone, img } = req.body;
        
        // descomentar cuando se tenga el formulario para la creacion del usuario
        if(!img){
            const fileData = await fs.promises.readFile(req.file.path.toString());
            const { data, error } = await supabase
                .storage
                .from('Usuarios')
                .upload(`${req.file.originalname}`, fileData);
                // Verifica si hubo un error al guardar el archivo
            if (error) {
                    delete req.file
                    throw new Error(`Error al guardar el archivo en Supabase: ${error.message}`);
              }
                  await fs.promises.unlink(req.file.path.toString()); //eliminamos el archivo del sistema de archivos
          
                  let imageUrl = await supabase
                      .storage
                      .from('Usuarios')
                      .getPublicUrl(`${req.file.originalname}`);
                  let imagenDB = imageUrl.data.publicUrl.toString();
          
                  const userCreate = await create_user({
                      name, last_name, username,
                      address, password, mail,
                      img: imagenDB, phone, 
                  });
                  delete req.file
                  return res.status(200).send('<p>Usuario creado con exito</p>')
                }
                const userCreate = await create_user({
                    name, last_name, username,
                    address, password, mail,
                    img, phone
                });
                delete req.file
                return res.status(200).send('<p>Usuario creado con exito</p>')
            
                } catch (error) {
                    delete req.file
                    return res.status(404).send({ error: error.message });
                }
            }
            
            module.exports = {
                create_user,
                create_record_user
            }
            
        
      