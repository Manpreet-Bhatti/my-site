const fs = require("fs/promises");

module.exports = function () {
  return fs.writeFile(
    "./src/scss/_env.scss",
    `$primary: #ce2029;
    $font: "Gilroy", sans-serif;`,
  );
};
