const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.get('/health', (req, res) => {
 return res.status(200).json({
  message: 'Server health check successful',
 });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server is running'));
