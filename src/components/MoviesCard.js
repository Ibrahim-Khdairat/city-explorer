
import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

class MoviesCard extends React.Component {
    //this.props.showMovies &&

    render() {
        return (

            <div className="movie">
                {this.props.showMovies &&
                    <Card style={{ width: '28rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>


                            <Card.Title style={{ height: '30px', backgroundColor: '#386ddd', boxShadow: '2px 2px 2px black', textAlign: 'center' }}> Movie Title : {this.props.movie.title}</Card.Title>

                            <Card.Text>
                                Movie Language :  " {this.props.movie.original_language} "
                            </Card.Text>
                            <Card.Text>
                                Movie Avg. Vote :  {this.props.movie.vote_average}
                            </Card.Text>
                            <Card.Text>
                                Movie Overview :  {this.props.movie.overview}
                            </Card.Text>
                            <Card.Text>
                                Movie Total Vote : {this.props.movie.vote_count}
                            </Card.Text>
                            <Card.Text>
                                Movie Popularity :  {this.props.movie.popularity}
                            </Card.Text>
                            <Card.Text>
                                Movie Release_date :  {this.props.movie.release_date}
                            </Card.Text>

                            <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={this.props.movie.poster_path}
                                alt={this.props.movie.title} />

                            {/* <Card.Title>Movies List</Card.Title>


                            {this.props.MoviesInformation.map(movies =>
                                <div>
                                    <Card.Text>
                                        Movie Title :  {movies.title}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Language : {movies.original_language}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Avg. Vote :  {movies.vote_average}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Overview :  {movies.overview}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Total Vote : {movies.vote_count}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Popularity :  {movies.popularity}
                                    </Card.Text>
                                    <Card.Text>
                                        Movie Release_date :  {movies.release_date}
                                    </Card.Text>
                                    <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`
                                    } alt={movies.title} />

                                    <Card.Text>

                                    </Card.Text>
                                    <Card.Text>
                                        ---------------------------------------------------------------
                                    </Card.Text>
                                    <Card.Text>

                                    </Card.Text>

                                </div>
                            )} */}
                        </Card.Body>
                    </Card>
                }

            </div>
        )
    }
}


export default MoviesCard;
