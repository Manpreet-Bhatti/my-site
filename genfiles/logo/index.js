const fs = require("fs/promises");
const path = require("path");

module.exports = function () {
  return fs.readFile(path.join(__dirname, "./logo.svg")).then(async (buf) => {
    await fs.writeFile(
      "./src/images/logo.svg",
      buf.toString().replace(/\$COLOR/g, "#ce2029"),
    );
  });
};
