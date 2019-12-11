import User from '../models/userModel';

const userLogin = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    // console.log(user);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(500).send('Error in login api');
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
    res.status(400).send('Error in creating user');
  }
};

const logoutUser = async (req, res) => {
  try {
    // console.log(req.user.tokens)
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
    // console.log(req.user.tokens)
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
};


export {
  userLogin,
  userCreate,
  logoutUser,
};
