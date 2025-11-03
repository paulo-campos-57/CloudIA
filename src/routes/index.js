import { Router } from 'express';
import assistantRoutes from './assistantRoutes.js';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'API em NodeJS está funcionando!',
        version: '1.0.0'
    });
});

router.use('/api/assistente', assistantRoutes);

export default router;