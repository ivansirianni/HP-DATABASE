class Tienda{
    constructor(id, name, image, gender, actor, house, patronus, wand){
        this.id = id,
        this.name = name,
        this.image = image,
        this.patronus = patronus,
        this.gender = gender,
        this.actor = actor,
        this.wand = wand,
        this.house = house        
    }   
}
let tienda = []
const ver_tienda = async() =>{
    const response = await fetch("https://hp-api.onrender.com/api/characters")
    const data = await response.json()    
    for (let items of data){        
        let nuevo_item = new Tienda(items.id, items.name, items.image, items.gender, items.actor, items.house, items.patronus, items.wand)
        tienda.push(nuevo_item) 
    }   
    localStorage.setItem("nuevo_item", JSON.stringify(tienda))    
}

ver_tienda()
let carrito_compra = JSON.parse(localStorage.getItem("carrito")) || [] //OPERADOR OR

//STORAGE TIENDA CON OPERADOR TERNARIO
localStorage.getItem("tienda") ? tienda = JSON.parse(localStorage.getItem("tienda")) :  
localStorage.setItem("tienda", JSON.stringify(tienda))

//VARIABLES
let mis_sucursales = document.getElementById("sucursales") //SUCURSALES


//BUSCADOR DE SUCURSALES POR ZONA
const textoBuscar = document.querySelector("#textoBuscar")
const houseBuscar = document.querySelector("textoBuscarHouse")
const botonBuscar = document.querySelector("#botonBuscar")
const resultadoBusqueda = document.querySelector("#sucursales")
const resultadoBusqueda2 = document.querySelector("#houses")

const buscarProductos = ()=>{   
    
    resultadoBusqueda.innerHTML = ""

    const textoProducto = textoBuscar.value.toLowerCase();    
    for (let local of tienda){
        let descripcion = local.name.toLowerCase();       
        if(descripcion.indexOf(textoProducto) !== -1){
                resultadoBusqueda.innerHTML += `<div class="card d-flex justify-content-start text-light " style="width: 20rem;">
                                                    <img class="card-img-top" style="height: 300px;" src="${local.image}" alt="${local.name}">
                                                    <div class="card-body">
                                                        <h4 class="card-title">${local.name}</h4>
                                                        <p><strong>Actor/ Actress:</strong> ${local.actor}</p>
                                                        <p><strong>Patronus:</strong> ${local.patronus}</p>
                                                        <p><strong>Gender:</strong> ${local.gender}</p>                                                    
                                                        <p><strong>Hogwarts House:</strong> ${local.house}</p>
                                                    </div>
                                                </div>`
                                           
            }  
           
      }
}    


botonBuscar.addEventListener("click" , buscarProductos)
//VA BUSCANDO A MEDIDA QUE VAMOS ESCRIBIENDO EN EL BUSCADOR
textoBuscar.addEventListener("keyup", buscarProductos)


//buscar por casas




//VA BUSCANDO A MEDIDA QUE VAMOS ESCRIBIENDO EN EL BUSCADOR






//OCULTAR SUCURSALES
let ocultar_sucursales = document.getElementById("ocultar_sucursal")
function ocultarSucu(){
    resultadoBusqueda.innerHTML = ""
  }
//--------------- BOTON PARA OCULTAR SUCURSALES
ocultar_sucursales.onclick = ocultarSucu
