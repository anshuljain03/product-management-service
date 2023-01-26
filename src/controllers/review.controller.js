const Review = require('../models/index.js').models.review,
	crypto = require('crypto');

module.exports = {
	// GET /products/:id/reviews
	list: (req, res) => {
		Review.findAll({
			where: {
				product_id: req.params.id
			}
		}).then((reviews) => {
			res.json(reviews);
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// GET /products/:id/reviews/:review_id
	get: (req, res) => {
		Review.findByPk(req.params.review_id).then((review) => {
			res.json(review);
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// POST /products/:id/reviews
	create: (req, res) => {
		req.body.id = crypto.randomBytes(16).toString('hex');
		req.body.product_id = req.params.id;
		Review.create(req.body).then((review) => {
			res.json(review);
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// PUT /products/:id/reviews/:review_id
	update: (req, res) => {
		Review.update(req.body, {
			where: {
				id: req.params.review_id
			}
		}).then((response) => {
			if (response[0]) {
				res.json({ status: 'Updated Successfully' });
			} else {
				res.status(404).json({ error: 'Review not found' });
			}
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	},

	// DELETE /products/:id/reviews/:review_id
	delete: (req, res) => {
		Review.destroy({
			where: {
				id: req.params.review_id
			}
		}).then((response) => {
			if (response) {
				res.json({ status: 'Deleted Successfully' });
			} else {
				res.status(404).json({ error: 'Review not found' });
			}
		}).catch((error) => {
			console.error(error);
			res.status(400).json({ error: error.message });
		});
	}
};
