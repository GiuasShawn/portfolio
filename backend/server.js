const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// GET all messages
app.get('/messages', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY id DESC', [], (err, rows) => {
    if (err) {
      console.error('Fetch error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

// POST a new message
app.post('/messages', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Message required' });
  const timestamp = new Date().toISOString();
  const sql = `INSERT INTO messages (timestamp, text) VALUES (?, ?)`;
  db.run(sql, [timestamp, text], function (err) {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ id: this.lastID, timestamp, text });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API server listening at http://localhost:${PORT}`);
});
