from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='.')

# Rota principal para o arquivo HTML
@app.route('/')
def index():
    return send_from_directory(os.getcwd(), 'index.html')

# Rota para arquivos CSS
@app.route('/styles.css')
def styles():
    return send_from_directory(os.getcwd(), 'styles.css')

# Rota para arquivos JS
@app.route('/script.js')
def script():
    return send_from_directory(os.getcwd(), 'script.js')

if __name__ == '__main__':
    app.run(debug=True)