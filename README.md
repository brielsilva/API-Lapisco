Essa API foi feita com o framework Express com banco de dados postgres com o modulo pg e as querys feitas na mão.
Primeiramente se deve rodar: docker-compose up
Assim o banco de dados vai estar no ar
Logo após, rode npm run migrate para gerar a table
Com isso você pode usar npm run start para começar o server

As rotas disponíveis são:
	/contacts GET - Retorna todos os registos
		* Aceita querys:
			- name
			- email
	/contacts POST - Cria um registro
	/contacts/:id GET - Retorna um registro via id
	/contacts/:id PUT - Da update em um registro, alterando somente o nome e telefone
	/contacts/:id DELETE - Deleta um registro


DESAFIO:
	Os dados a ser considerados são:
	● Nome - name
	● Email - email
	● Sexo - gender
	● Telefone - phone
	● Data de nascimento - birthday
	● Foto - picture
	● Foto caminho - picturePath (adicionado por mim)
	● Data de criação do registro - createdAt
	● Data de atualização do registro - updatedAt

	API deverá ser capaz de:
	● Realizar o cadastro de uma nova pessoa
	● Um e-mail não poderá ser cadastrado duas vezes
	● Editar o cadastro, porém somente telefone e nome poderão ser editados
	● Apagar um cadastro
	● Buscar cadastro pelo e-mail ou nome
	● Buscar todos os cadastros