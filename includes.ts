
const arr = [1,2,3];

const includes: (_: number) => boolean = (_) => arr.includes(_);

includes(1);//failed

