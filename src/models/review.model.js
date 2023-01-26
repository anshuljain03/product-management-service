const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('review', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		product_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: { min: 0, max: 5 }
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT('long'),
			allowNull: true
		},
		image_urls: {
			type: DataTypes.JSON,
			allowNull: true
		}
	}, {
		indexes: [
			{
				fields: ['product_id']
			}
		]
	});
};
