import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import { Collapse } from "bootstrap";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    const onDeleteHandler = (movieID) => {
      // console.log(movieID);
      let filtedData = this.state.movies.filter(
        (value) =>
          // console.log(value._id)
          value._id !== movieID
      );
      this.setState({ movies: filtedData });
    };
    return (
      <React.Fragment>
        <h1>Showing {this.state.movies.length} movies in the database</h1>
        <table border={2} style={{ borderCollapse: Collapse }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(
              (movie) => (
                <tr key={movie._id} className="">
                  <td className="badge bg-primary ml-1">{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td> {movie.dailyRentalRate}</td>
                  <td>
                    <button
                      className="badge bg-danger"
                      onClick={() => onDeleteHandler(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
              // console.log(movie.dailyRentalRate)
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
