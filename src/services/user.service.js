const userModel = require("../models/user.model");

class UserService {
  static signup = async (bodyData) => {
    const checkUser = await userModel
      .findOne({
        email: bodyData.email,
      })
      .lean();

    if (checkUser) return null;

    const user = await userModel.create(bodyData);

    return user;
  };
}

module.exports = UserService;
