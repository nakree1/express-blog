import { getRandomInt } from '../utils/random';

const db = require('../models');
const faker = require('faker');

export default async function createUsers(count = 5) {
  const getUser = () => ({
    username: faker.internet.userName(),
    email: faker.internet.email()
  });

  for (let i = 0; i < count; i++) {
    await db.User.create(getUser());
  }
}
