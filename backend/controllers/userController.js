const User = require('../models/User');

// Controller to create a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a user by ID
exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
