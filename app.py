from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def root():
    with open('text.txt', 'r', encoding='utf-8') as f:
        text_content = f.read()
    return render_template('index.html', text_content=text_content)

@app.route('/script.js')
def script():
    return send_from_directory('', 'script.js')

@app.route('/style.css')
def styleSecond():
    return send_from_directory('', 'style.css')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)