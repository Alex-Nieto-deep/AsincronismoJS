const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('DO Something Async'), 3000)
        : resolve(new Error('Test Error'))
    })
}

const doSomething = async (done) => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async (done) => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch {
        console.error(error)
    }
}


console.log('Before 1');
anotherFunction();
console.log('After 1');
