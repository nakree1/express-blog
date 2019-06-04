const db = require('../models/index');

export default async function createUsers() {
  const date = (new Date()).toUTCString();

  for (let i = 0; i < 5; i++) {

    await db.user.create({
      name: `user_${i}`,
      email: `user_${i}@mail.com`,
      // createdAt: date,
      // updatedAt: date,
    })
  }
}
