

const rootElm = document.querySelector("#root")

function render () {
    rootElm.innerHTML = "";

    
}

function init(){
    render()

}

init()

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
