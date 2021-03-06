/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

//import movies from "../src/data";



var movies = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.3'
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: '9.2'
    },
    {
      title: 'The Godfather: Part II',
      year: '1974',
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.0'
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      rate: '9.0'
    },
    {
      title: '12 Angry Men',
      year: '1957',
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      rate: '8.9'
    }, 
    {
      title: 'Schindler\'s List',
      year: '1993',
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      rate: '8.9'
    },
    {
      title: 'Pulp Fiction',
      year: '1994',
      director: 'Quentin Tarantino',
      duration: '2h 34min',
      genre: ['Crime', 'Drama'],
      rate: '8.9'
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: '2003',
      director: 'Peter Jackson',
      duration: '3h 21min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rate: '8.9'
    },
    {
      title: 'Il buono, il brutto, il cattivo',
      year: '1966',
      director: 'Sergio Leone',
      duration: '3h 2min',
      genre: ['Western'],
      rate: '8.9'
    },
    {
      title: 'Fight Club',
      year: '1999',
      director: 'David Fincher',
      duration: '2h 19min',
      genre: ['Drama'],
      rate: '8.8'
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: '2001',
      director: 'Peter Jackson',
      duration: '2h 58min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rate: '8.8'
    },
    {
      title: 'Forrest Gump',
      year: '1994',
      director: 'Robert Zemeckis',
      duration: '2h 22min',
      genre: ['Comedy', 'Drama', 'Romance'],
      rate: '8.8'
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: '1980',
      director: 'Irvin Kershner',
      duration: '2h 4min',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      rate: '8.8'
    },
    {
      title: "Schindler's List",
      year: '1993',
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: [ 'Biography', 'Drama', 'History' ],
      rate: '8.9'
    },

 ];
 //console.log(movies);
  // hours to minutes
//1h == 60 min
//const turnHoursToMinutes = () => {
const getHoraMovie = (movieHour) => movieHour.map((data, idx, arr) => parseInt(data.duration, 10) * 60  );
console.log(getHoraMovie(movies));
const getMinuteMovie = (movieMinute) => movieMinute.map((data, idx, arr) => parseInt(data.duration.slice(3)));
console.log(getMinuteMovie(movies));
const totalTimeMovies = (totalMinutes1, totalMinutes2) => totalMinutes1.map((minutes, idx) => minutes + totalMinutes2[idx]);
console.log(totalTimeMovies(getHoraMovie(movies), getMinuteMovie(movies)).map((data) => data + 'min').toString(`${totalTimeMovies}`));
const finalTimeString = (addMinLetters) => addMinLetters.map((data) => data + 'min')/* .toString(`${addMinLetters}` */;
console.log(finalTimeString(totalTimeMovies(getHoraMovie(movies), getMinuteMovie(movies))));

//return finalTimeString (totalTimeMovies (getHoraMovie(movies), getMinuteMovie(movies)));
//};
//console.log(turnHoursToMinutes());

//average rate

const getRate = (ratestring) => ratestring.map((data) => parseFloat(data.rate));//.reduce((a, b) => a + b, 0) / ratestring.length);
console.log(getRate(movies));

const getRateTwoDecimals = (arr) => ((arr - Math.floor(arr)) !== 0) ? arr.reduce((acumulador, puntuacion) => acumulador + puntuacion) / arr.length : ('Error');
console.log(getRateTwoDecimals(getRate(movies)));

const averageValue = (arr) => arr.reduce((acumulador, puntuacion) => acumulador + puntuacion) / arr.length;
console.log(averageValue(getRate(movies)).toFixed(1));

// average drama
// map array and search for drama title

const drama = (arr) => arr.filter((nameGenre) => nameGenre.genre == ('Drama'));
console.log(drama(movies));

/* for (let i = 0;  i < movies.length; ++i){
  console.log(movies[i]);
} */

//forEach
//movies.forEach((movie) => console.log(movie));

//filter
const ages = [33, 12, 20, 31, 56, 9, 61, 44, 7, 20, 5, 89, 69, 22, 75, 92];

let canDrink = [];
for(let i = 0; i < ages.length; ++i){
  if(ages[i] >= 21){
    canDrink.push(ages[i]);
  };
};
console.log(canDrink);

//const beber = (arr) => arr.filter((age) => (age) ? age >= 21 : ('You cannot drink') );
const beber1 = (arr) => arr.filter((age) => age >= 21);
//console.log(beber(ages));
console.log(beber1(ages));

/* const dramaMovies = movies.filter(function(movie){
  if(movie.genre.map((data) => data)){
    return true;
  };
});
console.log(dramaMovies); */
const dramaMovies = (arr) => (arr).reduce((e, key) => e)
console.log(dramaMovies(getRate(movies)));

const dramaMovies1 = (arr) => arr.filter(e => e.genre.includes("Drama"));
console.log(dramaMovies1(movies));

const averageValue1 = (arr) => arr.reduce((acumulador, puntuacion) => acumulador + puntuacion) / arr.length;
console.log(averageValue1(getRate(dramaMovies1(movies))).toFixed(2));
/* const flatter = (n) => (n).flat(2);
        console.log(flatter(movies)); */

//console.log(turnHoursToMinutes(movies));

const totalTimeMovies1 = (totalMinutes3, totalMinutes4) => totalMinutes3.map((minutes, idx) => minutes + totalMinutes4[idx]);
console.log(totalTimeMovies1(getHoraMovie(movies), getMinuteMovie(movies)));

const orden = (arr) => arr.sort((a, b)  => b - a);
console.log(orden(totalTimeMovies1(getHoraMovie(movies), getMinuteMovie(movies))));
 
//case sensitive
const nombre = (arr) => arr.filter((nameDirector) => nameDirector.director == ('Steven Spielberg'));
console.log(nombre(movies));

/* const together = (arr) => Object.keys(arr).reduce((access, keyValue) => (access[arr[keyValue].year] = [...(access[arr[keyValue]] || []), keyValue], access) , {});
console.log(together(movies)) */

/* const output = anys.map((objct, indx) =>{
  let myObjct = [];
  myObjct[notaza[indx]] = objct;
  return myObjct;
});
console.log(output); */

/* const groupYear = (arr) => arr.reduce((acc, any) =>{( acc[any.year] = acc[any.year] + 1 || 1 );
  return acc;
 } , {});
 console.log(groupYear(movies)); */


 // Mejor año
 /* var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"]; */
/* const columns = yearMovies(movies);
const rows = noteMovies(movies);
const result =  rows.reduce((result, field, index) => {
  result[columns[index]] = field;
  return result;
}, {})

console.log(result); */

//const merged = yearMovies(movies).reduce((obj, key, index) => ({ ...obj, [key]: noteMovies(movies)[index] }), {});
//console.log(merged);