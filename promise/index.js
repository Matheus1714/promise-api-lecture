const myPromise = new Promise((resolve, reject) => {
    resolve((value) => {
        return value*2
    })
    reject((value) => {
        return value*3
    })
})

myPromise.then((resolveFunction) => {
    console.log(resolveFunction(3))
})

myPromise.finally(() => {
    console.log('finally')
})

async function ConsoleHello(){
    try{
        let res = await myPromise
        console.log(res(3))
    }catch(err){
        console.error(err)
    }
}
ConsoleHello()
