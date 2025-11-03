import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'API em NodeJS está funcionando!',
        version: '1.0.0'
    });
});

export default router;