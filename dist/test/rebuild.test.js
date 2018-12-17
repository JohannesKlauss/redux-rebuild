"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var src_1 = tslib_1.__importDefault(require("../src"));
var initState = {
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
var expectedState = {
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
function init() {
    return tslib_1.__assign({}, initState);
}
test('rebuilds deep objects', function () {
    var currentState = init();
    var mutatedState = src_1.default(currentState, function (nextState) {
        nextState.persons[0].name = 'Johnson';
        nextState.persons[1].friendIds[1] = 5;
        return nextState;
    });
    expect(mutatedState).toEqual(expectedState);
    expect(currentState).toEqual(initState);
});
test('return rebuild when callback is omitted', function () {
    var currentState = init();
    var nextState = src_1.default(currentState);
    nextState.persons[0].name = 'Johnson';
    nextState.persons[1].friendIds[1] = 5;
    expect(nextState).toEqual(expectedState);
    expect(currentState).toEqual(initState);
});
//# sourceMappingURL=rebuild.test.js.map