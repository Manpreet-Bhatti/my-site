import { readdir } from "fs/promises";
import { join } from "path";
const IGNORE = ["index.js"](async () => {
  const files = await readdir(__dirname).then((_) =>
    _.filter((f) => !IGNORE.includes(f))
  );

  try {
    await Promise.all(
      files.map(async (file) => {
        await require(join(__dirname, file));
      })
    );
  } catch (err) {
    console.error("Error in genfiles");
  }
});
