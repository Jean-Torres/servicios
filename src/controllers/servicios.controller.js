import productos from '../models/servicios.model'

export const findAllProducto = async (req, res) => {
    const producto = await productos.find();
    res.json(producto);
}

export const createProducto = async (req, res) => {
    try {
        const producto = new productos({
            numero: req.body.numero, placa: req.body.placa, horaReparacion: req.body.horaReparacion,
             precioReparacion: req.body.precioReparacion, precioDolar: req.body.precioDolar,
            observaciones: req.body.observaciones
        })
        const newProducto = await producto.save();
        res.json(newProducto);
    } catch (error) {
        res.send({ message: `clave duplicada ${error}` })
    }
}
export const findOneProducto = async (req, res) => {
    const producto = await productos.findAllProducto(req.params.placa);
    return res.json(producto);
}

export const deleteProducto = async (req, res) => {
    await productos.findOneAndDelete(req.params.numero);
    res.json({
        message: `${req.params.numero} were producto deleted`
    })
}

export const updateProducto = async (req, res) => {
    const updatedproducto = await productos.findOneAndUpdate({ numero: req.params.numero }, { $set: req.body },
        { new: true })
    return res.json({ updatedproducto })
}