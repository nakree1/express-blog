export default async (req, res) => {
  const { currentUser } = req.context;
  const { firstName, lastName, username, email } = req.body;

  //add validation
  if (firstName) {
    currentUser.firstName = firstName;
  }

  if (lastName) {
    currentUser.lastName = lastName;
  }

  if (username) {
    currentUser.username = username;
  }

  if (email) {
    currentUser.email = email;
  }

  await currentUser.save();

  res.send(currentUser.getPublicProfile());
};
