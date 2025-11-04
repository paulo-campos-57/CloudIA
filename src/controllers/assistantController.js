import { generateResponse } from '../services/llmService.js';

/**
 * @swagger
 * /api/assistente/explicar:
 *   post:
 *     summary: Explica um tópico usando o LLM (Gemini).
 *     tags:
 *       - Assistente LLM
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic:
 *                 type: string
 *                 description: O tópico ou pergunta a ser explicada pelo LLM.
 *                 example: "o que é a lei de hook?"
 *     responses:
 *       '200':
 *         description: Resposta do LLM gerada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 topic:
 *                   type: string
 *                   example: "o que é a lei de hook?"
 *                 explanation:
 *                   type: string
 *                   example: "A Lei de Hooke descreve a relação linear entre a força exercida sobre uma mola e sua deformação, afirmando que a força é diretamente proporcional à extensão ou compressão da mola."
 *       '400':
 *         description: Requisição inválida (campo 'topic' ausente).
 *       '500':
 *         description: Erro interno ao processar a requisição ou falha na API do LLM.
 */
export const explainTopic = async (req, res) => {
    const { topic } = req.body;

    if (!topic) {
        return res.status(400).json({ error: 'O campo "topic" é obrigatório.' });
    }

    const prompt = `Como um professor de Ciência da computação, de Cloud, explique o seguinte tópico de forma clara e concisa para um estudante: "${topic}"`;

    try {
        const explanation = await generateResponse(prompt);

        console.log("Explicação pronta:", explanation);

        return res.status(200).json({
            topic: topic,
            explanation: explanation
        });

    } catch (error) {
        console.error('Erro no controller de explicação:', error);
        return res.status(500).json({ error: 'Não foi possível gerar a explicação neste momento.' });
    }
};