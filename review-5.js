//usage de l'opérateur void

//The void operator evaluates the given expression and then returns undefined.

//the void operator usage


document.body.innerHTML = ""
const app = document.createElement("div")
document.body.appendChild(app)

const addToTheDOM = (text, elem = `div`, attribs=[]) => {
    let tag = document.createElement(elem)
    let txt = document.createTextNode(text)
    if (attribs.length) {
        for (let i = 0; i<attribs.length; i++) {
            tag.setAttribute(attribs[i][0], attribs[i][1]);
            //tag.setAttribute("href", "#");
            //tag.setAttribute("style", "display:inline-block;width:100%")
        }
    }
    tag.appendChild(txt)
    app.appendChild(tag)
}


void function test() {
  addToTheDOM(`boo`)
}();

try {
  test();
} catch (e) {
  addToTheDOM(e)
  // expected output: ReferenceError: test is not defined
}
void function iife() {
    addToTheDOM(`hello world i'm an iife !`, `a`, [[`href`, `#`]])
}();

try {
  iife();
} catch (e) {
  addToTheDOM(e)
  // expected output: ReferenceError: test is not defined
}