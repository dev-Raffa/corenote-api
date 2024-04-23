# CoreNoteApi
### Descrição
Este é um projeto de gestão de tarefas proposto pela empresa Corelab em seu desafio de código. O projeto consiste no desenvolvimento de um aplicativo (front-end e back-end) que permite aos usuários gerenciar suas tarefas por meio de blocos de notas, possibilitando a criação, visualização, edição e exclusão de notas, além de classificá-las por cores e favoritos.

Link do projeto: [CoreNoteApp](https://job-test-xi.vercel.app/)

### Tecnologias utilizadas:
- Nestjs
- postgresql
- jest
- Typescript

### Como usar
1. Clone este repositório para a sua máquina local utilizando o seguinte comando:
```bash
git clone https://github.com/dev-Raffa/corenote-api.git
```

2. Acesse o diretório do projeto e instale as dependências:
```bash
cd corenote-api
npm install
```

3. Configure as variáveis de ambiente em um arquivo `env.local`:
```dotenv
#DATABASE
DB_TYPE=''
DB_HOST=''
DB_PORT=
DB_USERNAME=''
DB_PASSWORD=''
DB_NAME=''

#SECURITY
SECRET_KEY=''
```

4. Inicie a aplicação:
```bash
npm run dev
```
