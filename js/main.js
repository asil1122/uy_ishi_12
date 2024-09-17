const tab = document.querySelector(".tab")
const box = document.querySelector(".box")
const btn = document.getElementsByClassName("btns")
const slider = document.querySelector(".sliderr")

import { getProductsName, getTabContent, getSlider} from "./service.js";

// const renderBanner = async () => {
//     const data = await getSlider()
//     slider.innerHTML = data.map((item) => `
//         <div>
//             <img class="imgss" src="${item.img}" alt="">
//         </div>
//     `).join("")
// }

// renderBanner()

const renderTabCon = async (name) => {
    const data = await getTabContent(name)
    box.innerHTML = data.map((item) => `
        <div>
        <img src="${item.img}" alt="">
        <h1>${item.title}</h1>
        <p>${item.rame?item.rame:""}</p>
        <p>${item.color?item.color: ""}</p>
        <p>${item.brand}</p>
        <p>${item.price}</p>
        <p>${item.geForce?item.geForce: ""}</p>
        <p>${item.display?item.geForce: ""}</p>
        </div>
    `).join("")
}

const renderTab = async () => {
    const data = await getProductsName()
    
    tab.innerHTML = data.map((item) => `
    <div>
        <img src="${item.img}" alt="">
        <p>${item.text}</p>
        <button class="btns" data-name="${item.name}">${item.name}</button>
    </div>
    `).join("")


    renderTabCon(data[0].name)
}

renderTab()


tab.addEventListener("click", async (e) => {
    const name = e.target.dataset.name;
    if(name){
       await renderTabCon(name)
        for (let i of btn) {
            i.style.color = "";
          }
          e.target.style.color = "red";
        }
    }
)
