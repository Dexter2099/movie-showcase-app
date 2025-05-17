const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const OMDB_API_KEY = process.env.OMDB_API_KEY;

app.use(cors());

// Proxy route to OMDb API
app.get('/api/movies', async (req, res) => {
  const search = req.query.search;
  if (!search) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  const omdbURL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(search)}&type=movie`;

  try {
    const response = await axios.get(omdbURL);
    if (response.data.Response === 'False') {
      return res.status(404).json({ error: response.data.Error });
    }
    res.json(response.data.Search);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies from OMDb API' });
  }
});

app.listen(PORT, () => {
  console.log(`🔌 Server running on http://localhost:${PORT}`);
});
