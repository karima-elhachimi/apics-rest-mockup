const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;
const app = express();


app.listen(port, () => console.log(`app is running on localhost:${port}`));