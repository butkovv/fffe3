const http = require("http");

http.createServer(function (request, response) {
	response.write("On the way to being a full stack engineer!");
	response.end();
}).listen(3000);

console.log("Server started on port 3000");

