const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const exampleRoute = require('./routes/example');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example route
app.use('/api', exampleRoute);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});