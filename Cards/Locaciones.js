$(document).ready(function() {
    $.ajax({
        url: 'https://ghibliapi.vercel.app/people',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const $cardsContainer = $('.cards');
            data.forEach(person => {
                const $card = $('<div></div>').addClass('card');
                $card.html(`
                    <h2>${person.name}</h2>
                    <p><strong>Género:</strong> ${person.gender}</p>
                    <p><strong>Edad:</strong> ${person.age}</p>
                    <p><strong>Color de cabello:</strong> ${person.hair_color}</p>
                    <p><strong>Color de ojos:</strong> ${person.eye_color}</p>
                `);
                $cardsContainer.append($card);
            });
        },
        error: function(error) {
            console.error('Error al obtener los datos:', error);
        }
    });
});