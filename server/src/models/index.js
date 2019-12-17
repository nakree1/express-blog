import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import mainSeeder from '../seeders/mainSeeder';
import capitalizeString from '../utils/capitalizeString';
import { DB_HOSTNAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from '../config/config.js';

const basename = path.basename(__filename);

const config = {
  dialect: 'postgres',
  database: 'express_blog',
  username: DB_USERNAME || process.env.DB_USERNAME || 'admin',
  password: DB_PASSWORD || process.env.DB_PASSWORD || '123456',
  host: DB_HOSTNAME || process.env.DB_HOSTNAME,
  port: DB_PORT || process.env.DB_PORT
};

export default async function({ logger, eraseDatabase }) {
  const db = {};
  const sequelize = new Sequelize(config.database, config.username, config.password, config);

  fs.readdirSync(__dirname)
    .filter((file) => {
      return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    })
    .forEach((file) => {
      const model = sequelize['import'](path.join(__dirname, file));
      db[capitalizeString(model.name)] = model;
      console.log(`Loaded: ${capitalizeString(model.name)} from ${file}`);
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  await db.sequelize.sync({ force: eraseDatabase });

  if (eraseDatabase) {
    // await mainSeeder();
  }

  return db;
}
