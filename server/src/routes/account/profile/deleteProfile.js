export default async (req, res) => {
  const { currentUser } = req.context;

  currentUser.isDeleted = true;

  await currentUser.save();

  //remove tokens and logout

  res.send(currentUser.getPublicProfile());
};
