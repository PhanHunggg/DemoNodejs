const UserService = require("../services/user.service");

class UserController {
  static signup = async (req, res) => {
    const user = await UserService.signup(req.body);

    if (!user)
      return res.status(409).json({
        statusCode: 409,
        message: "User da ton tai",
        data: req.body.email,
      });

    return res.status(201).json({
      statusCode: 201,
      message: "User tao thanh cong",
      data: user,
    });
  };
}

module.exports = UserController;
