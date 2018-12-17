#redux-rebuild

redux-rebuild helps you keeping your redux state immutable.

## Installation

`npm install redux-rebuild`

## Usage

In your reducer, import the `rebuild` function from the installed module and
call rebuild when you want to return a new state. It takes the current state
passed to your reducers as the first argument and a callback function as the
second where you mutate your state given by the callback and return it.

```javascript
import rebuild from 'redux-rebuild';

// reducer function
function reducer(currentState, action) {
  switch(action.type) {
    case 'RENAME_PERSON':
      return rebuild(currentState, nextState => {
        nextState[action.payload.index].person.name = action.payload.name;
        
        return nextState;
      });
  }
}
```

If you are not a fan of callbacks and want to keep it straightforward you can
also omit the second parameter. The `rebuild` function then will just return
the nextState object:

```javascript
import rebuild from 'redux-rebuild';

// reducer function
function reducer(currentState, action) {
  switch(action.type) {
    case 'RENAME_PERSON':
      const nextState = rebuild(currentState);
      
      nextState[action.payload.index].person.name = action.payload.name;
      
      return nextState;
  }
}
```

## Under the hood

The `rebuild` function is just a simple wrapper function for `JSON.parse(JSON.stringify())`
which seems to be the fastest way to copy any kind of object in general.
Since redux store object should be JSONs, there won't be any kind of parsing
problems (i.e. functions are not allowed in a redux store).

## Motivation

One main principle in redux says, that state should never be mutated. You get
the old state and return a new state object, which has no ties to the old state
whatsoever.

Most of the time you can get away with using the spread operator, but as soon
as objects, arrays or arrays of objects come into play, developers tend to
get lazy and spread it out anyway.

But using the spread operator on nested objects will mutate the old state. For
example:

```js
const oldState = {
  persons: [
    {
      id: 1,
      name: 'John',
      age: 28,
      friendIds: [2, 4, 5]
    },
    {
      id: 2,
      name: 'Jane',
      age: 26,
      friendIds: [1, 6, 3]
    }
  ],
};
```

If you want to change your state you would have to slice the array, rebuild it
and create a whole new object for the person you want to change.

But in redux you should create a new state object anyway, this is why most
developers use the spread operator. But using the spread operator in nested
objects gets hairy, because you can easily mutate the referenced object of your
old state and inject it into the new one.

This is where redux-rebuild will help you keep your state objects separated.

## Authors

* Johannes Klauss

---

MIT License.

---