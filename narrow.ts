type Type = 'A' | 'B' | 'C';

const absurd = (_: never) => undefined;

const handle = (type: Type): void => {
    if (type === 'A') {
        console.log("A", type);
        return;
    }
    if (type === 'B') {
        console.log("B", type);
        return;
    }

    absurd(type);

}