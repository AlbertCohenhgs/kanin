from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='.')

# Rota principal para o arquivo HTML
@app.route('/')
def index():
    return send_from_directory(os.getcwd(), 'index.html')

# Rota para a página Kanin.html
@app.route('/kanin_q9wC9DdL71hwQPSwvm42fAk3hCpj6PwxastRJROcy7gnzUVrcrqyOv3rweeKFxVeJmKH3JQXNSadKeU9vDNSse8ykLByCvnJ08cfz5NX2dHsdaxYLGOXkBgT6laW3NQUeBrV2fWCXgOX')
def kanin():
    return send_from_directory(os.getcwd(), 'Kanin.html')

# Rota para arquivos CSS
@app.route('/styles.css')
def styles():
    return send_from_directory(os.getcwd(), 'styles.css')

# Rota para arquivos JS
@app.route('/script.js')
def script():
    return send_from_directory(os.getcwd(), 'script.js')

@app.route('/img/<path:filename>')
def serve_images(filename):
    return send_from_directory(os.path.join(os.getcwd(), 'img'), filename)

if __name__ == '__main__':
    app.run(debug=True)