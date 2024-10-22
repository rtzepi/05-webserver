/**
 * --------------Ejercicio - Sirviendo mas de un contenido estático------
 * Este ejercicio se enfoca en validar contenido estático a servir en el PATH
 * de la carpeta public
 */
const express = require('express')
const app = express()
const port = 8080


app.use(express.static('public'))


app.get('/hola-mundo', (req, res) => {
res.send('Hola mundo en su respectiva ruta')
})


app.get('*', (req, res) => {
res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

