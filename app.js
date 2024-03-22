require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { Pool } = require('pg');

const app = express();

// Optional environment variables
const PORT = process.env.PORT || 8081;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Configure middleware & parsers
app.use(cors());
app.use(helmet());
app.use(express.json());

// Configure PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false // Necessary for Heroku
  }
});

// Configure server routes
app.get('/', async (req, res) => {
  try {
    // Connect to the database
    const client = await pool.connect();

    // Execute a SQL query to retrieve data
    const result = await client.query('select * from salesforce.opportunity');

    // Release the database connection
    client.release();

    // Send the retrieved data as a JSON response
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, (error) => {
  if (error) {
    console.log(`[app.js] catch: ${JSON.stringify(error)}`);
  } else {
    console.log(`[app.js] port: ${PORT} | node_env: ${NODE_ENV}`);
  }
});
