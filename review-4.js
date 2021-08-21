// utilisation des paramètres par défaut dans une fonction
document.body.innerHTML = ""
const app = document.createElement("div")
document.body.appendChild(app)

const log = (nom = `marc`, prenom = `dahan`) => {
    let spn = document.createElement("span")
    let text = document.createTextNode(`my name is ${nom} ${prenom}`) 
    spn.appendChild(text)
    app.appendChild(spn)
}

log()
const brck = document.createElement("br")
app.appendChild(brck)
log(`titi`, `toto`)
