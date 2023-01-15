from flask import Flask, request
from main import classify_text
app = Flask(__name__)

@app.route('/classify', methods=['POST'])
def classify():
    # Získáme text z body requestu
    text = request.json['text']
    # Voláme funkci z souboru main
    result = classify_text(text)
    # Vrátíme výsledek
    return {'result': result}

if __name__ == '__main__':
    app.run(debug=True)