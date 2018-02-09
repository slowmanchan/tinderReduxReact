// all reducers get 2 args, state and action
// state args is not app state but,
// the state the reducer is responsible for
// as dictated in the root reducer ie combineReducers({ books: BooksReducer })

// reducers are called when app boots up.
// will return just state first (in this case null)
// will throw an error (book.title throws an error cause null.title)
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
    // never mutate state.  always return a fresh object
      return action.payload

  }
  return state
}
