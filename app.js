const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// filter-buttons structured
let buttonsDOM = document.querySelector(".btn-container")

const buttonadd = (text) => {
  const newBtn = document.createElement("button")
  newBtn.textContent = text
  newBtn.id = `${text}`
  newBtn.classList.add("btn", "btn-primary", "btn-item")
  newBtn.type = "button"
  buttonsDOM.append(newBtn)

  // adding event of Buttons
  newBtn.onclick = function () {
    menuItemsDOM.innerHTML = ""

    if(newBtn.textContent === "Korea") korea.forEach(item => singleItemAdd(item))
      else if(newBtn.textContent === "Japan") japan.forEach(item => singleItemAdd(item))
        else if (newBtn.textContent === "China") china.forEach(item => singleItemAdd(item))
          else  menu.forEach(item => singleItemAdd(item))
  }
}

buttonadd("All")
buttonadd("Korea")
buttonadd("Japan")
buttonadd("China")

// Categorize meals  according to category by making lists

let korea = []
let japan = []
let china = []

function categorizeMeal(info) {
  info.category === "Korea" ? korea.push(info) :
    info.category === "Japan" ? japan.push(info) :
      info.category === "China" ? china.push(info) :
        null
}

menu.forEach(item => {
  categorizeMeal(item)
});




// Menü Items design
const menuItemsDOM = document.querySelector(".row")
// Default first Page View
menuItemsDOM.append(menu.forEach(item => singleItemAdd(item)))
menuItemsDOM.classList.add("menu-items")


function singleItemAdd(info) {
  const newItemsDOM = document.createElement("div")
  newItemsDOM.classList.add("col-sm-6")
  //newItemsDOM.style.marginLeft = "3px"
  menuItemsDOM.appendChild(newItemsDOM)

  // frame of menuItemsDOM added
  const frameDOM = document.createElement("div")
  frameDOM.classList.add("row", "menu-items")
  newItemsDOM.append(frameDOM)


  //image of Item design
  const imageInhalt = document.createElement("img")
  imageInhalt.classList.add("col-sm-6", "photo")
  imageInhalt.src = `${info.img}`
  frameDOM.append(imageInhalt)

  //text of Item design   
  const textInhaltDOM = document.createElement("div")
  textInhaltDOM.classList.add("col-sm-6")
  textInhaltDOM.innerHTML = `<div><h4>${info.title}  ${info.price} </h4> <hr>  <p class="menu-text">${info.desc} </p>`
  frameDOM.append(textInhaltDOM)



}

// menu.forEach(meal => {
//   singleItemAdd(meal)

// });








// The click-properties link added
