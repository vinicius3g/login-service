import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './database';
import { createUserModel } from './models/userModel'
import 'dotenv/config'

const app: Application = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(bodyParser.json());

const User = createUserModel(sequelize);

// Sincronizar modelos com o banco de dados
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => console.error('Error syncing models:', err));
