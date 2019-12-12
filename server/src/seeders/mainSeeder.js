const createTags = require('./createTags');
const createArticles = require('./createArticles');
const createUsers = require('./createUsers');
const boundUsersWithArticles = require('./boundUsersWithArticles');

module.exports = async function() {
  await createTags();
  await createArticles();
  await createUsers();
  await boundUsersWithArticles();
};
