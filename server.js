require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'fintech-secret-123';

// Mock user database
const users = {
  'user1': { password: 'pass1', role: 'customer' },
  'user2': { password: 'pass2', role: 'admin' },
};

// Token Vault (for tokenization)
const tokenVault = new Map();

// Generate Unique Token
const generateToken = (data) => {
  return crypto.createHash('sha256').update(data + Date.now()).digest('hex');
};

// Middleware to authenticate JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Login Endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { username, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token });
});

// Protected Data Endpoint
app.get('/data', authenticateToken, (req, res) => {
  res.json({
    message: 'Secure financial data',
    user: req.user,
  });
});

// Tokenization Endpoint
app.post('/api/tokenize', authenticateToken, (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== 'string') {
    return res.status(400).send({ error: 'Invalid input for tokenization' });
  }

  const token = generateToken(data);
  tokenVault.set(token, data); // Store token in vault
  res.send({ token });
});

// Detokenization Endpoint
app.post('/api/detokenize', authenticateToken, (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).send({ error: 'Token is required' });
  }

  const originalData = tokenVault.get(token);
  if (!originalData) {
    return res.status(404).send({ error: 'Token not found' });
  }

  res.send({ originalData });
});

// Start the Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
