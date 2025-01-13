const arr = [1,2,3];

const includes = (item: number) => arr.includes.bind(arr);

includes(1);//failed

