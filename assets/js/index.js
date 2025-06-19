console.log("работает")
// 1) Получить список
let catalogList = document.querySelector(".catalog-list")
console.log(catalogList);
let cakes = [
    {
        name: "Торт  Прага",
        prise: 1100,
        descript: "Распространено мнение, что оригинальный рецепт торта «Прага» был разработан в столице Чехии. Однако в рецептах чешской кухни данный торт отсутствует. На самом же деле, рецепт «Праги», который полюбился в СССР",
        image: "прага.webp",
        name: "Торт  кортоха",
        prise: 800,
        descript: "оно не с земли вы че  оно вкусное",
        image: "картошка.jpg",


    },
    {
        name: "Торт  Красный бархат",
        prise: 700,
        descript: "очень вкусный но рот крастный",
        image: "бархат.jpg",



    },
]
cakes.forEach((cake) => {
    catalogList.insertAdjacentHTML("beforeend", `<article class="catalog-item">
            <img src="./assets/images/${cake.image}" alt="">
            <div class="item-content">
              <div class="item-info">
                <h3>${cake.name} </h3>
                <p>${cake.descript}</p>
              </div>
              <p class="item-price"> ${cake.price}">тыс./штука</p>
              <button class="item-bth-order"> Купить</button>
            </div>
          </article>
`)
})