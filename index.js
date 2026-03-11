const express = require('express');
const app = express();

app.get('/her/', (req, res) => {
    res.send('Hello World! Klokken er ' + new Date().toLocaleTimeString());
});

app.get('/home', (req, res) => {
    res.send(`
        <p>Og her er en paragraf</p>
    `);
});
app.get('/deltagere-1', (req, res) => {
    res.send(`
        <h1>Klassekamerater</h1>
        <li>Victor</li>
        <li>Heath</li>
        <li>Kevin</li>
        <li>Siri</li>
    `);
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello. World!'});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});