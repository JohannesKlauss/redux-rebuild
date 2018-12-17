export default function rebuild<T>(currentState: T, callback?: (newState: T) => T): T {
    if(callback) {
        return callback(JSON.parse(JSON.stringify(currentState)));
    }

    return JSON.parse(JSON.stringify(currentState));
}