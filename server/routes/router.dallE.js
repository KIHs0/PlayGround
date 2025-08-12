import dotenv from "dotenv";
dotenv.config();
import express from "express";
import OpenAI from "openai";
const router = express.Router();
const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API,
  apiKey: "My API Key",
});

// GET endpoint for testing
router.get("/", (req, res) => {
  res.send("DALL·E router is working!");
});

// POST endpoint to generate image
// router.post("/generate", async (req, res) => {
//   console.log(req.body);
//   const { prompt } = req.body;
//   try {
//     const response = await openai.images.generate({
//       prompt,
//       n: 1,
//       size: "512x512",
//       response_format: "b64_json",
//     });
//     res.json({ image: response.data[0].b64_json });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
export default router;
