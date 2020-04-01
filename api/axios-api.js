const axios = require('axios')

const api = async () => {
    try{
        const data = await axios.get('https://api.github.com')
        return data
    }catch(err){
        console.error(err)
    }
}

api().then((data) => {
    console.log(data)
})