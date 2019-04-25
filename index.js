const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 80;
const app = express();


app.get('/apics/lock/:lockId', (req, res) => {

    const lock = readJsonFromFile('./stubs/lock.json');
    res.json(lock);

});

app.get('/apics/locks', (req, res) => {

    const lock = readJsonFromFile('./stubs/locks.json');
    res.json(lock);

});

app.get('/apics/lockexecutions/:lockCode', (req, res) => {

    const lock = readJsonFromFile('./stubs/lockExecutions.json');
    res.json(lock);

});

app.get('/apics/lockexecution/:lockid', (req, res) => {

    const lock = readJsonFromFile('./stubs/lockExecution.json');
    res.json(lock);

});

function readJsonFromFile(fileLocation) {
    const rawData = fs.readFileSync(fileLocation);
    const json = JSON.parse(rawData);
    console.log(`parsed file in json: ${json}`);
    return json;
}
app.listen(port, '0.0.0.0', () => console.log(`app is running on localhost:${port}`));