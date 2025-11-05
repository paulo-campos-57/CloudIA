import request from "supertest";
import express from "express";
import router from "../routes/index.js";

const app = express();
app.use(router);

describe("Rotas principais", () => {
    it("GET / deve retornar mensagem de status", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "API em NodeJS está funcionando!",
            version: "1.0.0"
        });
    });

    it("GET /api/assistente deve retornar algo (ou 404 se não implementado)", async () => {
        const response = await request(app).get("/api/assistente");
        expect([200, 404]).toContain(response.status);
    });
});
