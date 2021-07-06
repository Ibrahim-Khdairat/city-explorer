
import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

class MoviesCard extends React.Component {


    render() {
        return (
            <div className="movie">
                {this.props.showMovies &&
                    <Card style={{ width: '28rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>
                            <Card.Title>Movies List</Card.Title>


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
                            )}
                        </Card.Body>
                    </Card>
                }

            </div>
        )
    }
}


export default MoviesCard;
