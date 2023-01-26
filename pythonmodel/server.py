from flask import Flask, request
from main import classify_text
app = Flask(__name__)

@app.route('/classify', methods=['POST'])
def classify():
    text = request.json['text']
    result = classify_text(text)
    return {'prediction': result}

if __name__ == '__main__':
    app.run(debug=True)
