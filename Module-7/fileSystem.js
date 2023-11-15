const fs = require('fs');
// reading a file text

const readText = fs.readFileSync('./text/read.txt', 'utf8');
console.log(readText);


// writing a file text

const writingText = fs.writeFileSync("./text/write.txt", readText + " My test Written text");
console.log(writingText);


// reading text asynchronous way

fs.readFile("./text/read.txt", "utf-8", (err, data)=>{
    if (err) {
        throw Error("Error reading text")
    }
    console.log(data);
    fs.writeFile("./text/write2.txt", data, "utf-8", (err)=>{
        if (err) {
            throw Error("Error Writing text")
        }
    });
})

// write file asynchronous

