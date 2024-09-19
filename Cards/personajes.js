const input = document.querySelector("#searchInput"); 
let peopleData = [];

// Cuando el documento esté listo, cargamos los personajes desde el JSON
$(document).ready(function() {
    // Cargamos el archivo JSON externo
    $.getJSON('personajes.json', function(data) {
        peopleData = data.people; // Asegúrate de que el JSON tenga una clave 'people'
        // Llamamos a la función renderCharacters con los datos del JSON
        renderCharacters(peopleData);
    });
});

input.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredPeople = peopleData.filter(person => 
        person.name.toLowerCase().includes(searchText)
    );
    $("#character-cards").empty(); // Limpiar las tarjetas anteriores
    renderCharacters(filteredPeople); // Mostrar las tarjetas filtradas
});

// Función para generar las tarjetas de personajes
function renderCharacters(people) {
    const characterCards = $('#character-cards');

    // Iteramos sobre cada personaje y creamos una tarjeta para cada uno
    people.forEach(person => {
        const cardHtml = `
            <div class="card">
                <img src="${person.img}" alt="${person.name}">
                <h3>${person.name}</h3>
                <p><strong>Gender:</strong> ${person.gender}</p>
                <p><strong>Age:</strong> ${person.age}</p>
                <p><strong>Eye Color:</strong> ${person.eye_color}</p>
                <p><strong>Hair Color:</strong> ${person.hair_color}</p>
                <p><strong>Species:</strong> ${person.specie}</p>
            </div>
        `;

        // Agregamos la tarjeta al contenedor
        characterCards.append(cardHtml);
    });
}
 