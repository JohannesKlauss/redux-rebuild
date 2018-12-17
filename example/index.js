import rebuild from "../dist";

function reducer(currentState, action) {
  switch(action.type) {
    case 'RENAME_PERSON':
      return rebuild(currentState, nextState => {
        nextState.persons[action.payload.id].name = action.payload.name;

        return nextState;
      });
  }
}