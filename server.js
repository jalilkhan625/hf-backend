require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/summarize', async (req, res) => {
  const { text } = req.body;
  const apiKey = process.env.HUGGINGFACE_API_KEY;

  if (!apiKey || !text) {
    return res.status(400).json({ error: 'Missing API key or text' });
  }

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: text }),
    });

    const data = await response.json();

    if (Array.isArray(data) && data[0]?.summary_text) {
      return res.json({ summary: data[0].summary_text });
    }

    return res.status(500).json({ error: "Unexpected API response" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Failed to summarize" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
