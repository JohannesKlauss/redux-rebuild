export default function rebuild<T>(prevState: T, callback: <T>(copiedState: T) => T): void;
