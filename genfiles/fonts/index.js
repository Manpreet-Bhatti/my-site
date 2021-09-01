import { mkdir, rmdir, readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

const IGNORE = ["index.js"];
const FONTS = "./static/fonts";

const _url = (path, weight) => (format) =>
  `url('/fonts/Gilroy Font/${weight}/${path}') format('${format}')`;
const generate = (weight, files) => `@font-face {
    font-family: 'Gilroy';
    font-weight: ${weight};
    font-display: swap;
    font-style: normal;
    src: ${files
      .map((file) => {
        const format = file.split(".")[1];
        const url = _url(file, weight);
        switch (format) {
          case "tft":
            return url("truetype");
          default:
            return url(format);
        }
      })
      .join(", ")}
}`;

export default async function () {
  if (!existsSync("./static")) {
    await mkdir("./static");
  }

  await rmdir(FONTS, { recursive: true });
  await mkdir(FONTS);
  const folders = await readdir(__dirname).then((_) =>
    _.filter((f) => !IGNORE.includes(f))
  );

  const content = await Promise.all(
    folders.map(async (folder) => {
      const files = await readdir(join(__dirname, folder));
      await mkdir(join(FONTS, folder));
      await Promise.all(
        files.map((file) =>
          readFile(join(__dirname, folder, file)).then((_) =>
            writeFile(join(FONTS, folder, file), _)
          )
        )
      );

      return generate(folder, files);
    })
  ).then((_) => _.join("\n"));

  await writeFile("./src/scss/_fonts.scss", content);
}
