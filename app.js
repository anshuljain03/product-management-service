const express = require('express'),
	app = express(),

	routes = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000, () => {
	console.info('Server started on port 3000');
});

module.exports = app;
