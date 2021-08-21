document.body.innerHTML = ""
const app = document.createElement("div")
app.setAttribute("id", "app");
document.body.appendChild(app)
for (let i=0; i<5; i++)  {
      let a = document.createElement("a")
      a.setAttribute("href", "#");
      a.setAttribute("style", "display:inline-block;width:100%")
      let text = document.createTextNode("Element " + i)
      a.appendChild(text)
      app.appendChild(a)
      a.onclick = () => {
          console.log("Element " + i + "has been clicked")
      }
}

let app_sibling = document.createElement("div")
document.body.appendChild(app_sibling)
for (let i = 0; i < app.children.length; i++) {
    let mychildNodes_div = document.createElement("div")
    let txt = app.children[i].nodeName
    let mychildNodes_textNODE = document.createTextNode(txt)
    mychildNodes_div.appendChild(mychildNodes_textNODE)
    app_sibling.appendChild(mychildNodes_div)
}
   

