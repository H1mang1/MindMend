// import axios from 'axios';

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// const geminiApi = axios.create({
//   baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA16TqEG7chq-sqdaGjd2WWMBOv4B5JKKc', // Replace with the actual base URL of the Gemini API
//   headers: {
//     'Authorization': `Bearer ${GEMINI_API_KEY}`,
//     'Content-Type': 'application/json'
//   }
// });

// export const getGeminiData = async (endpoint) => {
//   try {
//     const response = await geminiApi.get(endpoint);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data from Gemini API:', error);
//     throw error;
//   }
// };


/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
}

export default run;
