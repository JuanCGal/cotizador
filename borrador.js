/*
'use strict'

//Array del objeto
var peliculas = [
    {titulo: 'La verdad duele', year: 2014, pais: 'UK'},
    {titulo: 'Diamantes de sangre', year: 2010, pais: 'EEUU'},
    {titulo: 'Agora', year: 2009, pais: 'España'}
]
//Tabla con los contenidos
var listaPeliculas = document.getElementById('tabla');

//Aqui vamos a guardar los tr y td con su informacion.
let tablaContent = ``

//Recoremos las peliculas
//El operador in es para obtener el indice, 
//en cambio of es el objeto en si.

for (const item of peliculas) {
  //Fijate que utilizamos += para acumular los datos. 
  //Template strings syntax
   tablaContent += `
    <tr>
      <td>${item.titulo}</td>
      <td>${item.year}</td>
      <td>${item.pais}</td>
    </tr>
  
  `
}
//Finalmente añadimos el contenido a la tabla
listaPeliculas.innerHTML += tablaContent
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <!--Añadimos el id a la tabla-->
  <table id="tabla">
    <tr>
      <th id="pelicula">TITULO</th>
      <th id="anio">AÑO</th>
      <th id="pais">PAIS</th>
    </tr>
    
  </table>
</body>
</html>*/