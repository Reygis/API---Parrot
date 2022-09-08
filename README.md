# Parrot Hands_On04

<p align="center">
  <img src="./docs/logoGama.png" width="50%">
</p>
<p align="center">
<a href="#" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


---
<p>
Projeto Parrot, HandsOn04 da GamaAcademy no curso XP43 <br>
Neste Projeto foi proposto a criação da rede social Parrot, um sistema onde condomínios podem contratar para incentivar a interação
entre os moradores. <br>
A plataforma permite que os usuários façam publicações que ficam visíveis para toda comunidade.
</p>

<a href="https://github.com/pedrogoncaalves/Social-Parrot-ReactRedux" target="_blank">link do repositório frontend</a>

---
## :memo: Tecnologias utilizadas: 

* <a href="https://expressjs.com/pt-br/">Express</a>
* <a href="https://typeorm.io/">Typeorm</a>
* <a href="https://github.com/tada5hi/typeorm-extension">typeorm-extension</a>


---
## Como instalar a API:

1. após clonar o repositório, criar um arquivo `.env` e alterar credenciais do banco de dados, baseado no arquivo `.env.example`
2. executar o arquivo `install.bat` 
 + (*ATENÇÃO - ao iniciar o arquivo `install` será excluido o banco de dados e criado um novo, onde será populado conforme explicado na documentação abaixo*) 
3. Após instalação finalizar , abrir arquivo `ServerDevRun.bat`

---
## :page_with_curl: Documentação

Todas as informações da documentação da API tambem podem ser vistas ao clicar em "Run in Insomnia" neste README    

---
### Funcionalidades criadas: 
**todas as rotas demandam login, com exceção das rotas de login e criar usuario**

- rota user login `POST` `http://localhost:3030/login`
- rota admin login `POST` `http://localhost:3030/admin/login`

* rota criar usuario `POST` `http://localhost:3030/user`
* rota editar usuario `PUT` `http://localhost:3030/user/:iduser`

+ rota criar post  `POST` `http://localhost:3030/post`
+ rota listar todos os post  `GET` `http://localhost:3030/post`
+ rota listar todos os post de um unico usuario  `GET` `http://localhost:3030/post/:iduser`

**rotas exclusivas ao admin**
* rota listar todos os usuarios `GET` `http://localhost:3030/admin/users`
* rota listar usuario pelo iduser `GET` `http://localhost:3030/admin/:iduser`

---
### Corpo das requisições:
<p>
header = Content-Type : application/json<br>
authentication : Bearer token
</p>

* corpo do login 
```
{
	"email": string,
	"password": string
}
```
* corpo do create user / edit user 
```
{
	"name": string,
	"email": string,
	"password": string,
	"apartment": string,
	"userphoto": string
}
```  
* corpo do create post 
```
{
	"content": string
}
```

---
### Seeds criados ao instalar projeto:

* Admin:
```
{			
  name: 'Admin',
  email: 'admin@admin.com',
  apartment: 0,
  password: 'admin'
  role: 'ADMIN',
}
```

* Users:
```
{
  name: 'user1',
  email: 'user1@user.com',
  password: 'admin'

}
{
  name: 'user2',
  email: 'user2@user.com',
  password: 'admin'
}
```
* Será criado 2 Posts.
---
## :keyboard: Desenvolvedores participantes

[<sub>Reygis Azevedo</sub>](https://github.com/Reygis)  
[<sub>Raphael Anizio da Silva </sub>](https://github.com/raphaelaniziodasilva)  
[<sub>Víctor André Santos Franco</sub>](https://github.com/VictorF05)
