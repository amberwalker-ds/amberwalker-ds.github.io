from livereload import Server
import subprocess

def generate_site():
    subprocess.run(['python3', 'makesite.py'])

server = Server()
server.watch('content/*', generate_site)
server.watch('layout/*', generate_site)
server.serve(root='_site', port=5500)
