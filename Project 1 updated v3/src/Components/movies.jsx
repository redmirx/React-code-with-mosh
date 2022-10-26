import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
// import { Collapse } from "bootstrap";
import Like from "./common/like";
import Pagination from "./common/pagination";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
  };

  handleDelete = (movieID) => {
    let filtedData = this.state.movies.filter((value) => value._id !== movieID);
    this.setState({ movies: filtedData });
  };

  handleLike = (movie) => {
    // console.log("Like clicked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }
    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id} className="">
                <td className="badge bg-primary ">{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td> {movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={() => this.handlePageChange()}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
