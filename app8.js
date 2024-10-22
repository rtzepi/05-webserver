// ----------- Ejercicio - Servir contenido estático ------
// El ejercicio va enfocado a sustituir la impresión de mensajes en las rutas por
// contenido estático, en esta caso páginas web.

const express = require('express');
const app = express();
const port = 8080;


app.use(express.static('public')); 


app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
