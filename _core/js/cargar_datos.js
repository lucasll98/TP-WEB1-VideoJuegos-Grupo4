import videojuegos_4 from "../../data/videojuegos_4.json" with { type: 'json' };
import configuracion from "../../config/configuracion.json" with { type: 'json' };
 
const articulos = Object.entries(videojuegos_4);
const contenedorJuegos = document.getElementById("seccion-categoria");
 
function limpiarContenedor() {
    contenedorJuegos.innerHTML = "";
}
 
function mostrarJuego(value) {
    const articleElemento = document.createElement("article");
    articleElemento.id = value.Id;
    articleElemento.classList.add("articulo-categoria");
    articleElemento.innerHTML = `
        <header class="header-articulo">
            <p class="item-valor-nombre">${value.Nombre}</p>
            <p class="item-valor-autor">${value.Autor}</p>
            <img class="item-valor-portada" src="${value.Portada}" alt="${value.Nombre}">
            <p class="item-valor-descripcion">${value.Descripcion}</p>
            <p class="item-valor-rating">Rating</p>
            <div class="calificacion">
                <i class="bi bi-star-fill star"></i>
                <i class="bi bi-star-fill star"></i>
                <i class="bi bi-star-fill star"></i>
                <i class="bi bi-star-fill star"></i>
                <i class="bi bi-star-fill star"></i>
            </div>
        </header>
        <div class="detalle-articulo">
            <h4 class="item-campo-personalizado_1">${value["personalizado_1.Distribuidora"]}</h4>
            <p class="item-valor-personalizado_1">${value["personalizado_1.Distribuidora"]}</p>
            <h4 class="item-campo-personalizado_2">${value["personalizado_2.Fecha Publicacion"]}</h4>
            <p class="item-valor-personalizado_2">${value["personalizado_2.Fecha Publicacion"]}</p>
            <h4 class="item-campo-personalizado_3">${value["personalizado_3.Dispositivos"]}</h4>
            <p class="item-valor-personalizado_3">${value["personalizado_3.Dispositivos"]}</p>
            <h4 class="item-campo-personalizado_4">${value["personalizado_4.Clasificacion ESRB"]}</h4>
            <p class="item-valor-personalizado_4">${value["personalizado_4.Clasificacion ESRB"]}</p>
            <h4 class="item-campo-personalizado_5">${value["personalizado_5.Online/Offline"]}</h4>
            <p class="item-valor-personalizado_5">${value["personalizado_5.Online/Offline"]}</p>
        </div>
    `;
    contenedorJuegos.appendChild(articleElemento);
 
 
    const stars = articleElemento.querySelectorAll(".star");
    const rating = value.Rating;
 
    stars.forEach((star, index)=>{
        if (index < rating) {
            star.classList.add('checked');
        } else {
            star.classList.remove('checked');
        }
    })
 
}
 
function mostrarJuegos(juegos) {
    limpiarContenedor();
 
    juegos.forEach(([, value]) => {
        mostrarJuego(value);
    });
}
 
document.querySelectorAll("a.tab-categoria").forEach(linkCategoria => {
    linkCategoria.addEventListener("click", function(event) {
        event.preventDefault();
 
        const categoriaSeleccionada = linkCategoria.innerText;
 
        if (categoriaSeleccionada === "Todos") {
            mostrarJuegos(articulos);
        } else {
            const juegosFiltrados = articulos.filter(([, value]) => value.Categoria === categoriaSeleccionada);
            mostrarJuegos(juegosFiltrados);
        }
    });
});
 
if (configuracion["modo-test-prod"] === "prod") {
    document.querySelector("#tab-categoria-1").click();
}
 
 
 
contenedorJuegos.addEventListener("mouseover", function(event) {
    if (event.target.closest("article")) {
        event.target.closest("article").classList.toggle("opacity");
    }
});
 
contenedorJuegos.addEventListener("click", function(event) {
    if (event.target.closest("article")) {
        event.target.closest("article").classList.toggle("blanco");
    }
});

