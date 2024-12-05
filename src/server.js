import http from "node:http";
import fs from "node:fs";
import path from "node:path";

import mainPage from "../src/server-action/get-process.js"
import onData from "../src/server-action/post-process.js"

const PORT = 3000;
const __dirname= path.resolve();

const server = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      if (req.url === "/") {
        mainPage(res);
      }
    }
    
    if (req.method === "POST") {
      let body = "";
      if (req.url === "/minji") {
        onData(req,res,body);
      }
      if (req.url === "/minseok") {
        onData(req,res,body);
      }
    }
  })
  .listen(PORT, () => {
    console.log("아래 서버 주소");
    console.log("http://localhost:3000");
  });