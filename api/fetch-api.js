const fetch = require('node-fetch')

const api = async () => {
    try{
        const res = await fetch('https://api.github.com')
        const data = await res.json()
        return data
    }catch(err){
        console.error(err)
    }
}

api().then((data) => {
    console.log(data)
})