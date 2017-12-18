const http = require('http');
const fs = require('fs');
const PORT = 9090;

const responseForNotAvailable = function(req, res) {
  res.statusCode = 404;
  res.write(`${req.url} not found`);
}


const getContentType = function(file) {
  fileExtension = file.slice(file.lastIndexOf('.'));
  allExtensionsWithContentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/png',
    '.gif': 'img/gif',
    '.pdf': 'document/pdf',
    '.js': 'text/javascript',
    // '.ico':'image/png'
  }
  return allExtensionsWithContentType[fileExtension];
}

const setDefaultFileIfRoot=function(file) {
  return file=="./" ? "game.html" : file;
}

requestHandler = function(req, res) {
  console.log(req.url);
  file = '.' + req.url;
  if (fs.existsSync(file)) {
    file=setDefaultFileIfRoot(file);
    let contentType = getContentType(file);
    res.setHeader('Content-Type',contentType);
    res.write(fs.readFileSync(file, 'utf8'));
  } else {
    responseForNotAvailable(req, res);
  }
  res.end();
}

server = http.createServer(requestHandler);
server.listen(PORT);
console.log(`listening at ${PORT}`);
