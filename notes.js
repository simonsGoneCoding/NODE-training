console.log("------module notes------");

// console.log("exports", exports);
// console.log("dirname", __dirname);
// console.log("filename", __filename);
// console.log("require", require);
console.log("module", module);
setTimeout(() => {
  console.log("module", module.loaded);
}, 2000);

// module.exports = { txt: `returning something from module notes` };
