const controller = {
    index: (req, res) => res.render('index')//renderizo la vista que creé
}

module.exports = controller

//el controlador se va a la BD, se trae todos los productos, renderiza la vista y a la vista
//le mandamos una variable de todos los productos, o sea todos los producos que busqué desde
//la BD