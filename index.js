const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App. I just Changed This Again</h1>`);
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});
