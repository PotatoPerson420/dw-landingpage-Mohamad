// do whatever

import Header from "../components/Header.js";
import Hero from "../components/Hero.js";

const rootElm = document.querySelector("#root")

function render() {
    rootElm.innerHTML = "";
    rootElm.append(Header())

    let mainElm = document.createElement("main")
    mainElm.append(Hero())

    rootElm.append(mainElm)
}

function init() {
    render()

}

init()

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
