'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { DB_USERNAME, DB_PORT, DB_PASSWORD, DB_HOSTNAME } = require('../config/config.js');
const config = {
  dialect: 'postgres',
  database: 'express_blog',
  username: DB_USERNAME || process.env.DB_USERNAME || 'admin',
  password: DB_PASSWORD || process.env.DB_PASSWORD || '123456',
  host: DB_HOSTNAME || process.env.DB_HOSTNAME,
  port: DB_PORT || process.env.DB_PORT
}

console.log(config)

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
    console.log(`Loaded: ${model.name} from ${file}`);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
