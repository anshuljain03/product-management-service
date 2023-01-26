const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('coupon', {
		coupon_code: {
			type: DataTypes.STRING,
			primaryKey: true
		},
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
