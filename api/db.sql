
create table user(
  Cle int NOT NULL AUTO_INCREMENT,
  Nom_user varchar(255) ,
  Prenom_user varchar(255),
  Ville_user varchar(255),
  Genre_user varchar(255),
  Tel_user   varchar(255),
  Mail_user varchar(255)  UNIQUE,
  Passe_user varchar(255)  UNIQUE ,
  Message_user varchar(255),
  statut_adh   varchar(255) DEFAULT 'adhérant',
  primary key(Cle)
);

insert into user values (1, "DIATTA", "Marius", "Dakar", "Femme", "0745688657", "mariusgdiatta@gmail.com","Jules1993", "message", 'admin' );
insert into user values (2, "DIATTA1", "Marius1", "Dakar", "Homme", "0755688657", "mariusgdiatta1@gmail.com","Jules19931", "message1", 'adhérant');