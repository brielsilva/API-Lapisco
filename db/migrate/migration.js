const db = require('../db');

db.query('DROP TABLE contacts;');
db.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`)
db.query(`CREATE TABLE IF NOT EXISTS contacts(
	id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	email VARCHAR NOT NULL UNIQUE,
	name VARCHAR NOT NULL,
	phone VARCHAR NOT NULL,
	gender VARCHAR NOT NULL,
	birthday DATE NOT NULL,
	picture VARCHAR NOT NULL
);`);

