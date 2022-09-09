# Parrot Hands_On04

<p align="center">
  <img src="./docs/logoGama.png" width="40%">
</p>
<p align="center">
<a href="https://insomnia.rest/run/?label=Parrot_grupo07&uri=https%3A%2F%2Fraw.githubusercontent.com%2FReygis%2FApiParrot%2Fmain%2Fdocs%2FInsomnia_2022-09-09.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
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
## 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:
<br><br>

<div align="left">
  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="TypeScript logo" />          
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="52" alt="mysql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="npm logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="40" width="52" alt="Jest logo" /> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo"  />
</div>


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
### :file_folder: Funcionalidades da API
**todas as rotas demandam login, com exceção das rotas de login e criar usuario**

- rota user login `POST` `http://localhost:3030/login`
- rota admin login `POST` `http://localhost:3030/admin/login`

* rota criar usuario `POST` `http://localhost:3030/user`
* rota editar usuario `PUT` `http://localhost:3030/user`

+ rota criar post  `POST` `http://localhost:3030/post`
+ rota listar todos os post  `GET` `http://localhost:3030/post`
+ rota listar todos os post de um unico usuario  `GET` `http://localhost:3030/post/myposts`

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

<h2>
<table align=center>
  <tr>

   <td align="center"> <img src="https://avatars.githubusercontent.com/u/103973457?v=4" width=175/></br><a href="https://www.linkedin.com/in/reygis/"> Reygis Meira </a>
   </td>
   <td align="center"> <img src="https://avatars.githubusercontent.com/u/96752946?v=4"  width=175/></br><a href="https://www.linkedin.com/in/raphael-anizio-da-silva-0173211b8/"> Raphael Anizio da Silva </a>
   </td>
    <td align="center"> <img src="https://avatars.githubusercontent.com/u/81822864?v=4" width=175/></br><a href="https://www.linkedin.com/in/victorf05/"> Víctor Franco </a>
   
  </tr>
</table> </h2>

---


