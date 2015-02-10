"use strict";

var http = require("http");
var url = require("url");

var start = function (route) {
  var onRequest = function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    route(pathname);

    response.writeHead(200, { "Content-type": "text/plain" });
    response.write("Hola mundo");
    response.end();
  };

  http.createServer(onRequest).listen(3333);
  console.log("Server has started");
};

exports.start = start;
//# sourceMappingURL=startServer.js.map
