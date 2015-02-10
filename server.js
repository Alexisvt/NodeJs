"use strict";

var http = require("http");

http.createServer(function (request, response) {
  console.log("Request received.");
  response.writeHead(200, { "content-type": "text/plain" });
  response.write("Hello world");
  response.end();
}).listen(3333);

console.log("Server has started.");
//# sourceMappingURL=server.js.map
