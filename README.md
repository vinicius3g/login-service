# Projeto de API de Login

## Descrição
Este projeto é uma API de autenticação construída com Node.js, TypeScript, Sequelize, bcrypt para hash de senhas, e JWT para autenticação. Ele permite a criação de usuários, login e acesso a rotas protegidas.

## Índice
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação
1. Clone o repositório:
    ```sh
    git clone https://github.com/vinicius3g/login-service.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd seu-repositorio
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração
1. Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis de ambiente:
    ```env
    PORT=5000
    PGHOST=seu_host
    PGDATABASE=seu_banco_de_dados
    PGUSER=seu_usuario
    PGPASSWORD=sua_senha
    JWT_SECRET=sua_chave_secreta
    ```

## Uso
1. Inicie o servidor:
    ```sh
    npm run dev
    ```
2. A API estará disponível em `http://localhost:5000`.

## Estrutura do Projeto
src/ \
├── controllers\
│ └── userController.ts\
├── models/\
│ └── userModel.ts\
├── routes/\
│ └── userRoutes.ts\
├── services/\
│ └── userService.ts\
├── middleware/\
│ └── authMiddleware.ts\
├── utils/\
│ └── auth.ts\
├── database.ts\
└── app.ts

## Rotas
### Criar Usuário
- **URL**: `/api/users`
- **Método**: `POST`
- **Corpo da Solicitação**:
    ```json
    {
        "username": "seu_nome_de_usuario",
        "email": "seu_email@example.com",
        "password": "sua_senha"
    }
    ```

### Login de Usuário
- **URL**: `/api/users/login`
- **Método**: `POST`
- **Corpo da Solicitação**:
    ```json
    {
        "email": "seu_email@example.com",
        "password": "sua_senha"
    }
    ```

## Tecnologias Utilizadas
- Node.js
- TypeScript
- Express
- Sequelize
- PostgreSQL
- bcrypt
- JWT (jsonwebtoken)

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commite suas mudanças (`git commit -m 'Adiciona minha feature'`)
4. Faça um push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.