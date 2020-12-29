'use strict';

let numberOfFilms;
// for (let i = 0; i < 1; i++) {
//      const d = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     if (d != "" && d != null && d ) {
//         numberOfFilms = d;
//         console.log('Done');
//     }else{
//         --i;

//     }
// }

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколко оцените его?', '');

        if (a != "" && a != null && b != "" && b != null ) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            --i;
        }

    }

}

rememberMyFilms();

function writeYourGenres(){
    for(let i = 1; i<4; i++){
       const c = prompt(`Ваш любимый жанр под номером ${i}`) ; 

       if (c != "" && c != null) {
        personalMovieDB.genres[i - 1] = c;
        console.log('Done');
    } else {
        console.log('Error');
        --i;
    }
    }
}

writeYourGenres();
function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privet);

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколко оцените его?', '');
//     ++i;
//     if (a != "" && a != null && b != "" && b != null) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         --i;
//     }

// }

// for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколко оцените его?', '');

//     if (a != "" && a != null && b != "" && b != null) {
//         personalMovieDB.movies[a] = b; 
//         console.log('Done');
//     }else {
//         console.log('Error');
//         --i;
//     }

// }







console.log(personalMovieDB);
// 