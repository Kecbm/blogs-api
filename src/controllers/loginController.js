const loginService = require('../services/loginService');

const enter = async (req, res) => {
  const token = await loginService.enter(req.body);

  if (!token) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token });
};

const userController = {
  enter,
};

module.exports = userController;