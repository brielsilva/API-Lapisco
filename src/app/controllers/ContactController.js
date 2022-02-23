const ContactsRepository = require("../repositories/ContactsRepository");

class ContactsController {
	async index(req,res) {
		const contacts = await ContactsRepository.findAll();

		res.json(contacts);
	}
	async show(req,res) {
		const { id } = req.params;
		const contact = await ContactsRepository.findById(id);
		if(!contact) {
			return res.status(404).json({error: 'User not found'})
		}
		res.json(contact);
	}
	async store(req,res) {
		const {name, email, gender, birthday, phone, picture} = req.body;
		const contactExists = await ContactsRepository.findByEmail(email)
		if(contactExists) {
			return res.status(400).json({ error: 'This e-mail is already in use'});
		}

		const contact = await ContactsRepository.create({name,email,gender,birthday,phone,picture});;

		res.json(contact);
	}
	async update(req,res) {
	}

	async delete(req,res) {}
}

module.exports = new ContactsController();