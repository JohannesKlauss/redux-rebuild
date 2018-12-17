export default function rebuild<T>(currentState: T, callback: (newState: T) => T): T;
