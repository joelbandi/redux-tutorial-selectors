import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllBooks, setFilterFalse, setFilterTrue } from '../actions'



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

const getBooks = (books,filter) => {
  if(filter === 'true') {
    return books.filter((book) => book.done)
  }else if(filter === 'false'){
    return books.filter((book) => !book.done)
  }
  return books;
}


const mapStateToProps = (state) => {
  return {
    books: getBooks(state.books,state.filter),
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