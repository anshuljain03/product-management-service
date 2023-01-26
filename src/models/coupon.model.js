const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('coupon', {
		coupon_code: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		// Percentage or flat discount
		coupon_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		// This will be a JSON object with the following structure: { "value":"20", "min_amount": 100, "max_discount": 200 }.
		// This has been kept as a JSON object so that it is extensible. Ideally this would be in a NoSQL database.
		details: {
			type: DataTypes.JSON,
			allowNull: false
		},
		expiry_date: {
			type: DataTypes.DATE,
			allowNull: false
		}
	});
};
