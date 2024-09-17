$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://ghibliapi.vercel.app/films",
        datatype: "json",
        async: true,
        success: function(data) { mostrarInfo(data) }
    });
})

function mostrarInfo(data) {
    data.forEach(film => {
        let filmCard = $("<div></div>").addClass("film-card");

        $("<img>").attr("src", film.image).addClass("film-image").appendTo(filmCard);
        $("<h3></h3>").text(film.title).appendTo(filmCard);
        $("<p></p>").text(film.original_title).appendTo(filmCard);

        // Hacer la tarjeta clicable
        filmCard.click(function() {
            // Redirigir a una nueva página con la ID de la película
            window.location.href = `detalle.html?id=${film.id}`;
        });

        $("#film-container").append(filmCard);
    });
}
