/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(inputArray){
    let copy = [...inputArray];
    copy.sort( (a, b) =>{
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else if (a.title > b.title) return 1;
    else if (a.title < b.title) return -1;
  }
  )

return copy;

  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(manyMovies) {
    let ManyMoviesList = manyMovies.filter(movies => movies.director === "Steven Spielberg")
    return ManyMoviesList.filter(movies => movies.genre.includes("Drama")).length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(alphaArray) {
  let newAlphaArray = alphaArray.map(movies => movies.title)
  let newAlphaArraySorted = newAlphaArray.sort()
  return newAlphaArraySorted.slice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(avgArray){
  let newAverage = 0;
  let newAverageArray
  if(avgArray== false ) {
    return 0
  }
  else{
    newAverageArray = avgArray.reduce( (a, b) =>{
      if (b.rate){
        return a +b.rate;
      }
      else {
        return a + 0;
      }
    }, 0)
  }
  newAverage = (newAverageArray / avgArray.length).toFixed(2)
  return Number(newAverage)
}



// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(dramaArray) {
  let newDramaArray = dramaArray.filter(function (movies) {
      return movies.genre.includes('Drama')
  }
  )
  let newDramaAverage = ratesAverage(newDramaArray)
  return newDramaAverage
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  let newDumbArray = [...array];
  let finalArrayThankGod = newDumbArray.map( (newMovie) => {
      let duration = newMovie.duration
      let min = 0;
      let hour = 0;
      let final = 0;
      let floater;
      if (duration.includes('h') & duration.includes('min')) {
        floater = duration.replace('h', ' ').replace('min', ' ').trim();
          let hour = Number(floater.substring(0, floater.indexOf(" ") ) );
          let min = Number(floater.substring(floater.indexOf(" ") + 1) );
          final = ((hour * 60) + min);

      }
      else if (duration.includes('h')) {
          hour = Number(duration.substring(0, duration.indexOf("h") ) );
          final = hour * 60;

      }
      else if (duration.includes('min')) {
          min = Number(duration.substring(0,duration.indexOf("min") ) );
          final = min;
      }

      return {
          title: newMovie.title,
          year: newMovie.year,
          director: newMovie.director,
          duration: final,
          genre: newMovie.genre,
          rate: newMovie.rate
      }
  }
  )
  return finalArrayThankGod;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(lastArray) {
  if(lastArray == false){
    return null
  }
}