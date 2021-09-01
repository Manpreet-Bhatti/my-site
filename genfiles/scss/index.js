import { writeFile } from "fs/promises";

export default function () {
  return writeFile(
    "./src/scss/_env.scss",
    `$primary: #ce2029;
    $font: "Gilroy", sans-serif;`
  );
}
