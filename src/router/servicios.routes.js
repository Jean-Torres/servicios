import { Router } from "express";

import * as productosCtrl from '../controllers/servicios.controller'

const router = Router();

router.post('/', productosCtrl.createProducto);
router.get('/', productosCtrl.findAllProducto);
router.get('/:placa', productosCtrl.findOneProducto);
router.delete('/:numero', productosCtrl.deleteProducto);
router.put('/:numero', productosCtrl.updateProducto);

export default router;