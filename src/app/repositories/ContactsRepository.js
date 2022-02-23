const db = require('../../../db/db');

class ContactsRepository {
	async create({name, email, phone, gender, picture, birthday}) {
		const row = await db.query('INSERT INTO contacts(name,email,phone,gender,picture,birthday) VALUES($1,$2,$3,$4,$5,$6) RETURNING *',[name,email,phone,gender,picture,birthday]);

		return row[0];
	}
	async findById(id) {
		const [row] = await db.query(`SELECT * FROM contacts WHERE id = $1`,[id]);
		return row;
	}
	async findAll() {
		const rows = await db.query('SELECT * FROM contacts');
		return rows;
	}
	async findByName(name) {
		const rows = await db.query(`SELECT * FROM contacts WHERE name LIKE '%' || $1 || '%'`,[name]);
		return rows;
	}
	async findByEmail(email) {
		const rows = await db.query(`SELECT * FROM contacts WHERE email LIKE '%' || $1 || '%'`,[email]);
		return rows;
	}
	async findPerfectMatchEmail(email) {
		const rows = await db.query('SELECT * FROM contacts WHERE email = $1',[email]);
		console.log(rows);
		return rows[0];
	}
	update(id) {}
	delete(id) {}
}

module.exports = new ContactsRepository();