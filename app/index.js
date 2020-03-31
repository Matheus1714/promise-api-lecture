const createElement = (username, email) => {
    let tr = document.createElement('tr')
    let tdUsername = document.createElement('td')
    let tdEmail = document.createElement('td')
    let tbody = document.getElementsByTagName('tbody')[0]

    tdUsername.textContent = username
    tdEmail.textContent = email

    tbody.appendChild(tr)
    tr.appendChild(tdUsername)
    tr.appendChild(tdEmail)
}

const getElements = async () => {
    try{
        const res = await fetch('http://localhost:3000/users/')
        console.log(res)
    }catch(err){
        console.error(err)
    }
}

getElements()
createElement('lkdfsdf', 'lsdhfsdj')