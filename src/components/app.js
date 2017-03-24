import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllBooks, setFilterFalse, setFilterTrue } from '../actions'

import { createSelector } from 'reselect';

class App extends Component {

  render() {

    return (
      <div>
        <h1>React + Redux simple starter!!</h1>
        <ul>
          {this.props.books.map((book) => {
            return (
              <li key={book.name}>{book.name}</li>
            );
          })}
        </ul> 
        <button onClick={this.props.showAllBooks}>all books</button>
        <hr/>
        <button onClick={this.props.setFilterFalse}>not done</button>
        <hr/>
        <button onClick={this.props.setFilterTrue}>done</button>
      </div>
    );
  }
}

// const getBooks = (books,filter) => {
//   if(filter === 'true') {
//     return books.filter((book) => book.done)
//   }else if(filter === 'false'){
//     return books.filter((book) => !book.done)
//   }
//   return books;
// }


// Now this is a standard input selectors - they just take the state and return a slice of it. They will have to recalculated for every
// state change irrespective of whether the particular slice changes or not. i.e even if an unrelated part of the state changes
// These functions recalculate...
const getBooks = (state) => state.books
const getFilter = (state) => state.filter
// sometimes these constant recomputation can reduce performance!
// Therefor we use the reselct library to create a memoized selector that caches and triggers recomputation 
// very conservatively.

// This is how you create a memoised selector...it only triggers recomputation if and only if the relevant state changes.
// ITs input is an array or functions that are just simple selectors with not code in them except returning the slice
// and an other function (AKA a transform) that is run only when relevant state changes... the function memoises change.

const getBooksSelector = createSelector([getBooks,getFilter], (books,filter) => {
  if(filter === 'true') {
    return books.filter((book) => book.done)
  }else if(filter === 'false'){
    return books.filter((book) => !book.done)
  }
  return books;
});


// AND THIS MEMOIZED SELECTOR CAN BE AN INPUT TO ANOTHER MEMOIZED SELECTOR



// You can now hook up this memoized selector to react and redux store by using it in mapStateToProps
const mapStateToProps = (state) => {
  return {
    books: getBooksSelector(state),
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    showAllBooks,
    setFilterFalse,
    setFilterTrue
   },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);