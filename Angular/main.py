from flask import Flask, request, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        return 'Hello, World! (GET)'
    elif request.method == 'POST':
        return 'Hello, Swati! '

@app.route('/nlp')
def NLP():
    return'NLP is a part of Computer Science and Artificial Intelligence which deals with human languages.'
    

if __name__ == '__main__':
    app.run()


