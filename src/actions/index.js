// actions are sent to all reducers in your app
export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action,
  // an object with a type property and payload.
  return {
    // purpose of action
    type: 'BOOK_SELECTED',
    // payload, a piece of data describing the action.
    payload: book
  };
}
