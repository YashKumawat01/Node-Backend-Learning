// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}:${req.url} New Request Received\n`;

//   fs.appendFile("log.txt", log, (err) => {
//     if (err) console.log("Log error:", err);

//     switch (req.url) {
//       case '/':
//         res.end('Hello From Server Again and You are on Homepage');
//         break;

//       case '/about':
//         res.end('Hello From Server Again and You are on About Section');
//         break;

//       case '/contact':
//         res.end('Hello From Server Again and You are on Contact Section');
//         break;

//       case '/search':
//         res.end('Hello From Server Again and You are on Searching Section');
//         break;

//       default:
//         res.end('404 Not Found');
//     }
//   });
// });

// myServer.listen(8000, () => {
//   console.log("Server is Starting...");
// });

const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  // method logging
  const log = `${Date.now()} ${req.method} ${req.url} New Request Received\n`;

  fs.appendFile("log1.txt", log, (err) => {
    if (err) console.log(err);

    if (req.url === "/") {
      res.statusCode = 200;
      res.end("Homepage");
    } else if (req.url === "/about") {
      res.statusCode = 200;
      res.end("About page");
    }

    // JSON route example
    else if (req.url === "/api" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          type: "GET",
          message: "Fetching data",
        }),
      );
    } else if (req.url === "/api" && req.method === "POST") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          type: "POST",
          message: "Data received",
        }),
      );
    } else {
      res.statusCode = 404;
      res.end("Not Found");
    }
  });
});

myServer.listen(8000);
