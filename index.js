// const para = document.createElement("p");
// para.textContent = "Hey I’m red!"
// para.setAttribute("style", "color: red");

// const heading = document.createElement("h3");
// heading.setAttribute("style", "color: blue");
// heading.textContent = "I'm a blue h3";

// const div = document.createElement("div");
// div.setAttribute("style", "border: black 1px solid; background-color: pink")
// const headingInside = document.createElement("h1");
// const paraInside = document.createElement("p");
// paraInside.textContent = "ME TOO!"
// div.appendChild(headingInside);
// div.appendChild(paraInside);

// document.body.appendChild(para);
// document.body.appendChild(heading);
// document.body.appendChild(div)

// // para.onclick = () => alert("Ohhhh")
// para.addEventListener("click", (e) => {
//     console.log(e)
// });

// const btn = document.createElement("button");
// document.body.appendChild(btn);

// btn.textContent = "Click me!";

// function random(number) {
//     return Math.floor(Math.random() * (number+1));
// }

// const changeBackground = (e) => {
//     let bgColor =  `rgb(${random(255)} ${random(255)} ${random(255)}`;
//     e.target.style.backgroundColor = bgColor;
//     // btn.removeEventListener("dblclick", changeBackground)
// }
// btn.addEventListener("dblclick", changeBackground);

// const input = document.createElement("input");
// input.setAttribute("type", "text");
// input.setAttribute("id", "textBox");

// const div = document.createElement("div");
// div.setAttribute("id", "output");

// document.body.appendChild(input);
// document.body.appendChild(div);

// input.addEventListener("keydown", (event) => {
//     div.textContent = `You pressed ${event.key}`
//     event.preventDefault();
// })

// const btn = document.createElement("button");

// document.body.append(btn);

// btn.textContent = "Which power button";
// btn.addEventListener("contextmenu", (e) => 
//     e.preventDefault()
// )

// btn.addEventListener("mouseup", (event) => {
    // let para = document.createElement("p");
    // document.body.append(para)

//     switch (event.button) {
//         case 0: 
//         para.textContent = `Left mouse button`;
//         break;
//         case 1:
//         para.textContent = `middle mouse button`;
//         break;
//         case 2: 
//         para.textContent = `right mouse button`;
//         break;
//         default:
//         para.textContent = `Unknown mouse button`
//         };
// })

// btn.addEventListener('click', (e) => {
//     let keys = [];
//     if (e.shiftKey) keys.push('shift');
//     if (e.altKey) keys.push('alt');
//     if (e.metaKey) keys.push('meta');
//     if (e.ctrlKey) keys.push('ctrl')

//     para.textContent = `keys: ${keys.join("+")}`;


// })

// let track = document.querySelector("#track");
// track.addEventListener('mousemove', (e) => {
//     let log = document.querySelector("#log");
//     log.textContent = `
//     Screen X/Y: (${e.screenX}, ${e.screenY})
//     Client X/Y: (${e.clientX}, ${e.clientY})
//     `
// })

// let input = document.querySelector("#message");
// input.addEventListener("keydown", (event) => {
//     console.log(`key = ${event.key}, code = ${event.code}`);
// })

// const track = document.createElement("div");
// document.body.appendChild(track);
// track.setAttribute("style", "background-color: yellow; height: 200px; width: 300px");

// const text = document.createElement("p");
// document.body.appendChild(text);

// track.addEventListener("mousemove", (e) => {
//     text.innerText = `Screen X/Y ${e.screenX}, ${e.screenY}
//     Client X/Y ${e.clientX}, ${e.clientY}`
// })

// const div = document.createElement("div");
// document.body.appendChild(div)

// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// btn1.textContent = "button 1";
// btn2.textContent = "button 2";
// div.appendChild(btn1);
// div.appendChild(btn2);

// btn1.setAttribute("id", "btn1");
// btn2.setAttribute("id", "btn2");


// div.addEventListener("click", (event) => {
//     let target = event.target;
//     switch (target.id) {
//         case "btn1" : 
//         console.log("yeah btn1")
//         break;
//         case "btn2" :
//         console.log("yeah btn2")
//         break;

//     }
//     console.log(target)


// })


// console.log(btn1.id)

// const div = document.createElement("div");
// div.textContent = "JS Custom Event";
// div.setAttribute("class", "note");

// document.body.appendChild(div);

// function highlight(element) {
//     const bgColor = "yellow";
//     element.style.backgroundColor = bgColor;

//     let event = new CustomEvent("mark", {
//         detail: {
//             backgroundColor: bgColor
//         }
//     });
//     element.dispatchEvent(event);
// }

// function addBorder(element) {
//     element.style.border = "solid 1px red";
// }

// div.addEventListener('mark', (event) => {
//     console.log(this);
//     addBorder(this);

//     console.log(event.detail);
// })

// highlight(div);

const div = document.createElement("div");
document.body.appendChild(div);

const heading = document.createElement("h1");
heading.textContent = "My shopping list"
div.appendChild(heading);

const label = document.createElement("label");
label.setAttribute("for", "shopping-list");
label.textContent = "Enter a new item: "
div.appendChild(label);

const input = document.createElement("input");
input.setAttribute("id", "shopping-list");
input.setAttribute("type", "text");
div.appendChild(input);

const btn = document.createElement("button");
btn.textContent = "Add-item";
div.appendChild(btn);
let list = document.createElement("ul");
div.appendChild(list);


btn.addEventListener("click", (event)=> {
    let liTag = document.createElement("li");
    list.appendChild(liTag)
    let value = input.value;
    // input.value = "";
    let para = document.createElement("p");
    para.textContent = value;
    liTag.appendChild(para)
    let btn2 = document.createElement("button");
    btn2.textContent = "Remove";
    liTag.appendChild(btn2);
    btn2.addEventListener("click", () => {
        btn2.parentElement.remove();
    })

})











