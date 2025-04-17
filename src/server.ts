import express from 'express';
import TextValidationService from './services/textValidationService';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const validationService = new TextValidationService();

app.post('/api/validate', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    
    const result = await validationService.validateText(text);
    res.json(result);
  } catch (error) {
    console.error('Validation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});