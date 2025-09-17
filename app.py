from flask import Flask, render_template, send_from_directory
from waitress import serve

app = Flask(__name__)

@app.route('/')
def root():
    return send_from_directory('', 'index.html')

@app.route('/script.js')
def script():
    return send_from_directory('', 'script.js')

@app.route('/style.css')
def styleSecond():
    return send_from_directory('', 'style.css')

if __name__ == '__main__':
    serve(app, host='0.0.0.0', port=80)