const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT);

app.use('/api/data', function (req, res) {
	res.json({ greeting: 'Hello World' });
});

console.log(`server running at http ${PORT}`);
