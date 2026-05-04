const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, 'messages.db');
const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error('❌ Failed to open SQLite DB:', err);
  } else {
    console.log('🗄️ SQLite DB opened at', dbPath);
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    text TEXT NOT NULL
  );
`);

module.exports = db;
