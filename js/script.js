'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {

            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");

        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");

        } else {
            console.log("Произошла ошибка");

        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    toggleVisibeleMyDB: function () {

    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {

            let genre = prompt(`Сколько фильмов вы уже посмотрели ${i}`);
            if (genre === "" || genre === null) {
                console.log("Вы вели некорректные даные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

        }
     
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });

    },



};
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);