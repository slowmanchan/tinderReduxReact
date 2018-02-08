import React, { Component } from 'react';
// glue between react and redux (react-redux)
import { connect } from 'react-redux';
// container component (class vs plain pure function)
// each container should contain logic (smart component)(direct connection to redux)
// each container should care about a piece slice of state
// container should care directly (app does not care about books in booklist)
// or else app would be a container for everything (messy)
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned from this function will show up as props
  // inside BookList (or Whatever is connected with connect)
  // we take the apps state and link it to props
  return {
    books: state.books
  }
}
// BookList in this case will have the books state as props.
// we connected the apps state.books to books key, returned it as an object
// BookList container now can call this.props.books
export default connect(mapStateToProps)(BookList);
