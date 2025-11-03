import express, { json } from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json());

app.use(routes);

app.use((req, res, next) => {
    res.status(404).send('Rota Não Encontrada');
});

export default app;