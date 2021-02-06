# Nodepop. Práctica de Node.Js/Express/ MongoDB

Desarrollo de una API que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop.

## Crear una aplicación de express

```
npx express-generator --ejs Nodepop
```

## Dentro de la carpeta Nodepop ejecutamos
```
npm install
```

## Instalación de nodemon

```
npm i nodemon
```

## Instalación de cross-env

```
npm i cross-env
```

## Inicializar la BBDD con MongoDB

```
npm run installDB
```
## La BBDD carga el archivo /data/anuncios.json

"anuncios": [
            {
                "nombre":   "Bicicleta",
                "venta":   true,
                "precio":   230.15,
                "foto":   "/images/bike.png",        
                "tags":   ["lifestyle", "motor"]
            },
            {
                "nombre":   "iPhone 3GS",
                "venta":    false,
                "precio":   50.00,
                "foto":   "/images/iphone.png",  
                "tags":   ["lifestyle", "mobile"]  
            },
            {
                "nombre":   "Patinete electrico",
                "venta":   false,
                "precio":   90.00,
                "foto":   "/images/scooter.png",  
                "tags":   [ "motor"]  
            },
            {
                "nombre":   "Portatil",
                "venta":   true,
                "precio":   450.00,
                "foto":   "/images/portatil.png",  
                "tags":   [ "work"]  
            },
        
            {
                "nombre":   "Xiaomi redmi 9",
                "venta":   true,
                "precio":   239.00,
                "foto":   "/images/xiaomi.png",  
                "tags":   ["lifestyle", "mobile"]  
            },
            {
                "nombre":   "Ipad",
                "venta":   false,
                "precio":   350.00,
                "foto":   "/images/ipad.png",  
                "tags":   ["lifestyle", "work"]  
            }
        
]


## Formas de arrancar 

* En desarrollo
```
npm run dev
```

* En producción

```
npm run start
```

## Peticiones GET ('/')

Nos muestra todos los anuncios

**Filtros**

* nombre: Muestra el nombre del artículo que empiece por el dato buscado.

* tag: Se visualizan los anuncios que contengan ese tag.

* precio: Filtra por rango de precio. Ejemplos:
    -10 Menores a 10.
    10- Mayores a 10.
    10-50 Entre 10 y 50.
    50 = Igual a 50.

* venta: true / false.

* fields: El anuncio mostrará únicamente los campos seleccionados.

* limit: Lista de anuncios con posibilidad de paginación.

* skip: Nos devuelve los x primeros resultados.

* sort: Ordenamos por el campo seleccionado.


## Peticiones GET ('/apiv1/anuncios')

Se muestra la API

**Método POST**

* Para crear un nuevo anuncio a través de POSTMAN. Se puede utilizar de prueba la imagen /images/deportivos.jpg

## Templates ejs

* Index.html: Se muestran los artículos

* error.html: Nos muestra un error.

* /partials/header.html: Los datos correspondientes al header

* /partials/footer.html: Los datos correspondientes al header

### Desarrollado por:

Jorge Salazar.