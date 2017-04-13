import React, { Component } from 'react'
import { connect } from 'react-redux';

class MoviesShow extends Component {
  render(){
    return(
      <div>
        Movies Show
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const movie = state.movies.find(movie => movie.id === ownProps.routeParams.id);
  if(movie) {
    return { movie: movie }
  } else {
    return { movie: {} }
  }
}

export default connect(mapStateToProps)(MoviesShow);
