const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'code' directory
app.use(express.static(path.join(__dirname, 'code')));

// Serve your index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});