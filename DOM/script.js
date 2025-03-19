const container = document.querySelector("#container")
const p = document.createElement("p")
p.textContent = "Hey I'm red!"
p.style.color = "red"
container.appendChild(p)

//an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3")
h3.textContent = "I'm a blue h3"
h3.style.color = "blue"
container.appendChild(h3)
/*
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const div = document.createElement("div")
const pp = document.createElement("p")
const h1 = document.createElement("h1")

div.appendChild(pp)
div.appendChild(h1)

div.setAttribute("style", "background: pink; border: black;")
pp.textContent = "ME TOO!"
h1.textContent = "I'm in a div"
container.appendChild(div)

const buttons = document.querySelectorAll("button")

buttons.forEach(
    (button) => {
        button.addEventListener("click", () => {
            alert(button.id)
        })
    }
)
