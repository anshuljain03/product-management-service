const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth'),
	{ initializeApp } = require('firebase/app'),
	app = initializeApp({
		apiKey: process.env.FIREBASE_API_KEY
	}),
	auth = getAuth(app);

module.exports = {

	// POST /auth/register
	register: (req, res) => {
		const { email, password } = req.body;
		createUserWithEmailAndPassword(auth, email, password)
			.then((user) => {
				res.json(user);
			})
			.catch((error) => {
				res.status(400).json({ error: error.message });
			});
	},

	// POST /auth/login
	login: (req, res) => {
		const { email, password } = req.body;
		signInWithEmailAndPassword(auth, email, password)
			.then((user) => {
				res.json(user);
			})
			.catch((error) => {
				res.status(400).json({ error: error.message });
			});
	},

	logout: (req, res) => {
		signOut(auth)
			.then(() => {
				res.json({ status: 'Logged out successfully' });
			})
			.catch((error) => {
				res.status(400).json({ error: error.message });
			});
	}
};
