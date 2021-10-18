//creates server variable that needs to be used
// in the folder the file is in
const http = require('http');

//looks for prove01 file in same folder
const prove = require('./prove01-routes');

//creates varible that stores the server that was created
const server = http.createServer(prove);

//listens for server location
server.listen(3000);