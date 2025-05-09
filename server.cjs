const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Make sure to add your API key to .env file
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    
    if (!userMessage) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // You can change this to gpt-4 if you have access
      messages: [
        {
          role: "system",
          content: "You are a helpful customer support assistant for our company. Provide concise, friendly answers. If you don't know something, say so politely."
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      max_tokens: 150 // Adjust as needed
    });

    // Extract the response
    const reply = completion.choices[0].message.content;
    
    // Send back to client
    res.json({ reply });
    
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).json({ 
      error: 'Error processing your request',
      details: error.message 
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // For testing