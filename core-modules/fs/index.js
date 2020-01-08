const fs = require("fs");

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
fs.readdir("./", (err, files) => {
  if (err) return console.log("Ops something went wrong", err);
  console.log(files);
});
