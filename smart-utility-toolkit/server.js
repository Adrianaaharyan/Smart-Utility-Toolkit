const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to Node Server");
      break;
    case "/about":
      res.statusCode = 200;
      res.end("About Page");
      break;
    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page");
      break;
    default:
      res.statusCode = 404;
      res.end("404 Not Found");
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
