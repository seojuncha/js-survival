/**
 * Writable
 * Readable
 * Duplex
 * Transform
 */
const fs = require("fs");

const stream = require("stream");

const filePath = "io.js";
const readFileStream = fs.createReadStream(filePath, {
  encoding: "utf8",
});
readFileStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data\n`);
  console.log(chunk);
});
