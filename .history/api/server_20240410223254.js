import express from 'express';

var app = express();
var router = express.Router();

// Route pour créer (POST) une nouvelle ressource
router.post('/', (req, res) => {
res.json({ message: 'Ressource créée' });
});

 