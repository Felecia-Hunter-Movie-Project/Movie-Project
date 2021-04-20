
// Later put in window.load or document.ready

$(document).ready(function(){



const moviesList = document.getElementById("movies");
const moviesForm = document.querySelector("form");
console.log(moviesList);

function appendNewMovie(movies) {
    console.log(movies)

    let newListItem = "";

    for(let i = 0; i < movies.length; i++){
        newListItem += `<li>${movies[i].title}</li>`;
        console.log(movies[i].title);
    }
    console.log(newListItem);
    moviesList.innerHTML = newListItem;

}

fetch("https://rambunctious-fabulous-gopher.glitch.me/movies")
    .then(response => (response.json())) // parse the JSON from the server
    .then(response => {
        appendNewMovie(response);

        moviesForm.addEventListener("submit", event => {
            event.preventDefault();

            const moviesApiURL = "https://rambunctious-fabulous-gopher.glitch.me/movies";
            const moviesObj = {
                "movie": moviesForm.elements.movie.value
            }
            console.log(moviesObj);

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(moviesObj),
            };
            fetch(moviesApiURL, options).then(function (response){
                console.log(response);
            }).then(response => fetch("/movies").then(response => (response.json())).then(response => {appendNewMovie(response);}))

        });
    });

})