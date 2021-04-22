// Later put in window.load or document.ready

const moviesApiURL = "https://rambunctious-fabulous-gopher.glitch.me/movies/";

$(document).ready(function () {
    const moviesList = document.getElementById("movies");

    function getMovies() {
        const moviesForm = document.querySelector("form");
        fetch("https://rambunctious-fabulous-gopher.glitch.me/movies")
            .then(response => (response.json())) // parse the JSON from the server
            .then(response => {
                appendNewMovie(response)});

        moviesForm.addEventListener("submit", event => {
            event.preventDefault();
        })
    }
    getMovies();
    //Add movie to JSON file.
    $("#submit-movie").click(function () {
        let movieTitle = $("#movie-title").val();
        let movieRating = $("#movie-rating").val();
        let addMovie = {
            title: movieTitle,
            rating: movieRating
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addMovie),
        };
        fetch("https://rambunctious-fabulous-gopher.glitch.me/movies", options)
            .then(response => console.log(response)) /* review was created successfully */
            .catch(error => console.error(error)); /* handle errors */
        fetch("https://rambunctious-fabulous-gopher.glitch.me/movies")
            .then(response => (response.json())) // parse the JSON from the server
            .then(response => {
                appendNewMovie(response)
            })

    });


    //function puts movies into html
    function appendNewMovie(movies) {

        let newListItem = "";

        for (let i = 0; i < movies.length; i++) {

            newListItem += `<li> The title is: ${movies[i].title} / 
            <span> The rating is: ${movies[i].rating}</span> 
            </li>`;
        }
        moviesList.innerHTML = newListItem;
    }

        //Deletes movie
    $("#delete-submit-button").click(function () {
        let movieToDelete = $("#delete-movie").val();
        console.log(movieToDelete);
        let movieTitle = $("#movie-title").val();
        let movieRating = $("#movie-rating").val();
        let deleteMovie = {
            title: movieTitle,
            rating: movieRating
        }
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deleteMovie),
        };







                    });
                })



