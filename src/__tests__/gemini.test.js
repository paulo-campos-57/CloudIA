import { jest } from "@jest/globals";

jest.unstable_mockModule("@google/genai", () => ({
    GoogleGenAI: jest.fn().mockImplementation(() => ({
        models: {
            generateContent: jest.fn().mockResolvedValue({
                text: "Resposta mockada do Gemini",
            }),
        },
    })),
}));

jest.unstable_mockModule("../config/providers/gemini.js", () => ({
    default: {
        generate: jest.fn().mockResolvedValue("Resposta mockada do Gemini"),
    },
}));

process.env.GEMINI_API_KEY = "fake-key-for-tests";
process.env.LLM_PROVIDER = "gemini";

const llmService = (await import("../services/llmService.js")).default;

describe("Gemini Service via llmService", () => {
    it("deve gerar texto com sucesso", async () => {
        const result = await llmService.generateResponse("Olá mundo!");
        expect(result).toBe("Resposta mockada do Gemini");
    });

    it("deve lançar erro se o provider não estiver configurado", async () => {
        process.env.LLM_PROVIDER = "inexistente";

        jest.resetModules();

        const llmErro = (await import("../services/llmService.js")).default;

        await expect(
            llmErro.generateResponse("teste")
        ).rejects.toThrow('Provedor de LLM "inexistente" não configurado.');

        process.env.LLM_PROVIDER = "gemini";
    });
});
