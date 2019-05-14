const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 80;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });

app.get('/apics/lock/:lockId', (req, res) => {

    //get lockdetails by lock id
    const lock = readJsonFromFile('./stubs/lock.json');
    res.json(lock);

});

app.get('/apics/locks', (req, res) => {

    //get all locks of antwerp
    const lock = readJsonFromFile('./stubs/locks.json');
    res.json(lock);

});

app.get('/apics/lockexecutions/:lockCode', (req, res) => {

    //get all lockexecutions for a lock by lockcode
    const lock = readJsonFromFile('./stubs/lockExecutions.json');
    res.json(lock);

});

app.get('/apics/lockexecution/:lockExecutionId', (req, res) => {

    // find lockexecution by id
    const lock = readJsonFromFile('./stubs/lockExecution.json');
    res.json(lock);

});

app.get('/apics/quay/:quaynumber', (req, res) => {
    //get quay details by quaynumber 
    const quay = readJsonFromFile('./stubs/quay.json');
    res.json(quay);
});



app.get('apics/quays', (req, res) => {

// get 3 most recent available
    const quays = readJsonFromFile('./stubs/availableQuays.json');
    res.json(quays);
});

app.get('apics/quays/:location', (req, res) => {

    //get all quays within a radius from a location
    const quays = readJsonFromFile('./stubs/availableQuays.json');
    res.json(quays);
});


function readJsonFromFile(fileLocation) {
    const rawData = fs.readFileSync(fileLocation);
    const json = JSON.parse(rawData);
    console.log(`parsed file in json: ${json}`);
    return json;
}

app.listen(port, '0.0.0.0', () => console.log(`app is running on localhost:${port}`));