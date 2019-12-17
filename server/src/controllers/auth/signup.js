import { Op } from 'sequelize';

import crypt from '../../config/crypt';
import { NotUniqueError } from '../../utils/errors';

export default async (req, res, next) => {
  try {
    const { db } = req;

    const { username, email, password } = req.body;

    const isExist = await db.User.findOne({
      where: {
        [Op.or]: [{ username }, { email }]
      }
    });

    if (isExist) {
      throw new NotUniqueError('username or email');
    }

    const hash = await crypt.hash(password);

    const user = await db.User.create({
      username,
      email,
      password: hash
    });

    res.send({
      email: user.email,
      username: user.username
    });
  } catch (err) {
    next(err);
  }
}
