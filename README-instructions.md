## 8v. Instalación y Configuración de entorno de desarrollo
Paso a paso
En terminal crear capeta: `mkdir NombreDeCarpeta`.
Inicializar Repositorio (local) en Git : `git init`.
Inicializar proyecto `npm init -y`. La `-y` significa que se preconfigurará este proyecto y lo va crear automaticamente.
Abrimos editor de codigo con `code .`.

Armar estructura del proyecto:
Establecer donde va vivir el codigo: crear carpeta `src` y dentro de ella `index.js`
Contenedor de todos los archivos a publicar cuando se mande a producción: `public` y dentro de ella `index.html` que será utilizado para publicarse cuando llegue el momento.
Contenedor de principales archivos del proyecto: `components` 
Todo esto es lo básico para desarrollar un proyecto.

Luego, corremos el comando: `npm install react-dom` que instalará react y react DOM y con ello aparecen archivos como `package-lock.json`el cual permite manejar el vesionado de todos los paquetes que estamos instalando junto a las dependencias (poco a poco se irá actualizando con la informacion necesaria para vivir) y la carpeta `node_modules` donde estan todos los paquetes y dependencias de los elementos que se iran instalando. Tenemos `package.json` que contendra la historia de los elementos instalados, configuaraciones, scripts y como reconocer nuestro documento.

