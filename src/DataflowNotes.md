Step 1

User clicks button #2

Step 2

Action Creator
function(
  return {
    type: BOOK_SELECTED,
    book: { title: 'memes'}
  }
  )

Action creator returns an action (plain js object)

Action auto sent to all reducers
Switch(action.type) {
  case BOOK_SELECTED
    return action.book
  default
    return state
}

step 3
activeBook prop on state set to the value returned from the active book reducer

{
  activeBook: { title: 'memes'}
  books: [ {title: 'dtower'}, { title: 'memes'}]
}

step 4
All reducers processed the action and returned new state.
New state has been assembled.  
Noitify containers of the changes to state.
On notific, containers will rerender new props.
