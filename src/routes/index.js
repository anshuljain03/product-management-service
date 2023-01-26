const express = require('express'),
	router = express.Router(),
	healthController = require('../controllers/health.controller.js'),
	authController = require('../controllers/auth.controller.js'),
	productController = require('../controllers/product.controller.js'),
	reviewController = require('../controllers/review.controller.js');

// HealthCheck Route
router.get('/health', healthController.status);

// Auth Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/logout', authController.logout);

// Product Routes
router.get('/products', productController.list);
router.get('/products/:id', productController.get);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.patch('/products', productController.bulkUpdate);
router.delete('/products/:id', productController.delete);

// Product Review Routes
router.get('/products/:id/reviews', reviewController.list);
router.get('/products/:id/reviews/:review_id', reviewController.get);
router.post('/products/:id/reviews', reviewController.create);
router.put('/products/:id/reviews/:review_id', reviewController.update);
router.delete('/products/:id/reviews/:review_id', reviewController.delete);


module.exports = router;
