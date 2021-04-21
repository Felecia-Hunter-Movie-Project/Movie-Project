// Later put in window.load or document.ready

$(document).ready(function () {

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

    const moviesList = document.getElementById("movies");
    const moviesForm = document.querySelector("form");
    console.log(moviesList);

    function appendNewMovie(movies) {
        // console.log(movies)

        let newListItem = "";

        for (let i = 0; i < movies.length; i++) {
            //movies.forEach(function(movie) {


            newListItem += `<li> The title is: ${movies[i].title} / 
            <span> The rating is: ${movies[i].rating}</span> 
            <button class="delete-movie" > Delete Movie! </button>
            </li>`;

            // console.log(movies[i].title);
            //})
        }
        // console.log(newListItem);
        moviesList.innerHTML = newListItem;
    }

    $(".delete-movie").click(function (){
       let deleteMovie =  $(this).attr(".delete-movie")
        console.log(deleteMovie);
    })



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
                // console.log(moviesObj);


                $("#delete-submit-button").click(function () {
                    let deleteMovie = $("#delete-movie").val();
                    let movieToDelete = {
                        id: movies.id
                    }
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(movieToDelete),
                    };
                    fetch("https://rambunctious-fabulous-gopher.glitch.me/movies", options)
                        .then(response => console.log(response)) /* review was created successfully */
                        .catch(error => console.error(error)); /* handle errors */
                    fetch("https://rambunctious-fabulous-gopher.glitch.me/movies")
                        .then(response => (response.json())) // parse the JSON from the server
                        .then(response => {
                            // deleteMovies(response)
                        })

                });
            });

        })
});