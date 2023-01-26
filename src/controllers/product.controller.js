const Product = require('../models/index.js').models.product,
	crypto = require('crypto');

module.exports = {
	// GET /products
	list: (req, res) => {
		Product.findAll().then((products) => {
			res.json(products);
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// GET /products/:id
	get: (req, res) => {
		Product.findByPk(req.params.id).then((product) => {
			res.json(product);
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// POST /products
	create: (req, res) => {
		req.body.id = crypto.randomBytes(8).toString('hex');
		Product.create(req.body).then((product) => {
			res.json(product);
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// PUT /products/:id
	update: (req, res) => {
		Product.update(req.body, {
			where: {
				id: req.params.id
			}
		}).then((response) => {
			if (response[0]) {
				res.json({ status: 'Updated Successfully' });
			} else {
				res.status(404).json({ error: 'Product not found' });
			}
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// PATCH /products
	bulkUpdate: (req, res) => {
		Product.bulkCreate(req.body, { updateOnDuplicate: ['list_price', 'sale_price'], validate: false, ignoreDuplicates: true }).then((response) => {
			res.json(response);
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// DELETE /products/:id
	delete: (req, res) => {
		Product.destroy({
			where: {
				id: req.params.id
			}
		}).then((response) => {
			if (response) {
				res.json({ status: 'Deleted Successfully' });
			} else {
				res.status(404).json({ error: 'Product not found' });
			}
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	}
};
