import http from "node:http";
import fs from "node:fs";
import path from "node:path";

export default function mainPage (res) {
  const __dirname = path.resolve();

  const getIndex = fs.readFileSync(
    path.join(__dirname, "/public/index.html"),
    "utf-8",
    () => {}
  );
  res.writeHead(200, { "content-type": "text/html" });
  res.write(getIndex);
  res.end();
}