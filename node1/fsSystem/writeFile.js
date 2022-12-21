const fs = require("fs");

// append file
// fs.appendFile("myFile1.txt", "Hello content", (err) => {
//     if (err) throw err;
//     console.log("saved");
// })

// open file for writing, if file doesnt exist then new file create for writing....
// fs.open("myFile2.txt", "w", (err) => {
//     if (err) throw err;
//     console.log("saved");
// })

// write file , if file doesnt exist then it create new file
// fs.writeFile("myFile3.txt", "Hello world....", (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("saved");
// })

// append file
// fs.appendFile("myFile1.txt", " This is my text...", (err) => {
//     if (err) throw err;
//     console.log("updated");
// })

// replace content of file
// fs.writeFile("myFile3.txt", " This is my text", (err) => {
//     if (err) throw err;
//     console.log("replaced...");
// })

// delete file using unlink()

// fs.unlink("myFile2.txt", (err) => {
//     if (err) throw err;
//     console.log("file deleted");
// })

fs.rename("myFile1.txt", "renameFile1.txt", (err) => {
    if (err) throw err;
    console.log("file renamed....");
})