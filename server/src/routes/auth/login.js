import { Op } from 'sequelize';

import crypt from '../../config/crypt';
import { BaseError } from '../../utils/errors';

export default async (req, res, next) => {
  try {
    const { db } = req;
    const { username, email, password } = req.body;

    const user = await db.User.findOne({
      where: {
        [Op.or]: username ? [{ username }] : [{ email }]
      }
    });

    if (!user) {
      throw new BaseError('Invalid email or password');
    }

    const isMatch = await crypt.compare(password, user.password);

    if (!isMatch) {
      throw new BaseError('Invalid email or password');
    }

    const { token } = await user.authorize();

    return res.json({ user: user.getPublicProfile(), token });
  } catch (err) {
    next(err);
  }
};
