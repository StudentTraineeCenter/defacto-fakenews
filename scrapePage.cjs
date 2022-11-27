const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function scrapePage(pageUrl) {
  const browser = await puppeteer.launch(); 
  const page = await browser.newPage(); 
  await page.goto(
    pageUrl
  ); 
  const headers = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("h1")).map((x) => x.innerText);
  });
  const pageTitle = await page.title();
  //console.log(pageTitle);
  //console.log(headers);
  await browser.close();
  return headers;
}

module.exports = {scrapePage};