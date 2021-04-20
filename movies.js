
// Later put in window.load or document.ready

$(document).ready(function(){

    $( "#submit-movie" ).click(function() {
        let movieTitle = $("#movie-title").val();
        let movieRating = $("#movie-rating").val();
        let addMovie = {
            title : movieTitle,
            rating : movieRating
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addMovie),
        };
        fetch("https://rambunctious-fabulous-gopher.glitch.me/movies", options)
            .then( response => console.log(response) ) /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */
        fetch("https://rambunctious-fabulous-gopher.glitch.me/movies")
            .then(response => (response.json())) // parse the JSON from the server
            .then(response => {
                appendNewMovie(response)})




    });

const moviesList = document.getElementById("movies");
const moviesForm = document.querySelector("form");
console.log(moviesList);

function appendNewMovie(movies) {
    console.log(movies)

    let newListItem = "";

    for(let i = 0; i < movies.length; i++){
        //movies.forEach(function(movie) {


            newListItem += `<li>${movies[i].title} <span>${movies[i].rating}</span> </li>`;
            console.log(movies[i].title);
        //})
    }
     console.log(newListItem);
    moviesList.innerHTML = newListItem;

}



    // $( "#submit-movie" ).click(function() {
    //     let movieTitle = $("#movie-title").html();
    //     let movieRating = $("#movie-rating").html();
    //     console.log(movieTitle);
    //     console.log(movieRating);
    //
    // });



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

            // const options = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(moviesObj),
            // };
            //
            // fetch(moviesApiURL, options).then(function (response){
            //     console.log(response);
            // }).then(response => fetch("/movies").then(response => (response.json())).then(response => {appendNewMovie(response);}))
            //

            // let putURL = "https://rambunctious-fabulous-gopher.glitch.me/movies"
            //
            // let newDreamObj = {"dream": "My dream is to be a successful Software Developer"}
            // let options = {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(newDreamObj)
            // }
            //
            // fetch(putURL, options).then(function(response){
            //     console.log(response)
            // })
        });
    });

})