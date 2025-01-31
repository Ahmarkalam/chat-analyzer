const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/analyze', (req, res) => {
    const chatText = req.body.chatText;
    const analysisResults = analyzeChat(chatText);
    res.json(analysisResults);
});

function analyzeChat(chatText) {
    // Placeholder for actual analysis logic
    return {
        interestLevel: 87,
        redFlags: 2,
        topWords: ['her']
    };
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});