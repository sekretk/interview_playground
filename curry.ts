//example of curry?
const sum = (a: number, b: number) => a + b;

const sumFie = (b: number) => sum(5, b);

sum.apply(undefined, 5)(6);

//DI / IoC?