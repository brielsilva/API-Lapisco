const ContactsRepository = require("../repositories/ContactsRepository");
require('dotenv').config();
class ContactsController {
	async index(req,res) {
		let contacts;
		const {name, email} = req.query;
		if(!name && !email) {
			contacts = await ContactsRepository.findAll();
			return res.json(contacts);
		} else {
			if(!email) {
				contacts = await ContactsRepository.findByName(name);	
				return res.json(contacts);
			} else if (!name) {
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
		const {name, email, gender, birthday, phone} = req.body;
		const picturePath = req.file.location;

		if(!name && !email && !gender && !birthday && !phone && !picture) {
			return res.status(400).json({ error: 'All fields are required'});
		}

		if(gender != 'M' && gender != 'F') {
			return res.status(400).json({error: 'Gender must be either M or F'});
		}

		const contactExists = await ContactsRepository.findPerfectMatchEmail(email);

		if(contactExists) {
			return res.status(400).json({ error: 'This e-mail is already in use'});
		}
		const contact = await ContactsRepository.create({name,email,gender,birthday,phone,picturePath});;

		res.json(contact);
	}
	async update(req,res) {
		const { id } = req.params;

		const contactExist = await ContactsRepository.findById(id);

		if(!contactExist) {
			return res.status(404).json({ error: 'User not found'});
		}

		const {phone, name} = req.body;

		const newPhone = phone || contactExist.phone;

		const newName = name || contactExist.name;

		const updatedContact = await ContactsRepository.update(id,{
			name: newName,
			phone: newPhone
		});

		res.json(updatedContact);
	}

	async delete(req,res) {
		const { id } = req.params;

		const contactExist = await ContactsRepository.findById(id);

		if(!contactExist) {
			return res.status(404).json({ error: 'User not found'});
		}

		await ContactsRepository.delete(id);

		res.sendStatus(204);
	}
}

module.exports = new ContactsController();