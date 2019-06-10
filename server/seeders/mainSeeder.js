import createTags from './createTags';
import createArticles from './createArticles';
import createUsers from './createUsers';
import boundUsersWithArticles from './boundUsersWithArticles';

export default async function mainSeeder() {
  await createTags();
  await createArticles();
  await createUsers();
  await boundUsersWithArticles();
}
