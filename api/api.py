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

def getUsers():
    cursor =sendConn().cursor()
    cursor.execute("SELECT * from user")
    data = cursor.fetchall()
    return data

def getUser(name, passward):
    cursor =sendConn().cursor()
    cursor.execute("SELECT * from user where name=%s and passward=%s", (name, passward))
    data = cursor.fetchone()
    return data

def createUser(nom, prenom, ville, genre, tel, mail, password, message):
    cursor =sendConn().cursor()
    cursor.execute("INSERT INTO user(Nom_user, Prenom_user, Ville_user, Genre_user, Tel_user, Mail_user, Passe_user, Message_user) values(%s, %s, %s, %s, %s, %s, %s, %s)", (nom, prenom, ville, genre, tel, mail, password, message))
    sendConn().commit()

print(f"{createUser( 'DIATTAA', 'Mariuss', 'Dakarr', 'Femmee', '07456886577', 'mariusgdiatEta@gmail.com','Jules19934', 'message' )}")
#print(f"{createUser( 'DIATTAA2', 'Mariuss2', 'Dakarr2', 'Femmee', '074568865772', 'mariusgdiatE2ta@gmail.com','Jule2s19934', 'm2essage' )}")
print(getUsers())

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