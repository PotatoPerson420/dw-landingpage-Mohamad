export default function Hero() {

    let heroElm = document.createElement("section")
    heroElm.classList.add("hero")

    heroElm.innerHTML = `
    <img src="${hero.image}" alt="${hero.headline}">
    <div>
        <h1>${hero.headline}</h1>
        <p>${hero.copy}</p>
        <button><img src="${hero.icon}"> lol im text</button>

    </div>
    `

    return heroElm;
}
