const arr = [1,2,3];
// const includes = arr.includes.bind(arr);//type?
const includes =  (item: number) => arr.includes(item);
//Array buildin functions?
//sum arr with reduce?

includes(1);//failed


const sum = arr.reduce((acc, cur) => acc + cur, [])

// [1,2] + [] => [1,2]
// [] + [1, 2] => [1,2]