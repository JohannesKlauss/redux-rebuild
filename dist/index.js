export default function rebuild(prevState, callback) {
    return callback(JSON.parse(JSON.stringify(prevState)));
}
//# sourceMappingURL=index.js.map