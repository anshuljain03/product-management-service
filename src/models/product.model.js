const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('product', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		seller_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT('long'),
			allowNull: true
		},
		list_price: {
			type: DataTypes.DECIMAL(15, 2),
			allowNull: false
		},
		sale_price: {
			type: DataTypes.DECIMAL(15, 2),
			allowNull: false
		},
		image_urls: {
			type: DataTypes.JSON,
			allowNull: true
		},
		category: {
			type: DataTypes.STRING,
			allowNull: true
		},
		varients: {
			type: DataTypes.JSON,
			allowNull: true
		},
		coupons: {
			type: DataTypes.JSON,
			allowNull: true
		},
		reviews: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});
};
