import express from 'express';
import { admin, protectRoute } from '../middleware/authMiddleware.js';
import { createNewProduct, createProductReview, deleteProduct, getProduct, getProducts, removeProductReview, updateProduct } from '../controller/productController.js';

const productRoutes = express.Router();

productRoutes.route('/:page/:perPage').get(getProducts);
productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProduct);
productRoutes.route('/reviews/:id').post(protectRoute, createProductReview);
productRoutes.route('/:id').delete(protectRoute, admin, deleteProduct);
productRoutes.route('/').put(protectRoute, admin, updateProduct);
productRoutes.route('/:productId/:reviewId').put(protectRoute, admin, removeProductReview);
productRoutes.route('/').post(protectRoute, admin, createNewProduct);

export default productRoutes;