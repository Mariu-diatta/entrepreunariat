
create table user(
  Cle int primary key NOT NULL ,
  Nom_user varchar(255) ,
  Prenom_user varchar(255),
  Ville_user varchar(255),
  Genre_user varchar(255),
  Tel_user   varchar(255),
  Mail_user varchar(255)  UNIQUE,
  Passe_user varchar(255)  UNIQUE ,
  Message_user varchar(255),
  statut_adh   varchar(255)
);

insert into user values (1, 'DIATTA', 'Marius', 'Dakar', 'Femme', '0745688657', 'mariusgdiatta@gmail.com','Jules1993', 'message', 'admin' );
