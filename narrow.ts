type Type = 'A' | 'B' | 'C';

const absurd = (_: never) => undefined;

const handle = (type: Type): string => {
    if (type === 'A') {
        console.log("A", type);
        return 'A';
    }

    if (type === 'B') {
        console.log("B", type);
        return 'B';
    }

    absurd(type)

}