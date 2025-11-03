import gemini from '../config/providers/gemini.js';

const activeProvider = process.env.LLM_PROVIDER || 'gemini';

const providers = {
    'gemini': gemini,
};

/**
 * @param {string} prompt
 * @param {object} options
 * @returns {Promise<string>} 
 */
export async function generateResponse(prompt, options = {}) {
    const provider = providers[activeProvider];

    if (!provider) {
        throw new Error(`Provedor de LLM "${activeProvider}" não configurado.`);
    }
    return provider.generate(prompt, options);
}

export default { generateResponse };