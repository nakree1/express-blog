'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { PG_USERNAME, PG_PORT, PG_PASSWORD, PG_HOSTNAME } = require('../config/config.js');
const config = {
  dialect: 'postgres',
  database: 'express_blog',
  username: PG_USERNAME,
  password: PG_PASSWORD,
  host: PG_HOSTNAME,
  port: PG_PORT
}

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
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
