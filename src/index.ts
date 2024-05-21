import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './database';
import userRoutes from './routes/userRoutes'
import 'dotenv/config'

const app: Application = express();
const PORT = process.env.PORT 

// Middleware
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

// Sincronizar modelos com o banco de dados
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => console.error('Error syncing models:', err));
