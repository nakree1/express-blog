import storage from '../../config/storage';

export default async (req, res, next) => {
  const { currentUser } = req.context;
  const { files, fields } = req.body;

  try {
    console.log(files, fields);
    const { file } = files;
    const avatarPath = await storage.saveUserFile({ file, filename: file.name, id: currentUser.id });

    currentUser.avatar = `${req.base}/${avatarPath}`;
    await currentUser.save();

    res.send(currentUser.getPublicProfile());
  } catch (err) {
    next(err)
  }
};
