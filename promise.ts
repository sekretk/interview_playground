//Promise.all  Promise.race?
const run = async () => {
    const result = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
}

//

const wait1SecsThenReturnValue: Promise<string> = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('hello')
    }
    ,1000)
})

wait1SecsThenReturnValue.then(()=>{})

console.log(wait1SecsThenReturnValue); //statuses?
