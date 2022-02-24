const db = require('../../../db/db');

class ContactsRepository {

	async create({name, email, phone, gender, picture, picturePath,birthday,}) {
		const row = await db.query('INSERT INTO contacts(name,email,phone,gender,picture,birthday,picturePath) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *',[name,email,phone,gender,picturePath,birthday,picturePath]);

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
		return rows[0];
	}

	async update(id, {
		name, phone
	}) {
		const rows = await db.query(`UPDATE contacts SET name = $1,phone = $2, updatedAt = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *`,[name,phone,id]);
		return rows;
	}

	async delete(id) {
		const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1',[id]);
		return deleteOp;
	}

}

module.exports = new ContactsRepository();