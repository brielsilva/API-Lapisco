const db = require('../db');

module.exports = function createTable() {
  db.query('DROP TABLE IF EXISTS contacts');
  db.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
  db.query(`CREATE TABLE IF NOT EXISTS contacts(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    email VARCHAR NOT NULL UNIQUE,
    name VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    gender CHAR(1) NOT NULL,
    birthday DATE NOT NULL,
    picturePath VARCHAR NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  );`);
}


