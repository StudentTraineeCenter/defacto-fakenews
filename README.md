# Defacto - Fake news detection 👋
A project where artificial intelligence is used to distinguish between fake and real information. 📰

## Getting started 🖥️
1. Clone repo to your local machine with `git clone` and link from github
2. Open directory and start `install.bat` file. This will install all necessary libraries and also will start a program
And it is done. Your web server and python api is running.

## How it works
![Image](https://raw.githubusercontent.com/StudentTraineeCenter/defacto-fakenews/master/example.png)
In this simple diagram you can see how the whole program works.
First, we receive URL on web server. We take this url and pass it to `scrapePage.cjs. Function of this program is described deeper in this readme.
Then, we send post request to python api containing scraped text as body. Python API gets this text and calls Ai model to decide truthfulness of text. When decision is made, we send it back to web server and it shows on frontend.

## Python model ⛵
There is a python AI model, trained on a dataset from **kaggle**. It uses **Sklearn** and **Pandas 🐼 library**. We use function *classify_text*, which we then export to file *server.py*. In server we use **flask** library for own API. API takes text as body and returns true/false based on prediction about the news. Dataset used is from some **Kaggle** project. 

## Scraping with Javascript 🌥️
We used a javascript library called **Pupeteer** to fetch an **h1** element from a given website, after doing so, the program returns the result and sends it over to our Python API that decides whether the information is according to reality or is but a fabrication.

## Design language 🌍
We created a simple, yet stylish frontend for our application, adding a monochrome design to it.

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Starry night | ![#121212](https://via.placeholder.com/10/121212?text=+) #121212 |
| Midnight | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Snowy white | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| Elephant tusk | ![#CFCFCF](https://via.placeholder.com/10/CFCFCF?text=+) #CFCFCF |

| Font             | Link                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Consolas | https://en.wikipedia.org/wiki/Consolas |

## URL Handling 🤦‍♂️
We added a simple solution, to check, whether the input is a **valid** url.
![togif](https://user-images.githubusercontent.com/81298182/215260269-3b2a6057-8374-4ca6-ba7f-d44a323aede2.gif)
