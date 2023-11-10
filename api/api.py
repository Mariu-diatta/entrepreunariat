from flask import Flask
from flask import request
from flaskext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'flask'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

def sendConn():
    mysql.init_app(app)
    conn = mysql.connect()
    return conn

def allData():
    cursor =sendConn().cursor()
    cursor.execute("SELECT * from user")
    data = cursor.fetchone()
    return data

print(f"{allData()}")


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/login" , methods=['GET', 'POST'])
def login():
    if request.method=='GET':
        response = {'message': 'Hello, World!'}
        return response 
    else:
        return "<p>La vie difficile!</p>"

@app.route("/registered" , methods=['GET', 'POST'])
def registered():
    if request.method=='POST':
        response = {'message': 'I\'m connected!'}
        return response 
    else:
        return {'message': 'I\'m erreur!'}

@app.route("/<name>/<email>", methods=['GET', 'POST'])
def sendmail(name, email):
    if request.method=='Post':
        return "<p>La vie difficile!</p>"
    else:
        return "<p>La vie difficile!</p>"

if __name__ == '__main__':
    app.run(debug=True)