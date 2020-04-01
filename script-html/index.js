let tbody = document.getElementsByTagName('tbody')[0]
let tr = document.createElement('tr')
let tdA = document.createElement('td')
let tdB = document.createElement('td')

tdA.textContent = '3'
tdB.textContent = '4'

tbody.appendChild(tr)
tr.appendChild(tdA)
tr.appendChild(tdB)

let box = document.getElementsByClassName('box')[0]