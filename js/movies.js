
"use strict";
function update () {
    const moviesAjax = $.ajax("https://flower-quiver-giraffatitan.glitch.me/movies");

    function onSuccess(data) {
        console.log(data);
    }

    function onFail(jqXhr) {
        console.log("Check your file path.");
    }

    function onAlways() {
        $('#main').html("Loading...");
    }

    moviesAjax.done(onSuccess);

    moviesAjax.done(function (movies) {
        $("#main").html("");

        movies.forEach(function (movie) {
            var content = "";
            if (movie.title && movie.rating !== undefined) {
                content += "<h1>" + movie.title + "</h1>"
                content += "<h1>" + movie.rating + "</h1>"
                content += "<button class='delete'>" + movie.id + "</button>"
                console.log(content);
                $('#main').append(content);
            }
        });
    });
}

update();
//let users post movie titles

// const moviesApiURL = "https://peaceful-forest-loaf.glitch.me/movies";
// let inputtedMovie = movieTitle.value;
// let inputtedRating = movieRating.value;
// let newPost = {
//     "title": inputtedMovie,
//     "rating": inputtedRating,
// }
// let options = {
//     method: "POST",
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
// }https://flower-quiver-giraffatitan.glitch.me/


const moviesApiURL = "https://flower-quiver-giraffatitan.glitch.me/movies";
let movieTitle = document.querySelector('#mtitle');
let movieRating = document.querySelector('#mrating');
let inputtedMovie = movieTitle.value;
console.log(inputtedMovie);
let inputtedRating = movieRating.value;
console.log(inputtedRating);

let newPost = {
    "title": inputtedMovie,
    "rating": inputtedRating,
}
let options = {
    method: "POST",
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(newPost),
}


//need to replace this with something that posts directly to server
var ele = document.getElementById('submit');
ele.addEventListener('click', function(e) {
    e.preventDefault();

    let inputtedMovie = movieTitle.value;
    console.log(inputtedMovie);
    let inputtedRating = movieRating.value;
    console.log(inputtedRating);

    let newPost = {
        "title": inputtedMovie,
        "rating": inputtedRating,
    }
    let options = {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newPost),
    }
    console.log(options);
    fetch(moviesApiURL, options).then(function (response) {
        update();
        return response })

});

// This function deletes movie

// $("#delete-submit-button").click(function () {
//     let movieToDelete = $("#delete-movie").val();
//     console.log(movieToDelete);
//     let movieTitle = $("#movie-title").val();
//     let movieRating = $("#movie-rating").val();
//     let deleteMovie = {
//         title: movieTitle,
//         rating: movieRating
//     }
//     const options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(deleteMovie),
//     };
// });


//edit


// delete button
function deleted() {
    let deleteMethod = {
        method: "DELETE"
    }
    fetch(moviesApiURL + "/" +"i", deleteMethod).then(function (response) {
        console.log(response);
    })
}

const dele = document.getElementsByClassName('delete');
dele.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("clicked");
});



