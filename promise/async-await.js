const myPromise = new Promise((resolve, reject) => {
    resolve(1)
    reject(2)
})

const hello = async () => {
    try{
        const res = myPromise
        return res
    }catch(err){
        console.log(err)
    }finally{
        console.log('acabou')
    }
}

let a = hello()

a.then((x)=> {
    console.log(x)
}).catch((err) => {
    console.log(err)
})