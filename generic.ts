//generic function?

const doSmth = <T extends number | boolean>(_: T): string => _.toString();

console.log(doSmth(1));
console.log(doSmth(true));//how to make it work?

//generic type
//{a: string, b: number} => {a: boolean, b: boolean}
//{a: string, b: number, c: 1} => {a: boolean, b: boolean, c: boolean}
type record<T> = Record<keyof T, boolean>;
type Result = record<{a: string, b: number}>

//CAB => ABC

//[any, never, {}] => [never,  {}, any]

// never {} any 
//"asda" extends any
//never extends never !