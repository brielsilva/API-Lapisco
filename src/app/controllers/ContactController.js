const ContactsRepository = require("../repositories/ContactsRepository");

class ContactsController {
	async index(req,res) {
		let contacts;
		const {name, email} = req.query;
		if(!name && !email) {
			console.log('Aqui');
			contacts = await ContactsRepository.findAll();
			return res.json(contacts);
		} else {
			if(!email) {
				console.log('Aqui !email');
				contacts = await ContactsRepository.findByName(name);	
				return res.json(contacts);
			} else if (!name) {
				console.log('Aqui !name');
				contacts = await ContactsRepository.findByEmail(email);
				return res.json(contacts);
			}

		}
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
		const contactExists = await ContactsRepository.findPerfectMatchEmail(email);
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