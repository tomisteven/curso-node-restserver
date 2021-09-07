//rutas 

const {Router} = require('express')

const router = Router()

//rutas de usuario del controller
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete} = require('../controllers/usuarios')

router.get('/', usuariosGet)


router.put('/:id', usuariosPut)

router.post('/', usuariosPost)

router.delete('/', usuariosDelete)


















module.exports = router