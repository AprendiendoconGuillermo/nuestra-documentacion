# Node js Express con MongoDB

:::warning
* Debe tener instalado [Node.js](https://nodejs.org/en/)
* Debe tener instalado [MongoDB](https://www.mongodb.com/try/download/community) y tener ya un usuario y base creada [click para la documentación](https://docs.mongodb.com/manual/tutorial/getting-started/)
:::

## 1. Creación del proyecto

* Cree una carpeta donde guste, esta contendrá el proyecto, por ejemplo:

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/1.png')" alt="Creació de la carpeta">
</div>

* Dentro de la carpeta abriremos el cmd, y nos debe salir la siguiente ruta, debemos darnos cuenta que esté el nombre de la carpeta creada en el punto anterior

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/2.png')" alt="Creació de la carpeta">
</div>

* Escribiremos el siguiente comando `mkdir` seguido del nombre de la carpeta que tendrá el proyecto, por ejemplo:

```sh
mkdir proyecto
```

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/3.png')" alt="Creació de la carpeta">
</div>

* Luego entraremos a la carpeta con `cd` seguido del nombre que se le dió en el punto anterior

```sh
cd proyecto
```

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/4.png')" alt="Creació de la carpeta">
</div>

* Estando dentro de nuestro proyecto, toca crear el archivo `package.json`, pero no te preocupes, esto se lo crea con el siguiente comando:

```sh
npm init
```

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/5.png')" alt="Creació de la carpeta">
</div>

* Luego nos solicitará algunos datos para configurar el proyecto, puedes darle enter omitiendo o puedes ingresar, como sea tu elección.

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/6.png')" alt="Creació de la carpeta">
</div>

Con esto ya tenemos creado el proyecto, para abrirlo basta escribir `code .` para que se nos abra **Visual Studio Code**

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/7.png')" alt="Creació de la carpeta">
</div>

Veremos únicamente el archivo `json` creado en puntos anteriores

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/8.png')" alt="Creació de la carpeta">
</div>

## 2. Instalación de dependencias

* **La primera dependencia** que instalaremos será `express`, y para ello podemos dijitar el siguiente comando en el cmd si aún no la has cerrado o abriendo el terminal en el **Visual Studio Code**

```sh
npm install express --save
```
`cmd`
<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/9.png')" alt="Creació de la carpeta">
</div>

`Visual Studio Code`
<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/10.png')" alt="Creació de la carpeta">
</div>

`instalación`
<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/11.png')" alt="Creació de la carpeta">
</div>

* Luego de la instalación veremos que nos aparece otro archivo `json` este tendrá las dependencias y la carpeta `node_modules` tendrá las carpetas de dichas dependencias

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/12.png')" alt="Creació de la carpeta">
</div>

* **La segunda dependencia** será la que nos permitirá conectarnos a la `mongoDb`, podemos instalar

    * [mongoose](https://www.npmjs.com/package/mongoose)
        ```sh
           npm install mongoose
        ```
    * [mongodb](https://www.npmjs.com/package/mongodb)
        ```sh
            npm install mongodb
        ```
    Elegiré la primera opción

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/13.png')" alt="Creació de la carpeta">
</div>

Y puedes observar en `package.json` la nueva dependencia

* **La tercera dependencia** será [`nodemon`](https://www.npmjs.com/package/nodemon) esta nos permitirá un ambiente de trabajo más fluido.

```sh
npm install nodemon
```

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/14.png')" alt="Creació de la carpeta">
</div>

Luego, debemos hacer un pequeño cambio al `package.json` agregando al `scripts` lo siguiente:

```js
"start": "nodemon app.js"
```
Y ese será el archivo que se reiniciará con cada cambio.

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/15.png')" alt="Creació de la carpeta">
</div>

* **La cuarta dependencia** será [`body-parser`](https://www.npmjs.com/package/body-parser) será para el middleware

```sh
npm install body-parser
```
<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/16.png')" alt="Creació de la carpeta">
</div>

## 3. Ejecución del proyecto

* Primero crearemos un archivo `app.js` debe tener nombre dado cuando se instaló `nodemon`.
* Luego dentro del archivo escribieremos lo siguiente

```js
// importamos express
const express = require('express');
// llamanos al función
const app = express();
// escuchamos el puerto 3000 y mostramos un mensaje por consola
app.listen(3000, () =>{
    console.log('Conectado');
});
```

Y para ejecutar, en el terminal escribiremos

```sh
npm start
```

Y, listo 🤓 hemos ejecutado nuestro proyecto pero aún falta para hacerlo `api-rest` 🥴

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/17.png')" alt="Creació de la carpeta">
</div>

## 4. Estructura del proyecto

La estructura será la siguiente

* **PROYECTO**
    * **node_modules**
    * **src**
        * app
        * config
        * controller
        * repository
        * service
        * exception
        * collection
        * route
    * **app.js**
    * **package-lock.json**
    * **package.json**

* **Dentro de la carpeta `config`** crearemos un archivo `server.js` que contrendrá las credenciales del servidor y el puerto que escuchará nuestra aplicación.

```js
/**
 * BD: mongodb 
 * user: aprendiendo
 * pass: 123456
 * server: localhost
 * port: 27017
 * bd: pruebas
 */
module.exports = {
    port : process.env.PORT || 3000, //puerto que escuchará nuestra aplicación
    mongodb : process.env.MONGODB || 'mongodb://aprendiendo:123456@localhost:27017/proyecto'
}
```

* **Dentro de la carpeta `exception`** creamos un archivo `exception.js` que contrendrá nuestras excepciones personalizadas, y estas son algunas, podemos tener más dependiendo la necesidad del proyecto.

```js
// excepción al crear una colección
const create = (res, payload) => {
    message(res, 201, payload, false);    
}
// excepción al enviar una petición errónea
const badRequest = (res, payload) => {
    message(res, 400, payload, true);
}
// excepción interna del proyecto 
const internalError = (res, payload) => {
    message(res, 500, payload, true);
}
// mensaje a devolver
function message(res, code, payload, flag){
    res.status(code).json({"error": flag, "payload": payload??null});
}
// exportamos las excepciones para poder importarlas en otros archivos
module.exports = {
    create,
    badRequest,
    internalError
}
```

* **Dentro de la carpeta `collection`** crearemos nuestros modelos o esquemas de nuestra base, por esta práctica crearemos un sólo esquema persona y el archivo será `personCollection.js`.

```js
// importamos mongoose para poder hacer uso del schema
const mongoose = require('mongoose');
// creamos nuestro esquema
const collectionPerson = mongoose.Schema({
    name: String,
    city: String
})
// creamos una constante de nuestro modelo para poderlo exportar
const Person = mongoose.model('Person', collectionPerson);
// exportamos nuestro esquema
module.exports = Person;
```

* **Dentro de la carpeta `repository`** crearemos el archivo `personRepository.js` y aquí haremos todo las setencias a nuestra base, es decir, es aquí donde guardaremos, buscaremos, actualizaremos y eliminaremos nuestros documentos.

```js
// importamos nuestro esquema
const Person = require('../collection/personCollection.js');
// el método es async porque devuelve una promesa
const guardar = async (req) => {
    const p =  new Person(req.body);    
    return await p.save();
}

const buscar = async() =>{
    return await Person.find();
}
const actualizar = async(req) =>{
    return await Person.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        {
            $set:
            {
                name : req.body.name,
                city : req.body.city
            }
        }
    );
}
const eliminar = async(req) =>{
    return await Person.findByIdAndDelete(
        {
            _id: req.params.id
        }
    );
}
// exporamos nuestro método para poder importarlo en nuestro servicio
module.exports = {
    guardar,
    buscar,
    actualizar,
    eliminar
}
```

* **Dentro de la carpeta `service`** crearemos un archivo `personService.js` es la parte media entre el controllador y repositorio, y es aquí donde se valida los datos, lanza excepciones y demás.

```js
// importamos nuestro repositorio
const repository = require('../repository/personRepository.js');
// importamos nuestras excepciones
const exception = require('../exception/exception.js');
// esta función recibe el requerimiento (body) y respuesta (http)
function guardar(req, res){  
    try {                
        if(req.body.name == "" || req.body.name == null || req.body.city == "" || req.body.city == null)
            // exception si los datos no son los esperados
           exception.badRequest(res, "Ingrese los datos");            
        else{
            repository.guardar(req)
            .then(doc => {
                // exception de creación
                exception.success(res, "Datos ingresados");
            })
            .catch(err => {
                // exception si hubo algo inesperado con la solicitud
                exception.badRequest(res, err);
            });
        }            
    } catch (error) {
        // exception interna del programa
        exception.internalError(res, "Problema inesperado");
    }
}
// esta función recibe el requerimiento (body) y respuesta (http)
function buscar(res){       
    try {                       
        repository.buscar()
        .then(doc => {
            // exception de creación            
            if(doc.length > 0)
                exception.found(res, doc);
            else
                exception.notFound(res, "No hay documentos que mostrar");
        })
        .catch(err => {
            // exception si hubo algo inesperado con la solicitud
            exception.badRequest(res, err);
        });                 
    } catch (error) {
        // exception interna del programa
        exception.internalError(res, "Problema inesperado");
    }
}
// esta función recibe el requerimiento (body) y respuesta (http)
function actualizar(req, res){       
    try {   
        if(req.body.name == "" || req.body.name == null || req.body.city == "" || req.body.city == null)
            // exception si los datos no son los esperados
           exception.badRequest(res, "Ingrese los datos");            
        else{                                
            repository.actualizar(req)
            .then(doc => {
                // exception de actualización  
                if(doc != null)
                    exception.success(res, "Documento actualizado");
                else
                    exception.notFound(res, "No existe el documento");               
            })
            .catch(err => {
                // exception si hubo algo inesperado con la solicitud
                exception.badRequest(res, "El id tiene un formato erróneo");
            }); 
        }                
    } catch (error) {
        // exception interna del programa
        exception.internalError(res, "Problema inesperado");
    }
}
// esta función recibe el requerimiento (body) y respuesta (http)
function eliminar(req, res){       
    try {   
        if(req.params.id == "" || req.params.id == null )
            // exception si los datos no son los esperados
           exception.badRequest(res, "Ingrese los datos");            
        else{                                
            repository.eliminar(req)
            .then(doc => {
                // exception de creación      
                if(doc != null)
                    exception.success(res, "Documento eliminado");
                else
                    exception.notFound(res, "No existe el documento");
                
            })
            .catch(err => {
                // exception si hubo algo inesperado con la solicitud
                exception.badRequest(res, "El id tiene un formato erróneo");
            }); 
        }                
    } catch (error) {
        // exception interna del programa
        exception.internalError(res, "Problema inesperado");
    }
}


// exportamos el método para poderlo importar en el controllador
module.exports = {
    guardar,
    buscar,
    actualizar,
    eliminar
}
```

* **Dentro de la carpeta `controller`** crearemos un archivo `personController.js`, aquí llamaremos a todos los métodos de nuestro servicio persona.

```js
// importamos nuestro servicio
const service = require('../service/personService.js');
// importamos nuestras excepciones
const exception = require('../exception/exception.js');
// método insertar
function insert(req, res){    
    try {     
        // llamamos a nuestro método
        service.guardar(req, res);        
    } catch (error) {
        // exception inesperada
        exception.internalError(res, "Problema inesperado");
    }
}

function select(req, res){
    try {     
        // llamamos a nuestro método
        service.buscar(res);        
    } catch (error) {
        // exception inesperada
        exception.internalError(res, "Problema inesperado");
    }
}

function update(req, res){
    try {     
        // llamamos a nuestro método
        service.actualizar(req, res);        
    } catch (error) {
        // exception inesperada
        exception.internalError(res, "Problema inesperado");
    }
}

function borrar(req, res){
    try {     
        // llamamos a nuestro método
        service.eliminar(req, res);        
    } catch (error) {
        // exception inesperada
        exception.internalError(res, "Problema inesperado");
    }
}

module.exports = {
    insert,
    select,
    update,
    borrar
}
```

* **Dentro de la carpeta `route`** crearemos un archivo `personRoute.js` que contrendrá las rutas de nuestros endpoints de persona.

```js
// importamos express
const express = require('express');
// hacemos uso de la función Router()
const api = express.Router();
// importamos nuestro controlador
const personCroller = require('../controller/personController.js');
// hacemos uso de los métodos http
api.post('/add',personCroller.insert);
api.get('/select', personCroller.select);
api.put('/update/:id/' , personCroller.update);
api.delete('/delete/:id',personCroller.borrar);
// exportamos api
module.exports = api;
```

* **Dentro de la carpeta `app`** crearemos un archivo `app.js` que contrendrá o hará de almacenar todos los accesos a las rutas de nuestra `api-rest`

```js
// importamos express
const express = require('express');
// importamos body-parser
const bodyParser = require('body-parser');
// llamanos al función
const app = express();
// importamos nuestro archivo que contiene las rutas o endpoints de persona
const api = require('../route/personRoute.js');

// hacemos uso de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// hacemos uso de nuestra ruta de persona
app.use('/api', api);
/* si tuvieramos más rutas de otras collections haríamos todo como se hiso con persona
 * y aquí haríamos udo de la ruta por ejemplo
 * app.use('/api', api2);
 */
// exportamos app para llamarlo en nuestro archivo app.js que está en la raíz de nuestro proyecto
module.exports = app;
```

Teniendo lista la estructura con sus archivos correspondientes, ahora toca modificar el archivo `app.js` que está en la raíz del proyecto para acceder a la base y modificar el escuchar nuestra aplicación.

```js
// importamos mongoose para la base
const mongoose = require('mongoose');
// importamos app
const personApp = require('./src/app/app.js');
// importamos la configuración del servidor
const server = require('./src/config/server.js');
// nos conectamos al la base
mongoose.connect(server.mongodb);
//creamos una constante de la connection
const connection = mongoose.connection;
// mostramos un console si ha fue exitosa
connection.once('open', () => {
    console.log('MongoDb success');
});
// mostramos un console si ha fue errónea
connection.on('error', (err) => {
    console.log('Echale agua para que encienda', err.message);
});
// escuchamos el puerto
personApp.listen(server.port, () =>{
    console.log('Conectado');
});
```

Proyecto terminado

<div style="text-align:center;">
<img :src="$withBase('/img/api-nodejs/18.png')" alt="Creació de la carpeta">
</div>

[Dame click para ver la ejecución](/nuestra-documentacion/pruebas/test-api-nodejs)  
[Dame click para descargar el proyecto](https://mega.nz/folder/deQVDSAS#ZICCZd7HPfjZvPgofCXcKg)