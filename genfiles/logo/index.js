import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export default function () {
  // Change ${logo} with name of logo file and also add logo into this folder
  return readFile(join(__dirname, "${logo}")).then(async (buf) => {
    await writeFile(
      "./src/images/${logo}",
      buf.toString().replace(/\$COLOR/g, "#ce2029")
    );
  });
}
