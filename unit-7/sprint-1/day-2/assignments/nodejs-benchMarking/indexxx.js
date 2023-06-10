const http = require("http");
const fs = require("fs");
const fsPromise = require("fs").promises;

const server = http.createServer((req, res) => {
  if (req.url === "/textsync") {
    const text = fs.readFileSync("largeTextFile.txt", "utf8");
    res.end(text);
  } else if (req.url === "/textasync") {
    fs.readFile("largeTextFile.txt", "utf8", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === "/textstream") {
    const stream = fs.createReadStream("largeTextFile.txt");
    stream.pipe(res);
  } else if (req.url === "/textpromise") {
    fsPromise
      .readFile("largeTextFile.txt", "utf8")
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        throw err;
      });
  } else {
    res.end("Invalid route");
  }
});

server.listen(3002);
console.log("Server listen to 3002");
