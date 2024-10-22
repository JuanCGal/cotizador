let producto;
let tamanio;
let valor;
let cantidad;
let subTotal;
let total = 0;
let tabla = document.getElementById('tabla');
const cotizacion = [];
let tablaProductos = ``;
const formulario = document.getElementById('formulario');
const botonAgregar = document.getElementById('agregar');

//funcion para verificar si todos los inputs están llenos
function comprobarInputs(){
  //Seleccionamos todos los inputs
  const inputs = formulario.querySelectorAll('input');

  //Inicializamos una variable que se asume como todos llenos
  let todosLlenos = true;

  //Recorremos todos los inputs para verificr si alguno está vacío

  inputs.forEach(input => {
    if(input.value.trim() === ''){
      todosLlenos = false; //Si encontramos uno vacío cambiamos la variable
    }
  });
  
  //Usamos un condicional if para habilitar o deshabilitar el botón
  if (todosLlenos) {
    botonAgregar.disabled = false; //Si todos están llenos habilitamos el botón
  } else {
    botonAgregar.disabled = true; //Si alguno está vacío deshabilitamos el botón
  }
}

//Agregamos un evento de escucha para cada input en el formulario
formulario.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', comprobarInputs);
});

//Función o fábrica de objetos para crear el objeto
const elementoCotizado = (_producto, _tamanio, _valor, _cantidad, _subtotal) => {
  return {
    producto: _producto,
    tamanio: _tamanio,
    valor: _valor,
    cantidad: _cantidad,
    subTotal: _subtotal
  }
};

function agregarProducto(){
  comprobarInputs();
  crearProducto();
  totalizar();
  sumar();
  resetearInputs();
  botonAgregar.disabled = true;
}

//Función para crear cada producto
function crearProducto(){
  producto = document.getElementById('producto').value;
  tamanio = document.getElementById('tamanio').value;
  valor = document.getElementById('valor').value;
  cantidad = document.getElementById('cantidad').value;
  subTotal = valor * cantidad;
  //Se crear el objeto "productoUno" con la función fábrica de objetos
  const productoUno = elementoCotizado(producto, tamanio, valor, cantidad, subTotal);
  cotizacion.push(productoUno);

}

function sumar() {
  //Se convierte a número el valor recogido en el subTotal
  
  //Se va agregando el valor del subTotal de cada producto al total
  total += subTotal;

  //Actualizar el valor del total en el HTML
  document.getElementById('totalizar').innerText = total;
}

//Función para borrar filas
function borrarFila(boton){
  //Se obtiene la fila donde está el botón de borrado
  const fila = boton.parentNode.parentNode;

  //Se obtiene la tabla,pero como ya se obtubo en la variable tabla arriba no es necesario aquí

  //Borrar fila
  tabla.deleteRow(fila.rowIndex);
}

function resetearInputs(){
  document.getElementById('producto').value = '';
  document.getElementById('tamanio').value = '';
  document.getElementById('valor').value = '';
  document.getElementById('cantidad').value = '';
}

function totalizar(){
  document.getElementById('tbody').innerHTML += `
    <tr>
      <td>${producto}</td>
      <td>${tamanio}</td>
      <td>${valor}</td>
      <td>${cantidad}</td>
      <td>${subTotal}</td>
      <td><button class='botonBorrar' onclick='borrarFila(this)'>Borrar</button></td>
    </tr>
    `
};

// function recorrerArray(){
//   for(const item of cotizacion){
//     tablaProductos += `
//     <tr>
//       <td>${item.producto}</td>
//       <td>${item.tamanio}</td>
//       <td>${item.valor}</td>
//       <td>${item.cantidad}</td>
//       <td>${item.subTotal}</td>
//     </tr>  `
//     }
  
//     tabla.innerHTML += tablaProductos;
// }

// class ElementoCotizado {

//   constructor(producto, tamanio, valor, cantidad, subTotal){
//     this._producto = producto;
//     this._tamanio = tamanio;
//     this._valor = valor;
//     this._cantidad = cantidad;
//     this._subTotal = subTotal;
//   }

//   calculaSubtotal(){
//     return this.subTotal = this._valor * this._cantidad;
//   }
//   // tipoAdorno: '',
//   // tamanio: '',
//   // valorUnit: 0,
//   // cantidad: 0,
//   // subTotal: valorUnit * cantidad,

//   set cambiaProducto(nuevoProducto){
//     this._producto = nuevoProducto;
//   }

//   get getTipoAdorno() {
//     if(this._tipoAdorno) {
//       return this._tipoAdorno;
//     }else {
//       return 'No tenemos información.';
//     }
//   }
// }

// subTotal = 0;

// function nuevoProducto(){
//   const productoAgregado = new ElementoCotizado(producto, tamanio, valor, cantidad, subTotal);
//   cotizacion.push(productoAgregado);
//   console.table(cotizacion);
// }





// elementoCotizado.cambiaTipoAdorno = 'Reflex';
// console.log(elementoCotizado.getTipoAdorno);
// console.log(elementoCotizado.subTotal);