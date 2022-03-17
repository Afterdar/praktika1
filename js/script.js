"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const peronalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

peronalMovieDb.movies[a] = b;
peronalMovieDb.movies[c] = d;

console.log(peronalMovieDb);