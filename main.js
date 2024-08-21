
class Pizza{
    constructor (id, titulo, ingredientes, estado){
        this.id = id;
        this.titulo = titulo;
        this.ingredientes = ingredientes;
        this.estado = estado;
    }
}
class PizzaStock{
    constructor (id, imagen, titulo,){
        this.id = id;
        this.imagen = imagen;
        this.titulo = titulo;
    }
}





// let pedir = 0;
let contador = localStorage.length;



let numeroCantidad = document.querySelector('#cantidad')
let productosStock = document.querySelector('#stockProductos')

const stockProductos = [];

let pedidosPizza = [];



stockProductos.push(new PizzaStock(1,'img/pizzamargarita.avif','pizza margarita'));
stockProductos.push(new PizzaStock(2,'img/pizzamargarita.avif','pizza de cebolla'));
stockProductos.push(new PizzaStock(3,'img/pizzamargarita.avif','pizza muzzarella'));

function numEnEstado(){
    if (pedidosPizza.length > -1){
        numeroCantidad.classList.remove('d-none')
        numeroCantidad.innerHTML = `${contador}`
    }
}
function repartidorPedido(id){
        
        if (id === 1){
        contador = contador+1,
        pedidosPizza.unshift(new Pizza(contador,'pizza margarita', 'margarita', 'PEDIDO'))
    }
    else if (id === 2){
        contador = contador+1,
        pedidosPizza.unshift(new Pizza(contador,'pizza de cebolla', 'cebolla', 'PEDIDO'))

    }
    else if (id === 3){
        contador = contador+1,
        pedidosPizza.unshift(new Pizza(contador,'pizza muzzarella', 'muzzarela', 'PEDIDO'))

    }
    numEnEstado()
    almacenarStorage(pedidosPizza[0])
}

function tostada(imagen){
    Toastify({
        text: "Producto enviado",
        avatar: imagen,
        duration: 3000,
        style: {
            background: "green"
          }
        }).showToast();
}

function almacenarStorage(objetoProducto){
    localStorage.setItem(`${objetoProducto.id} ${objetoProducto.titulo}`, JSON.stringify(objetoProducto) )
}

function cargarStock(){
    stockProductos.forEach((producto) => {
        let div = document.createElement('div')
        div.classList.add('productoStock')
        div.innerHTML = 
        `   <img class="imagenStock" src="${producto.imagen}" alt="imagen-pizza">
            <h1>${producto.titulo}</h1>
        `
        let botonCarrito = document.createElement('button');
        botonCarrito.classList.add('botonCarrito')
        botonCarrito.innerText = 'Pedir'
        botonCarrito.addEventListener('click', () =>{
            
            repartidorPedido(producto.id)
            tostada(producto.imagen)
        })

        div.append(botonCarrito)
        productosStock.append(div);
    })
}

// 





    


// cargaPedidos();
cargarStock()
numEnEstado()