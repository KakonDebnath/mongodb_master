const http = require('http');
const fs = require('fs');

// create a new server raw node.js

const server = http.createServer();

// listerer 

server.on("request", (req, res) => {
    console.log(req.url, req.method);

    const readableStream = fs.createReadStream(__dirname + "/text/read.txt")
    // const readableStream = fs.createReadStream(process.cwd() + "/text/read.txt")

    readableStream.on("data", (buffer) => {
        res.write(buffer);
    });

    readableStream.on("end", () => {
        res.end("Hello world!");
    })


})

const port = 5000;
server.listen(port, () => {
    console.log(`Server listening on ${port}`);
})