// controllers/authController.js

const User = require('../models/User');

// Controller untuk menangani proses login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari user berdasarkan email
    const user = await User.findOne({ email });

    // Jika user tidak ditemukan, kembalikan respons dengan status 404 Not Found
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Bandingkan password yang diberikan dengan password di database
    if (user.password !== password) {
      // Jika password tidak cocok, kembalikan respons dengan status 401 Unauthorized
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Jika email dan password cocok, kembalikan respons dengan status 200 OK dan data user
    res.status(200).json({ user });
  } catch (error) {
    // Tangani error lainnya
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
