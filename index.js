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

  let scrapeStuff = scrapePage(req.body.searchUrl);

  scrapeStuff.then(function (result) {
    console.log(result);
    //getArticles(result);
    res.send({msg: result})
  });


});

app.listen(3000, () => {
  console.log("Server running o port 3000..");
});
