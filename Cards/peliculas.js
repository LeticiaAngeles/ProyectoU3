const entrada = document.querySelector("#searchInput"); 
let datosPeliculas = [];

window.addEventListener("DOMContentLoaded", () => {
    console.log("cargado");

    $.ajax({
        type: "GET",
        url: "https://ghibliapi.vercel.app/films",
        dataType: "json",
        async: true,
        success: function(datos) {
            datosPeliculas = datos;
            mostrarInfo(datosPeliculas);
        }
    });
});

// Filtro de búsqueda cuando se ingresa texto en el input
entrada.addEventListener("input", (e) => {
    const textoBusqueda = e.target.value.toLowerCase();
    const peliculasFiltradas = datosPeliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(textoBusqueda)
    );
    $("#film-container").empty(); // Vaciar las tarjetas anteriores
    mostrarInfo(peliculasFiltradas); // Mostrar las nuevas tarjetas filtradas
});

// Función para mostrar la información de las películas
function mostrarInfo(datos) {
    const contenedorPeliculas = $("#film-container"); // Referencia al contenedor

    datos.forEach(pelicula => {
        // Crear la tarjeta de la película
        let tarjetaPelicula = $("<div></div>").addClass("film-card");

        // Añadir la imagen, título y título original a la tarjeta
        $("<img>").attr("src", pelicula.image).addClass("film-image").appendTo(tarjetaPelicula);
        $("<h3></h3>").text(pelicula.title).appendTo(tarjetaPelicula);
        $("<p></p>").text(pelicula.original_title).appendTo(tarjetaPelicula);

        // Hacer la tarjeta clicable para redirigir a la página de detalles
        tarjetaPelicula.click(function() {
            window.location.href = `detalle.html?id=${pelicula.id}`;
        });

        // Añadir la tarjeta de película al contenedor
        contenedorPeliculas.append(tarjetaPelicula);
    });
}
