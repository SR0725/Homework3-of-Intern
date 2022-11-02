const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const server = require('http').Server(app);
const cors = require('cors');
const PORT = process.env.PORT || 80;


app.use(cors());
app.get('/', (req, res) => { res.sendFile(__dirname + '/dist/index.html'); });
app.use('/assets', express.static(path.join(__dirname, '/dist/assets')));
app.use('/', express.static(path.join(__dirname, '/dist')));

// WebAPI
app.get('/course', function (req, res) {
    fs.readFile('course_list.json', function (err, data) {
        res.send(data);
    });
});
server.listen(PORT, () => {
    console.log(`伺服器已開啟. http://localhost:${PORT}`);
});