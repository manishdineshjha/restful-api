const { User } = require('../models');
const { hashPassword, generateToken } = require('../utils/authUtils');

exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ username, password: hashedPassword, email });
    const token = generateToken(user);
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: 'Invalid login credentials' });
    }

    const token = generateToken(user);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};
