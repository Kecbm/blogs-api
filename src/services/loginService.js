const loginModel = require('../models/loginModel');

const enter = async (body) => {
  const token = await loginModel.enter(body);
  
  return token;
};

const loginService = {
  enter,
};

module.exports = loginService;