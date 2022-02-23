const db = require('../../../db/db');

class ContactsRepository {
	create({name, email, phone, gender, picture, birthday}) {}
	findById(id) {}
	async findAll() {
		const rows = await db.query('SELECT * FROM contacts');
		return rows;
	}
	async findByName(name) {
		const rows = await db.query(`SELECT * FROM contacts WHERE LOWER($1) LIKE $2`,[name,name],(err))
		return rows;
	}
	async findByEmail(email) {
		const rows = await db.query('SELECT * FROM contacts WHERE email = $1',[email]);
		return rows;
	}
	update(id) {}
	delete(id) {}
}