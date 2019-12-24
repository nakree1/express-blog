export default (req, res) => {
  const { currentUser } = req.context;

  res.send(currentUser.getPublicProfile());
};
