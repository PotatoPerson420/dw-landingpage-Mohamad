export default function header() {

    let headerELm = document.createElement("header")
    headerELm.classList.add("header") //fuck ass white space make sure no white space

    headerELm.innerHTML = `
    <div class="brand">logo</div>
    <button class="header__switch">switch</button>

    `

    return headerELm;
}