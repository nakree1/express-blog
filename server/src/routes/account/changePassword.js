import crypt from '../../config/crypt';

export default async (req, res, next) => {
  try {
    const { currentUser } = req.context;
    const { oldPassword, password } = req.body;

    const isMatch = await crypt.compare(oldPassword, currentUser.password);

    if (!isMatch) {
      throw new AuthError('Current password didn\'t match');
    }

    const hash = await crypt.hash(password);

    await currentUser.update({
      password: hash
    });

    res.status(200).end();
  } catch (err) {
    next(err);
  }
};