## 9v. Agregando compatibilidad con todos los navegadores usando Babel
Aprenderemos a crear nuestros primeros componentes y utilizar nuestro punto de entrada que es `index.js` e implementar [Babel](https://babeljs.io/) que es una herramienta para crear JS modermno a JS compatible con todos los navegadores. Nos va a ayudar a hacer cosas con las nuevas tecnologías que se añaden a JS.

Acto seguido realzar las configuraciones pertinentes en `/public/index.html`, `/src/index.js` y creacion de un componente `/components/Component.jsx`.

### Instalación de Babel

Instalacion de Babel para solo como dependencia para desarrollo `npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save -dev`.

**`@babel/core`:** Que incluye todas las herramientas para transformar a código moderno.

**`babel-loader`:** Se encarga de trabajar con WebPack.

**`@babel/preset-env @babel/preset-react`:** Los preset que nos ayudan a entender y transformar nuestro codigo de JS y React.

**`--save-dev`:** Para que sea guardado solo como dependecia de desarrollo.

Configuración de Babel (Creamos el archivo `.babelrc`) y le ponemos:

~~~ {
    "presets": [
        "@babel/preset-env", //TrabajAr con ES5 Y 6
        "@babel/preset-react" // Trabajar con JS Y React
    ]
}
~~~


## 10v. Webpack: Empaquetando nuestros módulos
Vamos a instalar y configurar WebPack para entorno de desarrollo o producción

Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:
`npm install webpack webpack-cli html-webpack-plugin html-loader  --save -dev`

Creamos el archivo maestro de **Webpack** donde va vivir toda la configuración que vamos a utilizar para nuestro proyecto `webpack.config.js`.

En `package.json` agregamos el script que va compilar nuestro proyecto `"build": "webpack--mode production"`.

Ir a terminal y correr el primer compilado de nuestro proyecto con `npm run build` y producto de ello se general archivos como `bundle.js` (contiene todo el proyecto compilado con todo lo que necesita) e `index.html` (con una ligera modificación) dentro de la carpeta `dist`

## 11v. Webpack Dev Server: Reporte de errores y Cambios en tiempo real.

Uno de los recursos más importantes de desarrollo en react es probar lo que estamos construyendo para ello vamos a terminal y ejecutamos `npm install --save-dev webpack-dev-server` que nos permitira un localserver, acto seguido vamos a `package.json` y agregamos el script `"start": "webpack-dev-server --open --mode development"`, en este punto ya podemos iniciar nuestro proyecto con `npm run start`

## 12v. Estilos con SASS

Para instalarlo vamos a terminal y ejecutamos `npm install mini-css-extract-plugin css-loader node-sass sass-loader --save-dev`, luego vamos a `webpack.config.js` y agregamos la regla para identificar los archivos CSS. Tambien se creará la carpeta para los CSS.

## 13v. Configuración final: ESLint y Git Ignore

Haremos la instalacion con `npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`.

Vamos a la raiz de nuestro proyecto y creamos el archivo **`.eslintrc`** en el cual añadimos la configuración de este [gist](https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a) que contine reglas, plugins, configuraciones (cada una de estas lineas tiene un porqué y pueden encontrarse en el navegador). A esta altura nuestro proyecto está listo para trabajar en eslint.

Pasaremos a agregar el archivo `.gitignore` que lo encontraremos en [gist .gitignore](https://gist.github.com/gndx/747a8913d12e96ff8374e2125efde544) el cual contine la propuesta de platzi de lo que debe contener. Maás tarde se instalará `npm install file-loader --save-dev` el cual permite el manejo de imagenes en webpack.


# REACT ROUTER Y REDUX

Instaleremos la libreria de router con `npm install react-router-dom`.
Dentro de src se crea `routes` que es la carpeta que va manejar las rutas de nuestro proyecto y dentro de ella un archivo llamado `App.js` en el que van a vivir la rutas.

Dentro de `App.js` importaremos **`BrowserRouter`** el cual encapsulara todos los elementos de navegación que se añadiran en nuestro proyecto.

## 9v. Qué es Redux

Redux es una librería creada por Dan Abramov y escrita en JavaScript, basada en la arquitectura Flux (propuesta por facebook) e inspirada en un lenguaje funcional, esta se basa en 3 principios fundamentales:

1. Solamente hay una fuente de la verdad.
Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.

2. El estado es de solo lectura.
La única forma de modificar el estado es emitiendo un acción, este objeto describe lo que va a ocurrir.

3. Solamente podemos utilizar funciones puras.
Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.

Nuestra UI va a activar una action, esta action va a ejecutar un reducer para modificar la información del store, y al actualizarse el store la UI se va a modificar.

Con Redux podremos manejar el flujo de la información de nuestra aplicación.

## 10t. ¿Qué es Redux? Profundizando en la herramienta

Redux nos permite tener un contenedor predecible del estado en aplicaciones creadas con JavaScript, Nos ayuda a escribir aplicaciones que se comportan de una manera consistente, Esto significa que podemos utilizar esta lógica en aplicaciones del lado del cliente, trabajar del lado del servidor o crear aplicaciones para dispositivos móviles.

Uno de los principales uso que tiene Redux es con React pero puede ser implementado en cualquier librería o proyecto que este construido con JavaScript, lo cual incluye a Angular, Vue o algún otro framework o librería.

Redux nace de la arquitectura Flux, tomando inspiración del lenguaje funcional Elm y es creado por Dan Abramov y Andrew Clark en el 2015, Hoy en día es una de las librerías más utilizadas para el manejo del flujo de la información en aplicaciones.

Una de las principales motivaciones para crear Redux nace en resolver un problema y era el manejo del estado y el flujo de nuestras aplicaciones creadas en JavaScript. Redux propone una forma de manejar el estado donde podamos controlar cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación, teniendo en cuenta esto, Redux intenta de predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuando y como pueden ser ejecutadas las actualizaciones en nuestras aplicaciones. 

**Lecturas complementarias:**
[Redux NO está muerto](https://platzi.com/blog/redux-no-esta-muerto/)


## 11v. Instalación de Redux

instalacion dependencias para poder trabajar con Redux: `npm install redux react-redux --save` si al terminar instalación se dan vulnerabilidades se puede ejecutar `npm audit fix`.
El paquete react-redux nos proporciona un Provider para poder encapsular nuestros componentes por medio de un connect para poder transmitir la información que necesitemos del store a cada componente.
Dentro de nuestro proyecto vamos a crear una carpeta para nuestros actions y otra para los reducers que utilizaremos en Redux.

## 12v. Creando el Store de Redux

Para crear un Store necesitamos llamar a la función createStore del paquete de redux pasándole los parámetros del reducer y initialState.

Para conectar un componente a Redux vamos a necesitar importar connect de react-redux, connect va a aceptar dos parámetros:

mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.

## 13v. Creando los reducers

Un action de Redux va a contener dos elementos:

type: para indicar la acción que se va a ejecutar.
payload: es la información que estamos mandando al reducer.
Dentro de los reducers usaremos un switch para separar la lógica por cada tipo de acción que tendremos en Redux.














`````````````````````````````````````