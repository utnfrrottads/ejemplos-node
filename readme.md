# Ejemplos básicos de NodeJS

## Detalle
En la carpeta ej01 pueden encontrar ejemplos de callback, iterar sobre arrays, leer archivos y hacer un web server básico.

En la carpeta ej02 van a ver ejemplos simples de acceso a base de datos con una conexión y un pool.

## Tarea

### Ejercicio 1
Crear un web server que ante un request registre las urls al final de un archivo (haciendo append en el mismo).

Pueden hacer uso del ejemplo de webServer1 y modificarlo utilizando fs.

### Ejercicio 2
Modificar el archivo ej02/client.js y en el mismo:
* Crear la clase client con los métodos getAll y getOne (que reciba un id de parámetro).
* La clase client debe ser utilizada en otro archivo (usando module.exports y require) el cual invoque a los método getAll y getOne y muestre el resultado por consola.
* client utilizar el pool de conexiones y los métodos de dbPool.

***Información sobre la base de datos***

Los datos de la conexión (host, user, password y db) pueden ser modificados desde dbPool.

La estructura de la tabla client es:
```sql
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
```
