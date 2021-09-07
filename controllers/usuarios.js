const {
    response, 
    request
} = require('express');


const usuariosGet = (req = request, res = response) => {
    //
    const {q,search, nombre, apikey, page, limit} = req.query;

    res.json({
        ok: true,
        message: 'GET Api - Controlador',
        q,
        nombre,
        apikey, 
        page,
        limit,
        search,
        url: req.url
        
    })
}

const usuariosPut = (req, res = response) => {
    // imprime el parametro que se envia en el url "http://localhost:8080/api/usuarios/{ID}"
    const id = req.params.id;
    res.json({
        ok: true,
        message: 'put - Controlador',
        id

    })
}
const usuariosPost = (req, res = response) => {

    // trae los datos del body
    const {nombre, id} = req.body;

    res.json({
        ok: true,
        message: 'Post - Controlador',
        nombre,
        id

    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        message: 'Delete - Controlador'

    })
}

 



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}