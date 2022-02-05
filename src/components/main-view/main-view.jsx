import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Inception', Description: ' The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.', ImagePath: '..', Genre:'Science Fiction', Director:'Christopher Nolan'},
        { _id: 2, Title: 'The Shawshank Redemption', Description: 'It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.', ImagePath:'...',Genre:'Drama', Director:'Frank Darabont'},
        { _id: 3, Title: 'Gladiator', Description: ' Its about a Roman general Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious son of Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus becomes a gladiator and rises through the ranks of the arena to avenge the murders of his family and his emperor.', ImagePath: '...', Genre:'Epic Drama', Director:' Ridley Scott'}
      ]
    }
  }
  
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }
  
  render() {
    const { movies, selectedMovie } = this.state;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }

}

export default MainView;