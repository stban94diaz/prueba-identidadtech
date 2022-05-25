# Prueba tecnica para Identidad Thechnologies

## Esteban Diaz


## Prerrequisitos

* Sistema operativo Linux (para ejecutar algunos de los comando usados en este documento necesitara contar con una distro de Linux, se recomienda usar Debian o Ubuntu).
* Node JS.
* Docker compose (en caso de que se quiera usar la instancia de Docker MongoDB).
* Contar con conexión a internet.

## MongoDB

Ya que para el desarrollo de esta aplicacion se hizo uso de esta base de datos se puede dirigir a la carpeta **mongodb** la cual cuenta con el archivo *docker-compose.yml* en el cual se establece la configuracion para poder usar la base de datos, para esto debe seguir las siguientes instrucciones:

1. Entramos a la carpeta del **mongodb**: ```cd mongodb```
2. Debe crear la carpeta donde se alojara el volumen de la db: ```mkdir mongo_data```
3. Ejecutamos el siguiente comando para que docker compose realice todo lo necesario para tener el servicio disponible: ```docker-compose up -d```

## Backend

Esta es una aplicacion realizada con el Framework de Node Js llamado **Nest JS**, se encuentra ubicada en la carpeta llamada **ws**.

Entramos a la carpeta del **backend**: ```cd ws```

Se realizo un API REST la cual cuenta con los modulos **auth**, **csv** y **user** los cuales cuentan con tipados de datos, controladores, servicios, entre otros archivos, que son los que definen la logica para los endpoints y gestión de los registros de la base de datos, el modulo auth adicionalmente presenta restricciones de acceso a través de JWT.

En caso de que no desee utilizar la configuracón de docker compose facilitada en este repositorio, por favor dirijase al archivo **.development.env** y en la linea 4 modifique la variable de entorno **DB_HOST** que define la conexión al servicio de la db de Mongo de su preferencia.

Con esto podemos proceder a ejecutar los siguientes comandos para levantar el servicio.

1. Instalamos dependencias: ```npm i```
2. Lanzamos la aplicación: ```npm start```

Como no se cuenta con una interfaz de creación de usuario y de inicio de sesión es necesario es necesario crear un usuario y realizar el login a travez de los endpoints del backend, con los siguientes comandos lo puede hacer:

1. Creamos el usuario:
```
curl -X POST \
  http://localhost:3000/user \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 4fbb3e0f-5b06-e9e3-1697-694f9032b947' \
  -d '{
	"userName": "esteban",
	"pass": "prueba"
}'
```
2. El siguiente comando crea un nuevo token el cual lo usaremos mas a delante en la configuracion del **Frontend**:
```
curl -X POST http://localhost:3000/auth/login -d '{"username": "esteban", "password": "prueba"}' -H "Content-Type: application/json"
```

## Fontend

Esta es una aplicacion realizada con el Framework de Node Js llamado **Angular**, se encuentra ubicada en la carpeta llamada **front**.

Entramos a la carpeta del **frontend**: ```cd front```

Por favor dirijase al archivo **environment.ts** (que esncuentra dentro de src/envoronments) y en la linea 7 ponemos el token generado anteriormente reemplazando el string despues de la plabra **Bearer** conservando el espacio.

Esto es nesesario para que el frontend pueda hacer peticiones al backend y almacenar la data de los csv.

El frontend esta compuesto por 3 paginas,asi:

1. El **Home** que facilita el GUI para cargar los archivos csv y mostrar el contenido y usa el backend para almacenar los datos.
2. El **render** que es una pagina cumple el pape como pagina y componente el cual es que toma la data del home y la muestra o en el caso de la pagina recibe un parametro por la url el cual es el id del csv del cual se quiere traer la información del backend.
3. **uploads** que es la pagina que lista todos los csv almacenandos haciendo uso del backend y facilita el router link para redirigir al render con el id que corresponda al csv.

Tambien se realizo un service llamado **CsvService** el cual es el encargado de almacenar y traer los datos del backend.

Para levantar el servicio.

1. Instalamos dependencias: ```npm i```
2. Lanzamos la aplicación: ```npm start```

Con todo esto tenemos el servicio del Front disponible en la url **http://localhost:4200**