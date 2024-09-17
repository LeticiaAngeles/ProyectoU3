document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ghibliapi.vercel.app/people')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.querySelector('.cards');
            data.forEach(person => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h2>${person.name}</h2>
                    <p><strong>Género:</strong> ${person.gender}</p>
                    <p><strong>Edad:</strong> ${person.age}</p>
                    <p><strong>Color de cabello:</strong> ${person.hair_color}</p>
                    <p><strong>Color de ojos:</strong> ${person.eye_color}</p>
                `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});