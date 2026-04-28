const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1> ¡Hola DevOps, Este es mi primer Despliegue Continuo (CD) automatizado.</h1>');
});

app.listen(PORT, () => console.log('Servidor corriendo en puerto 3000'));
