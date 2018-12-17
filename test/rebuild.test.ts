import rebuild from "../src";

type Person = {
    id: number;
    name: string;
    age: number;
    friendIds: number[];
}

type State = {
    persons: Person[];
}

const initState: State = {
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

const expectedState: State = {
    persons: [
        {
            id: 1,
            name: 'Johnson',
            age: 28,
            friendIds: [2, 4, 5]
        },
        {
            id: 2,
            name: 'Jane',
            age: 26,
            friendIds: [1, 5, 3]
        }
    ],
};

function init(): State {
    return {...initState};
}

test('rebuilds deep objects', () => {
    const currentState = init();

    const mutatedState: State = rebuild<State>(currentState, (nextState: State) => {
        nextState.persons[0].name = 'Johnson';
        nextState.persons[1].friendIds[1] = 5;

        return nextState;
    });

    expect(mutatedState).toEqual(expectedState);
    expect(currentState).toEqual(initState);
});

test('return rebuild when callback is omitted', () => {
    const currentState = init();

    const nextState: State = rebuild<State>(currentState);

    nextState.persons[0].name = 'Johnson';
    nextState.persons[1].friendIds[1] = 5;

    expect(nextState).toEqual(expectedState);
    expect(currentState).toEqual(initState);
});