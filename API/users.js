const users = [
  { id: 1, name: "Maciek" },
  { id: 2, name: "Tereska" },
  { id: 3, name: "Zaneta" }
];

module.exports = {
  showUsers() {
    const names = users.map(user => user.name);
    console.log("\nOur users are: ");
    names.forEach(name => console.log(name));
  },
  showUseObj(id) {
    console.log("\nUser is: ");
    const user = users.find(user => id === user.id);
    console.log(user);
  },
  userListLength: users.length
};
