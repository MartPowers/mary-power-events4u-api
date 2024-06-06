const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const eventsRoute = require('./routes/events');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// route
app.use('/events', eventsRoute);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});