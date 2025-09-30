require('dotenv').config();
const app = require('./app');
const connectDB = require('./src/database/db');

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectDB(); //connect to real MongoDB only when starting server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
