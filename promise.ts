//Promise.all  Promise.race?
const run = async () => {
    const result = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
}
