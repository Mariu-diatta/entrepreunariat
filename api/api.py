from flask import Flask, request, json, Response, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS


app = Flask(__name__)

CORS(app)

mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'flask'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)


PARAM_REACT_CONN="RESULTAT"
SEQCE_CONNECT_REG="select * from user where   Nom_user=%s or Tel_user=%s or Mail_user=%s "
SEQCE_CONNECT="select * from user where  Passe_user =%s and Nom_user=%s"
SEQCE_CREAT ="insert into user values (%d, %s, %s, %s, %s, %s, %s, %s, %s, %s)"


def getUsers():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * from user")
    data = cursor.fetchall()
    return data

def getUser(name, passward):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * from user where name=%s and passward=%s", (name, passward))
    data = cursor.fetchone()
    return data


def createUser(nom, prenom, ville, genre, tel, mail, password, message):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("select Count(Cle) from user")
    conn.commit()
    count= (cursor.fetchall())[0][0]
    cursor.close()
    count=count+1
    conn = mysql.connect()
    cursor = conn.cursor()
    #print((count,nom,  prenom, ville, genre, tel, mail, password, message, "adhérant"))
    cursor.execute(SEQCE_CREAT, (count,nom,  prenom, ville, genre, tel, mail, password, message, "adhérant"))
    conn.commit()
    cursor.close()

#createUser( 'DIATTAA', 'Mariuss', 'Dakarr', 'Femmee', '+330745688657', 'mariusgdiatEta@gmail.com','Jules19934', 'message' )
#print(f"{createUser( 'DIATTAA2', 'Mariuss2', 'Dakarr2', 'Femmee', '074568865772', 'mariusgdiatE2ta@gmail.com','Jule2s19934', 'm2essage' )}")
#print(getUsers())

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


def checkUser(passe, name):
        try:
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(SEQCE_CONNECT, (passe, name))
            data = cursor.fetchone()
            conn.commit()
            cursor.close()
            if data==None:
                return False
            else: return True
        except:
            return False
        
def checkUserRegister(name, tel, mail):
        try:
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(SEQCE_CONNECT_REG, (name,tel,mail))
            data = cursor.fetchone()
            conn.commit()
            cursor.close()
            if data==None:
                return False
            else: return True
        except:
            return None


@app.route("/login" , methods=['GET', 'POST'])
def login():
    if request.method=='POST':
        try:
            request_data=json.loads(request.data)
            if checkUser(str(request_data['Passe_user']),str(request_data['Nom_user'])):
                data=json.dumps({PARAM_REACT_CONN: True})
            else: data= json.dumps({PARAM_REACT_CONN: False})
        except:
            data= json.dumps({PARAM_REACT_CONN: False})
        return data

@app.route("/registered" , methods=['GET', 'POST'])
def registered():
    if request.method=='POST':
        request_data=json.loads(request.data)
        data=checkUserRegister(str(request_data['Nom_user']),str(request_data['Tel_user']),str(request_data['Mail_user']))
        if data==False:
            try:
                createUser(request_data['Nom_user'], request_data['Prenom_user'], request_data['Ville_user'], request_data['Genre_user'], request_data['Tel_user'], request_data['Mail_user'], request_data['Passe_user'], request_data['Message_user'])
                print("Entrer à l'intérieur")
            except:
                print("pas bon")
        elif data==True: print("utilisateur existe, changer le nom")
        else: print("erreur de requête")
        return request_data
    else:
        return {'message': 'I\'m erreur!'}

@app.route("/<name>/<email>", methods=['GET', 'POST'])
def sendmail(name, email):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("select * from flask where Mail_user=%s and Nom_user =%s", (email,name, ))
    data = cursor.fetchone()
    conn.commit()
    cursor.close()
    if request.method=='Post':
        if data !=None:
            return "<p>La vie difficile!</p>"
        else: return "<p>email ou nom introuvable dans la base</p>"
    else:
        return "<p>La vie difficile!</p>"

if __name__ == '__main__':
    app.run(debug=True)