export default function rebuild(currentState, callback) {
    return callback(JSON.parse(JSON.stringify(currentState)));
}
//# sourceMappingURL=index.js.map