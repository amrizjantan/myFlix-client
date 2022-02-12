import React from 'react';  
import axios from 'axios';
import PropTypes from 'prop-types';
import './main-view.scss';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view'; 
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor(){
    super();
  // Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }

// Load in movies from database after rendering MainView
  componentDidMount(){
    axios.get('https://amrizflix.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


 /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
 setSelectedMovie(movie) {
  this.setState({
    selectedMovie: movie
  });
}
  
  /*When a user successfully registers*/
  onRegistration(register) {
    this.setState({
      register
    }); 
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

render() {
    const { movies, selectedMovie, user, register} = this.state;

/* Registration*/
if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)}/>);

/* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

 // Before the movies have been loaded    
// Empty Mainview if there are no movies (or movies are still loading)
    if (movies.length === 0) return <div className="main-view"></div>;


    return (
      <div className="main-view">
        {/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
          ))
        }
      </div>
    );
  }
} 

export default MainView;