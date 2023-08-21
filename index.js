const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
const headphoneRoutes = require('./routes/headphones');
app.use('/api/headphones', headphoneRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
