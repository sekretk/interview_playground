//genertic function?

const toBeGeneric: myGenFunction<T> = <T extends number | string>(val: T): Array<T> => [val];


const res1: Array<number> = toBeGeneric(1);

toBeGeneric(2);
const res2: Array<string> = toBeGeneric('hello');
toBeGeneric(true);//error!

//Generic type?
type myGenFunction<T> = T extends number| stringr