// utilisation du guillement simple inversé
document.body.innerHTML = ""
const app = document.createElement("div")
let n = "marc"
let p = "dahan"
let text = document.createTextNode(`my name is ${n} ${p}`)
app.appendChild(text)
document.body.appendChild(app)