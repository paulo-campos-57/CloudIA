import { listen } from './src/app';

const PORT = process.env.PORT || 3000;

listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Pressione CTRL+C para parar.');
});