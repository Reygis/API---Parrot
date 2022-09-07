# Parrot Hands_On04

<p align="center">
  <img src="./docs/logoGama.png" width="50%">
</p>
<p align="center">
<a href="#" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


---

*descrição do projeto*
<a href="https://github.com/pedrogoncaalves/Social-Parrot-ReactRedux" target="_blank">link do repositório frontend</a>

---
## :memo: Tecnologias utilizadas: 

* <a href="https://expressjs.com/pt-br/">Express</a>
* <a href="https://typeorm.io/">Typeorm</a>
* <a href="https://github.com/tada5hi/typeorm-extension">typeorm-extension</a>


---
## Como usar a API:

1. após clonar o repositório, executar o comando `npm install` ou `yarn install`
2. Criar um arquivo `.env` e alterar credenciais do banco de dados, baseado no arquivo `.env.example`
3. Criar banco de dados sem tabelas  `npm run db:create`
4. Popular o banco de dados `npm run seed`
5. Passos 1 a 4 somente realizar na 1º instalação  Script para rodar a API `npm run dev` 
6. corpo do create user `{
	"name": string,
	"email": string,
	"password": string,
	"apartment": string,
	"userphoto": string
}`  
7. corpo do create post `{
	"content": string
}`

---
## :memo: Funcionalidades criadas: 

* rota criar usuario `POST` `http://localhost:3030/user`
* rota editar usuario `PUT` `http://localhost:3030/user/:iduser`
* rota listar todos os usuarios `GET` `http://localhost:3030/user`
* rota listar usuario pelo iduser `GET` `http://localhost:3030/user/:iduser`

+ rota criar post  `POST` `http://localhost:3030/post`
+ rota listar todos os post  `GET` `http://localhost:3030/post`
+ rota listar todos os post de um unico usuario  `GET` `http://localhost:3030/post/:iduser`

- rota login `POST` `http://localhost:3030/login`

---
## :page_with_curl: Documentação

Todas as informações da documentação da API podem ser vistas ao clicar em "Run in Insomnia" neste README    


---


## :keyboard: Desenvolvedores participantes

[<sub>Reygis Azevedo</sub>](https://github.com/Reygis)  
[<sub>Raphael Anizio da Silva </sub>](https://github.com/raphaelaniziodasilva)  
[<sub>Víctor André Santos Franco</sub>](https://github.com/VictorF05)
