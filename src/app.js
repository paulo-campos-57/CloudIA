import express, { json } from 'express';
import routes from './routes';

const app = express();

app.use(json());

app.use(routes);

app.use((req, res, next) => {
    res.status(404).send('Rota Não Encontrada');
});


export default app;