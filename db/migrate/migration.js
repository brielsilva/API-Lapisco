const db = require('../db');

db.query('DROP TABLE IF EXISTS contacts');
db.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
db.query(`CREATE TABLE IF NOT EXISTS contacts(
	id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	email VARCHAR NOT NULL UNIQUE,
	name VARCHAR NOT NULL,
	phone VARCHAR NOT NULL,
	gender VARCHAR NOT NULL,
	birthday DATE NOT NULL,
	picture VARCHAR NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`);

db.query(`INSERT INTO contacts(name,email,gender,phone,picture,birthday) VALUES('gabriel',"gabrielcostasilva100@gmail.com","M","85985892063","ALGUMAHOSTAQUI","2020-01-20");`);

