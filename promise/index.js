const myPromise = new Promise((resolve, reject) => {
    resolve(1)
    reject(2)
})

myPromise.then((a) => {
    console.log(a)
}).then(() => {
    console.log()
}).catch((err) => {
    console.error(err)
}).finally(() => {
    console.log('acabou')
})