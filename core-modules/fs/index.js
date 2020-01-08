const fs = require("fs");
const colors = require("colors");

//  ------ ACCESS ------
// fs.access("./names.txt", err => {
//   console.log(err ? "file does not exist" : "up and running");
// });

// fs.access("./unwritable.txt", fs.constants.W_OK, err => {
//   // fs.constans.W_ok <-- writeable
//   console.log(err ? "file unwritable" : "file writeable");
// });

// ------ RENAME ------

// fs.rename("newnames.txt", "names.txt", err => {
//   if (err) return console.log(err);
//   console.log("rename complete");
// });

// try {
//   fs.renameSync("users.txt", "newusers.txt");
// } catch (err) {
//   console.log(err);
// }

// ------ READDIR ------

// console.log(fs.readdirSync("./"));

// fs.readdir("./", (err, files) => {
//   if (err) return console.log("Ops something went wrong", err);
//   console.log(files);
// });

// ------ READFILE ------

// fs.readFile("names.txt", "utf8", (err, data) => {
//   if (err) throw Error(err);
//   console.log(data);
// });

try {
  const names = fs.readFileSync("namess.txt", "utf8");
  console.log(names);
} catch (err) {
  console.log("Ops! something went wrong!".red.bgWhite, err);
}
