require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { Pool } = require('pg');
const app = express();

app.use(cors());


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
}
);

app.get('/api/health', (req, res) => {
    res.json({ ok: true });
  });

app.get('/api/items', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM items ORDER BY id');
        res.json({items: result.rows});
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});