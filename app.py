from flask import Flask, render_template, send_from_directory, request
import os

app = Flask(__name__)

def log_ip_address(ip):
    try:
        with open('viewed.txt', 'r') as f:
            existing_ips = set(line.strip() for line in f if line.strip())
    except FileNotFoundError:
        existing_ips = set()
    
    if ip not in existing_ips:
        with open('viewed.txt', 'a') as f:
            f.write(ip + '\n')

@app.route('/')
def root():
    if request.environ.get('HTTP_X_FORWARDED_FOR') is None:
        client_ip = request.environ['REMOTE_ADDR']
    else:
        client_ip = request.environ['HTTP_X_FORWARDED_FOR'].split(',')[0].strip()
    log_ip_address(client_ip)
    
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