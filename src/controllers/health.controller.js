module.exports = {
	// This should also check DB connections
	status: (req, res) => {
		res.json({ status: 'UP' });
	}
};
