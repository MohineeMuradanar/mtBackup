// const http = require('http')

// http.createServer((req, res) => {
//  res.writeHead(200, {'Content-Type': 'text/html'})
//  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
//   res.write('<input type="file" name="filetoupload"><br>')
//   res.write('<input type="submit">')
//   res.write('</form>')
//   return res.end()
// }).listen(8000)

const http = require('http')
const formidable = require('formidable')
const fs = require("fs");

http.createServer((req, res) => {
  if (req.url == '/fileupload') {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
     const oldPath = files.filetoupload.filepath;
     const newPath = '/home/mohinee' + files.filetoupload.originalFilename;
     fs.rename(oldPath, newPath, (err) => {
        res.write("file uploaded and moved");
        res.end();
     });

    });

  } else {
    res.writeHead(200, {'Content-Type': 'text/html'})
   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    return res.end()
  }
}).listen(8000);
