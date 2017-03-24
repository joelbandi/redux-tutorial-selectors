import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllBooks, getDoneTrue, getDoneFalse } from '../actions'


class App extends Component {

  render() {
    console.log(this.props);
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
        <button onClick={this.props.getDoneTrue}>done</button>
        <hr/>
        <button onClick={this.props.getDoneFalse}>not done</button>
      </div>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    showAllBooks,
    getDoneFalse,
    getDoneTrue
   },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);