//Define a class named "Movie" with the following properties and methods:
//Private properties:
//title (string): The title of the movie.
//cast (array): The cast members of the movie.
//description (string): A brief description of the movie.
//rating (number): The rating of the movie.

//Methods:
//updateRating(newRating) - Updates the rating of the movie with the provided new rating.
//displayInfo() - Displays the movie's title, cast, description, and rating to the "movie-info" div using innerHTML.
// Define the Movie class

class Movie {
  #title;
  #cast;
  #description;
  #rating;
  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  getTitle() {
    return this.#title;
  }

  updateRating(newRating) {
    this.#rating = newRating;
  }

  displayInfo() {
    const movieInfoDiv = document.getElementById("movie-info");
    if (movieInfoDiv) {
      movieInfoDiv.innerHTML = `
        <h2>Title: ${this.#title}</h2>
        <p><strong>Cast:</strong> ${this.#cast.join(", ")}</p>
        <p><strong>Description:</strong> ${this.#description}</p>
        <p><strong>Rating:</strong> ${this.#rating}</p>
      `;
    }
  }
}

const myMovie = new Movie(
  "Inception",
  ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO",
  8.8
);

const movies = [];
movies.push(myMovie);

myMovie.displayInfo();


  const movie = movies.find((movie) => movie.getTitle() === title);
  if (movie) {
    movie.updateRating(newRating);
  }
  if (movie) {
    movie.updateRating(newRating);
  } 
  

updateMovieRating("Inception", 9.0);
myMovie.displayInfo();


