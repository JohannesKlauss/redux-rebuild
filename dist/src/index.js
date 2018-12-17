"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rebuild(currentState, callback) {
    if (callback) {
        return callback(JSON.parse(JSON.stringify(currentState)));
    }
    return JSON.parse(JSON.stringify(currentState));
}
exports.default = rebuild;
//# sourceMappingURL=index.js.map