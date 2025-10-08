from flask import Flask, render_template, send_from_directory, request, url_for
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
    
    return render_template('index.html')


@app.route('/script.js')
def script():
    return send_from_directory('', 'script.js')

@app.route('/style.css')
def style():
    return send_from_directory('', 'style.css')

@app.route('/images/<filename>')
def images(filename):
    return send_from_directory('images', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)