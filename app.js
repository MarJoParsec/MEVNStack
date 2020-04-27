const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const history = require('connect-history-api-fallback')
/* Server */

app.get('/', function(req, res) {
    res.send('Hello World');
});
/* La aplicación inicia un servidor y escucha las conexiones en el puerto 3000. 
La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) 
o a la ruta raíz. Para cada vía de acceso diferente, responderá con un error 404 Not Found.
 
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
*/
// Asignar puerto automáticamente:
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port' + app.get('puerto'));
})


/* Middleware */

// Nos sirve para pintar las peticiones HTTP request que se solicitan a nuestro aplicación.
app.use(morgan('tiny'));
// Para realizar solicitudes de un servidor externo e impedir el bloqueo por CORS
app.use(cors());
// others middleware available with express > v4.16
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*STATIC middleware para Vue.js router modo history
Incorporaremos un directorio público, por lo tanto puedes crear una carpeta public
con un archivo index.html para mostrar un resultado, 
de igual forma configuraremos nuestro archivo app.js */
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));