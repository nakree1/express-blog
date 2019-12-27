import crypt from '../../config/crypt';

export default async (req, res, next) => {
  try {
    const { currentUser } = req.context;
    const { password, email } = req.body;

    const isMatch = await crypt.compare(password, currentUser.password);

    if (!isMatch) {
      throw new AuthError('Current password didn\'t match');
    }

    await currentUser.update({ email });

    res.send(currentUser.getPublicProfile());
  } catch (err) {
    next(err);
  }
};
