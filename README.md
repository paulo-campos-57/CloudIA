<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=nodejs,express,docker" /><br>CloudIA - Backend 🇧🇷
  </h1>
</div>

Assistente inteligente desenvolvido em Node.js (Express) que se conecta à API do Google Gemini para auxiliar nos estudos de Cloud Computing com interações dinâmicas e contextuais.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey.svg)](https://expressjs.com/)
[![Gemini API](https://img.shields.io/badge/Gemini_API-Google_AI-blue.svg)](https://ai.google.dev/gemini-api/docs)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Sobre

O **CloudIA** é um assistente inteligente projetado para **apoiar o aprendizado prático** dos conceitos de **Cloud Computing**, integrando tecnologias modernas de inteligência artificial com a API do Google Gemini.

### Objetivo

O principal objetivo do projeto é oferecer uma ferramenta de estudo dinâmica e contextualizada, utilizando uma arquitetura robusta baseada em **Node.js** e **Docker** para simular um ambiente de produção em nuvem.

-----

## Deploy

O backend da API está hospedado no Render.

**URL da API:** `https://cloudia-ljca.onrender.com/`

**Documentação da API:** `https://cloudia-ljca.onrender.com/api-docs`

Você pode interagir com esta API através do frontend relacionado:

**Frontend para uso da API:** `https://github.com/paulo-campos-57/CloudIA-Frontend/tree/main`

-----

## Tecnologias e Requisitos

  * **Node.js (Express):** Servidor principal da aplicação.
  * **Google Gemini API:** Modelo de Linguagem Grande (LLM) para geração de respostas.
  * **Docker:** Para conteinerização e ambiente de execução simplificado.

-----

## Instalação Local

Para executar o projeto localmente, é necessário ter o **Docker** e o **Docker Compose** instalados.

### Passos

1.  Clone o repositório em sua máquina:

    ```bash
    git clone https://github.com/paulo-campos-57/CloudIA.git
    ```

2.  Crie e configure as variáveis de ambiente:

      * Na pasta `CloudIA`, crie um arquivo `.env`.
      * Adicione as credenciais necessárias, substituindo `sua_chave_API` pela sua chave do Google Gemini:
        ```bash
        LLM_PROVIDER=gemini
        GEMINI_API_KEY=sua_chave_API
        ```

3.  Inicie a aplicação utilizando o Docker Compose:

    ```bash
    docker compose up --build
    ```

4.  Acesse o servidor:

      * O servidor estará disponível em: **`http://localhost:3000`**
      * A documentação das funções (Swagger/OpenAPI) pode ser acessada em: **`http://localhost:3000/api-docs`**

-----

## Estrutura da API

A API segue uma arquitetura REST e oferece um endpoint principal para interações com o assistente inteligente.

### Endpoint Principal

  * **URL:** `/api/assistente/explicar`
  * **Método:** `POST`
  * **Descrição:** Envia uma consulta de Cloud Computing ao assistente e recebe a explicação gerada pelo modelo Gemini.

### Configuração de Requisição (Payload)

```json
{
  "topic": "Elastic Load Balancing (ELB) na AWS",
  "tipo_resposta": "média" 
  // Valores permitidos: "curta" | "média" | "longa"
}
```

### Resposta Esperada

```json
{
  "explanation": "A explicação detalhada ou resumida do tópico gerada pelo Gemini..."
}
```

-----

## Licença

Este projeto está sob a licença **MIT**.

## Desenvolvedor

  - **Paulo Campos** - [GitHub](https://github.com/paulo-campos-57)

-----

<div align="center">
  <h1>
    <img src="https://www.google.com/search?q=https://skillicons.dev/icons%3Fi%3Dnodejs,express,docker,aws" /><br>CloudIA - Backend 🇺🇸
  <h1>
</div>

Intelligent assistant developed in Node.js (Express) that connects to the Google Gemini API to aid in Cloud Computing studies with dynamic and contextual interactions.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey.svg)](https://expressjs.com/)
[![Gemini API](https://img.shields.io/badge/Gemini_API-Google_AI-blue.svg)](https://ai.google.dev/gemini-api/docs)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About

**CloudIA** is an intelligent assistant designed to **support the practical learning** of **Cloud Computing** concepts, integrating modern artificial intelligence technologies with the Google Gemini API.

### Purpose

The main goal of the project is to offer a dynamic and contextualized study tool, using a robust architecture based on **Node.js** and **Docker** to simulate a cloud production environment.

-----

## Deploy

The API backend is hosted on Render.

**API URL:** `https://cloudia-ljca.onrender.com/`

**API Documentation:** `https://cloudia-ljca.onrender.com/api-docs`

You can interact with this API through the related frontend:

**Frontend for API usage:** `https://github.com/paulo-campos-57/CloudIA-Frontend/tree/main`

-----

## Technologies and Requirements

  * **Node.js (Express):** Main application server.
  * **Google Gemini API:** Large Language Model (LLM) for response generation.
  * **Docker:** For containerization and simplified execution environment.

-----

## Local Installation

To run the project locally, you need to have **Docker** and **Docker Compose** installed.

### Steps

1.  Clone the repository to your computer:

    ```bash
    git clone https://github.com/paulo-campos-57/CloudIA.git
    cd IsCool-GPT/CloudIA
    ```

2.  Create and configure environment variables:

      * In the `CloudIA` folder, create a `.env` file.
      * Add the necessary credentials, replacing `your_API_key` with your Google Gemini key:
        ```bash
        LLM_PROVIDER=gemini
        GEMINI_API_KEY=your_API_key
        ```

3.  Start the application using Docker Compose:

    ```bash
    docker compose up --build
    ```

4.  Access the server:

      * The server will be available at: **`http://localhost:3000`**
      * Function documentation (Swagger/OpenAPI) can be accessed at: **`http://localhost:3000/api-docs`**

-----

## API Structure

The API follows a REST architecture and offers a main endpoint for intelligent assistant interactions.

### Main Endpoint

  * **URL:** `/api/assistente/explicar`
  * **Method:** `POST`
  * **Description:** Sends a Cloud Computing query to the assistant and receives the explanation generated by the Gemini model.

### Request Configuration (Payload)

```json
{
  "topic": "Elastic Load Balancing (ELB) in AWS",
  "tipo_resposta": "média" 
  // Allowed values: "curta" | "média" | "longa" (Portuguese for short, medium, long)
}
```

### Expected Response

```json
{
  "explanation": "The detailed or summarized explanation of the topic generated by Gemini..."
}
```

-----

## License

This project is under the **MIT** license.

## Developer

  - **Paulo Campos** - [GitHub](https://github.com/paulo-campos-57)

-----


