import { generateResponse } from '../services/llmService.js';

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