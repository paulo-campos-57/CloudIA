import { Router } from 'express';
import { explainTopic } from '../controllers/assistantController.js';

const router = Router();

router.post('/explicar', explainTopic);

export default router;