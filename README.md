# Defacto - Fake news detection
A project where artificial intelligence is used to distinguish between fake and real information.

## Python model
There is python Ai model, trained on dataset from kaggle. It uses sklearn and pandas library. We use function classify_text, which we then export to file server.py. In server we use flask library for own API. API takes text as body and returns true/false based on prediction about the news. Dataset used is from some Kaggle project. 
