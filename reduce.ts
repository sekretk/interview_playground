//Array buildin functions?
const arr = [1,2,4];
//get sum of arr with reduce
arr.reduce((prev,cur)=>prev+cur, 0)


//recurtion?
function sumRecursion(arr:Array<number>, object: Record<string, number>){
    if (arr.length === 0) return object.sum;

    object.sum+=arr.shift();

    sumRecursion(arr, object);
}
const object=  {
    sum: 0
}
sumRecursion(arr, object);


const recSum = (items: Array<number>) => {

}

const infiniteRec = (items: Array<number>) => 
    items.length === 0 ? 0 : items.length === 1 ? items[0] : items[0] + infiniteRec(items.slice(1));

//js generator example

function* generatorSum(arr: Array<number>){
    for (const el of arr){
        yield el
    }
}




arr.sumAll();