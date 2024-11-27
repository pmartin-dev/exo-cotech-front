import fs from "fs";

function* getFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const path = `${dir}/${file}`;
    if (fs.statSync(path).isDirectory()) {
      yield* getFiles(path);
    } else {
      yield path;
    }
  }
}

function* getFilesSize(dir) {
  let size = 0;
  for (const file of getFiles(dir)) {
    const stats = fs.statSync(file);
    size += stats.size;
  }
  yield size;
}

// Bonus
function* getFilesExtension(dir) {
  const extensions = new Set();
  for (const file of getFiles(dir)) {
    const extension = file.split(".").pop();
    extensions.add(extension);
  }
  yield extensions;
}

const dir = "./assets";

const size = getFilesSize(dir).next().value;
console.log(`Size: ${size} bytes`);

const extensions = getFilesExtension(dir).next().value;
console.log(`Extensions: '${[...extensions].join("', '")}'`);
