const { Sequelize } = require('sequelize'),
	sequelize = new Sequelize(
		'pms',
		'admin',
		process.env.DB_PASS,
		{
			host: process.env.DB_HOST,
			dialect: 'mysql'
		}
	),
	modelDefiners = [
		require('./product.model'),
		require('./review.model'),
	];

// Test the database connection.
sequelize.authenticate().then(() => {
	console.info('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

sequelize.sync({ force: false }).then(() => {
	console.info('Database & tables created!');
});

module.exports = sequelize;
