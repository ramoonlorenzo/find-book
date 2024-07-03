import OpenAI from "openai";
import { HttpException } from "../../../types/HttpException";

export async function searchOpenAI(input: string): Promise<GptResponse> {
  const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openAi.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
        - Não é para buscar nada fora dos dados fornecidos
        - Não é para inventar nenhuma informação, quero apenas que retorne o que foi solicitado
        - Preciso da resposta no formato de JSON
        - Lista de categorias: ["Ficção", "Romance", "Terror", "Aventura", "Fantasia", "Biografia", "História", "Autoajuda", "Técnico", "Infantil", "Didático"]
        - Identificar se a mensagem do usuário corresponde a alguma categoria da lista de categorias em português ou inglês. Caso não seja, retorne a categoria do livro encontrado.
        - Realizar uma busca por title, authors, categories e longDescription
        - Retornar sempre o primeiro autor da lista de authors
        - Instruções de formato de saída para JSON: {title: string, authors: string, categories: string, longDescription: string}`,
        },
        {
          role: "user",
          content: input,
        },
      ],
      response_format: {
        type: "json_object",
      },
      model: "gpt-3.5-turbo-1106",
    });
    console.log("🚀 ~ searchOpenAI ~ response:", response);
    const output = JSON.parse(response.choices[0].message.content!);
    return output;
  } catch (error: any) {
    throw new HttpException(500, error.message);
  }
}
