import UserModel from '../models/user';

const userLogin = async (req, res) => {
  try {
    const user = await UserModel.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(500).send('Error in loggin api');
  }
};


export {
  userLogin,
};
