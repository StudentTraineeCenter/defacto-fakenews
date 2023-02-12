# Defacto - Detekce falešných novinek 👋
Projekt, ve kterém je umělá inteligence využívána k rozlišení falešných a pravdivých informací. 📰

## Začátek 🖥️
1. Naklonujte repozitář na svůj lokální počítač pomocí `git clone` a odkazu z githubu.
2. Otevřete adresář a spusťte soubor `install.bat`. Tím se nainstalují všechny potřebné knihovny a také se spustí program.
A je hotovo. Váš webový server a python api běží.

## Jak to funguje
![Obrázek](https://raw.githubusercontent.com/StudentTraineeCenter/defacto-fakenews/master/example.png)
Na tomto jednoduchém schématu vidíte, jak celý program funguje.
Nejprve obdržíme adresu URL na webovém serveru. Vezmeme tuto url adresu a předáme ji souboru `scrapePage.cjs`. Funkce tohoto programu je popsána níže v tomto readme.
Poté odešleme post požadavek do python api, který obsahuje text ze stránky. Python API získá tento text a Ai model vyhodnotí pravdivost tohoto textu. Rozhodnutí odešleme zpět na webový server a zobrazí se na frontendu.

## Python model ⛵
K dispozici je Python model AI, natrénovaný na datasetu z **kaggle**. Používá **Sklearn** a knihovnu **Pandas 🐼**. Používáme funkci *classify_text*, kterou následně exportujeme do souboru *server.py*. V serveru používáme knihovnu **flask** pro vlastní API. API bere text jako tělo a vrací true/false na základě predikce o zprávě. Použitá datová sada pochází z projektu **Kaggle**. Přesnost tohoto Ai modelu je 0,92230, což znamená, že je natrénovaný na 92,23% stejný jako data, která jsme poskytli.

## Scraping pomocí Javascriptu 🌥️
Použili jsme javascriptovou knihovnu s názvem **Pupeteer** pro načtení prvku **h1** z dané webové stránky, poté program vrátí výsledek a odešle jej našemu API Pythonu, který rozhodne, zda informace odpovídá skutečnosti, nebo je jen výmyslem.

## Design 🌍
Pro naši aplikaci jsme vytvořili jednoduchý, ale stylový frontend, který jsme doplnili černobílým designem.

| Barva | Hex
| ----------------- | ------------------------------------------------------------------ |
| Starry night	 | ![#121212](https://via.placeholder.com/10/121212?text=+) #121212 |
| Midnight | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Snowy white	 | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| Elephant tusk	 | ![#CFCFCF](https://via.placeholder.com/10/CFCFCF?text=+) #CFCFCF |

| Písmo | Odkaz |
| ----------------- | ------------------------------------------------------------------ |
| Consolas | https://en.wikipedia.org/wiki/Consolas |

## Zpracování URL 🤦♂️
Přidali jsme jednoduché řešení pro kontrolu, zda je vstupní adresa **platná** url.
![togif](https://user-images.githubusercontent.com/81298182/215260269-3b2a6057-8374-4ca6-ba7f-d44a323aede2.gif)
