const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Nakurwiamy...'));
app.listen(port, () => console.log(`Server set and running on port ${port}`));