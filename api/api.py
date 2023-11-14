from flask import Flask, request, json
from flaskext.mysql import MySQL
import sms
import keys
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
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
    #keys.target_number=tel
    #code=body=tel[1:5]+"nb"
    #message=sms.client.messages.create  (
    #    body=code,
    #    from_=keys.twilio_number ,
    #    to=keys.target_number
    #)
    #code_validate=input("give the code in your phone")
    if  False: #code_validate != code:
        print("it's a mistake")
    else:
        #print(message.body)
        cursor.execute("INSERT INTO user(Nom_user, Prenom_user, Ville_user, Genre_user, Tel_user, Mail_user, Passe_user, Message_user) values(%s, %s, %s, %s, %s, %s, %s, %s)", (nom, prenom, ville, genre, tel, mail, password, message))
        sendConn().commit()

createUser( 'DIATTAA', 'Mariuss', 'Dakarr', 'Femmee', '+330745688657', 'mariusgdiatEta@gmail.com','Jules19934', 'message' )
#print(f"{createUser( 'DIATTAA2', 'Mariuss2', 'Dakarr2', 'Femmee', '074568865772', 'mariusgdiatE2ta@gmail.com','Jule2s19934', 'm2essage' )}")
#print(getUsers())

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

def verifUser(name, passe):
    cursor =sendConn().cursor()
    cursor.execute("select * from flask where Nom_user=%s and Passe_user =%s", (name,passe))
    data = cursor.fetchone()
    if data!=None:
        return True
    else: return False


@app.route("/login" , methods=['GET', 'POST'])
def login():
    reponse=None
    if request.method=='POST':
        request_data=json.loads(request.data)
        #cursor =sendConn().cursor()
        #data = cursor.fetchone()
        print( request_data['Nom_user'])
        reponse= json.jsonify({'resultat': False})
    else:
         reponse= "<p>La vie difficile!</p>"
    #verifUser(nom, prenom)
    return reponse

@app.route("/registered" , methods=['GET', 'POST'])
def registered():
    if request.method=='POST':
        request_data=json.loads(request.data)
        print(request_data)
        return request_data
    else:
        return {'message': 'I\'m erreur!'}

@app.route("/<name>/<email>", methods=['GET', 'POST'])
def sendmail(name, email):
    cursor =sendConn().cursor()
    cursor.execute("select * from flask where Mail_user=%s and Nom_user =%s", (email,name, ))
    data = cursor.fetchone()
    if request.method=='Post':
        if data !=None:
            return "<p>La vie difficile!</p>"
        else: return "<p>email ou nom introuvable dans la base</p>"
    else:
        return "<p>La vie difficile!</p>"

if __name__ == '__main__':
    app.run(debug=True)