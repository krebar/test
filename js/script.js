'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    }
}


start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
function showMyDB(hidden){
    if( !hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

        if (a != null && a != "" && a.length < 50 && b != null && b != "" && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {

        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");

    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");

    } else {
        console.log("Произошла ошибка");

    }
}
 detectPersonalLevel();




 function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
   
      personalMovieDB.genres[i - 1] = prompt(`Сколько фильмов вы уже посмотрели ${i}`);
    }
}
writeYourGenres();