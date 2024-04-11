import express from 'express';

var app = express();
var router = express.Router();

// Route pour créer (POST) une nouvelle ressource
router.post('/', (req, res) => {
    res.json({ message: 'Ressource créée' });
});

app.use('/api/resources', router);

var PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});