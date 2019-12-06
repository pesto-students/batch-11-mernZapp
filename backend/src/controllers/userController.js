import User from '../models/userModel';

const userLogin = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    // console.log(user);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    // res.status(400).send('Error in loggin api', error);
  }
};

const userCreate = async (req, res) => {
  // console.log(req.body, User);

  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).send('Error in creating user');
  }
};

export {
  userLogin,
  userCreate,
};
