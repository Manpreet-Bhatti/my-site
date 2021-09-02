const fs = require("fs/promises");
const path = require("path");

module.exports = function () {
  // Change ${logo} with name of logo file and also add logo into this folder
  return fs.readFile(path.join(__dirname, "${logo}")).then(async (buf) => {
    await fs.writeFile(
      "./src/images/${logo}",
      buf.toString().replace(/\$COLOR/g, "#ce2029")
    );
  });
};
