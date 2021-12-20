import React, { Component } from "react";
// import { Pagination } from "react-bootstrap";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from './common/pagination'

class Movies extends React.Component {
  state = {
    movies: getMovies()
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  clickLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  };
  handlePage =(page) =>{
    console.log(page);
  }

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There is no data in the table</p>;

    return (
      <React.Fragment>
        <p>Rows {count}</p>
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
            {this.state.movies.map((movies) => (
              <tr key={movies._id}>
                <td>{movies.title}</td>
                <td>{movies.genre.name}</td>
                <td>{movies.numberInStock}</td>
                <td>{movies.dailyRentalRate}</td>
                <td>
                  <Like liked={movies.liked} onLike={() => this.clickLike(movies)} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movies)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination itemsCount ={count} pageSize={4} onNextPage={this.handlePage}/>

        
      </React.Fragment>
    );
  }
}

export default Movies;
