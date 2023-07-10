
let productos
const catProductos= [{
    id:1,
    nombre:'Camisa',
    costo:400
},{
    id:2,
    nombre:'Pantalón',
    costo:500
},{
    id:3,
    nombre:'Chamarra',
    costo:600
},{
    id:4,
    nombre:'Gorra',
    costo:100
},{
    id:5,
    nombre:'Calcetines',
    costo:20
}]
let boton = document.getElementById('btnPrincipal')
boton.addEventListener('click',inicio)

pintar();

function pintar(){
    let listaProductos = document.getElementById('listaProductos')
for (const producto of catProductos){
    let li = document.createElement('tr')
    li.innerHTML = ` 

    <td>${producto.id}</td>   
    <td>${producto.nombre}</td>  
    <td>${producto.costo}</td>  

    `
    listaProductos.appendChild(li)
}
 //   inicio()
}


function inicio(){
    let condicionInicial = prompt('¿Desea Realizar una compra?      SI/NO')
    if(condicionInicial.toUpperCase() === 'SI'){
        procesoDeCompra()
    }else if(condicionInicial.toUpperCase() === 'NO'){
        alert('¡Gracias por visitarnos, vuelva pronto!')
    }else{
        alert('No accedio un comando valido')
        inicio()
    }
}

function procesoDeCompra(){
    //let producto = Number(prompt('Alija el producto:    \n1.- '+catProductos[0].nombre+'	-	$'+catProductos[0].costo+'    \n2.- '+catProductos[1].nombre+'	-	$'+catProductos[1].costo+'    \n3.- '+catProductos[2].nombre+'	-	$'+catProductos[2].costo+'    \n4.- '+catProductos[3].nombre+'	-	$'+catProductos[3].costo+'    \n5.- '+catProductos[4].nombre+'	-	$'+catProductos[4].costo+''))
    let producto = Number(prompt('Alija el producto:'))
    let cantidad = Number(prompt('Cantidad del producto escogido'))
    let cumplido = true;
    let subtotal= 0;
    switch(producto){
        case 1:
            subtotal = calcularSubTotal(catProductos[0].costo,cantidad)
        break
            case 2:
            subtotal = calcularSubTotal(catProductos[1].costo,cantidad)
        break
            case 3:
            subtotal = calcularSubTotal(catProductos[2].costo,cantidad)
        break
            case 4:
            subtotal = calcularSubTotal(catProductos[3].costo,cantidad)
        break
            case 5:
            subtotal = calcularSubTotal(catProductos[4].costo,cantidad)
        break
        default:
            cumplido = false
            break
    }
    if(cumplido){
        if(productos === undefined){
            productos = [{
                id:producto,
                cantidad:cantidad,
                costo:catProductos[producto - 1].costo,
                subTotal:subtotal
            }]
        }else{
            productos[productos.length]={
                id:producto,
                cantidad:cantidad,
                costo:catProductos[producto - 1].costo,
                subTotal:subtotal
            }
        }
        let condicionInicial = prompt('¿Desea comprar otro Producto?      SI/NO')
        if(condicionInicial.toUpperCase() === 'SI'){
            procesoDeCompra()
        }else if(condicionInicial.toUpperCase() === 'NO'){
            calcularTotal()
        }else{
            alert('Error al ingresar el comando')
        }

    }else{
        alert('No accedio un comando valido')
        procesoDeCompra()
    }
    
}

function calcularSubTotal(costo,cantidad){
    return costo * cantidad
}

function calcularTotal(){
    let total =0;
    let mensaje = ''
    for(let a = 0; a < productos.length; a++){
        mensaje += 'Producto: ' + catProductos[productos[a].id -1].nombre + ' Cantidad: ' + productos[a].cantidad + ' Costo individual: $' + productos[a].costo + ' SubTotal: $' + productos[a].subTotal + ' \n'
        total = total + productos[a].subTotal
    }
    mensaje += '\n TOTAL: $' + total
    alert(mensaje)
    productos = undefined
}

function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1, num2){
    return num1 / num2;
}