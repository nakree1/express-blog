import jwt from '../config/jwt';
import { AuthError } from '../utils/errors';

const tokenType = 'Bearer ';

export default async function ensureAuthMiddleware(req, res, next) {
  try {
    const tokenFromHeaders = req.header('Authorization');

    if (!tokenFromHeaders || !tokenFromHeaders.startsWith(tokenType)) {
      throw new AuthError('Authorization token not provided');
    }

    const token = tokenFromHeaders.slice(tokenType.length); // Bearer dsd.dsdsd.ss

    if (!token) {
      throw new AuthError('Authorization token not provided');
    }

    try {
      const { db } = req;
      const { userId } = await jwt.verify(token);

      const user = await db.User.findOne({
        where: {
          id: Number(userId),
          isDeleted: false
        }
      });

      if (!user) {
        throw new AuthError();
      }

      req.context.currentUser = user;

      next();
    } catch (err) {
      console.error(err);
      throw new AuthError('Authorization token expired');
    }

  } catch (err) {
    next(err);
  }
};
