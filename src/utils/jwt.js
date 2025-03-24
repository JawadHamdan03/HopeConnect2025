const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};