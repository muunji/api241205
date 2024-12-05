import mainPage from "./get-process.js";
import fs from "node:fs"

export default function onData  (req,res,body) {
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    console.log(body);

    if(body !== "") {
      fs.writeFile("minji.txt", body, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("파일 만들어짐");
      });
    }


    mainPage(res);
    res.end();
  });
}