const arr = [1,2,3];
// const includes = arr.includes.bind(arr);//type?
const includes =  (item: number) => arr.includes(item);

includes(1);//failed