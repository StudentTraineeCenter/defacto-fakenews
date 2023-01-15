import express from "express";
import bodyParser from "body-parser";
import * as url from "url";
import {scrapePage} from "./scrapePage.cjs";
import axios from 'axios';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.static(__dirname + "/src/"));

const jsonParser = bodyParser.json({ limit: "50mb" });

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/api/process", (req, res) => {

  if(!isValidHttpUrl(req.body.searchUrl))
  {
    res.send({msg: "Chyba! Nesprávná url"})
    return;
  }
  let scrapeStuff = scrapePage(req.body.searchUrl);

  scrapeStuff.then(function (result) {
    console.log(result);
    res.send({msg: result})
  });


});

app.listen(3000, () => {
  console.log("Server running o port 3000..");
});

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
