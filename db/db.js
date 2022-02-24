require('dotenv').config();


const {Client} = require('pg');

const client = new Client({
	database: process.env.POSTGRES_DB,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: "db"
});

async function connect() {
	await setTimeout(() => client.connect(),10000);
}

connect();




exports.query = async (query,values) => {
	const { rows } = await client.query(query,values);

	return rows;
} 

