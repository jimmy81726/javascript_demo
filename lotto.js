const element = document.querySelector("h1");
console.log(element);

element.innerText = "2023/6/15" + element.innerText
element.innerHTML = `<li style="color:red">${element.innerText}</li>`;
// .就是class
// 有空格代表下一階的
const dateEl = document.querySelector("span.date");
dateEl.innerText = "2023/6/15"
console.log(dateEl);
const dateEl2 = document.querySelector("h3 .date");

const dateEls = document.querySelectorAll(".date")
dateEls.forEach(x => x.innerText = getToday())
dateEls[0].remove();


function getToday() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    return `${year}/${month}/${date}`
}


// #就是id
// const startEl = document.querySelector("#start");

// startEl.innerText = "開獎!"
// startEl.addEventListener("click", lottoClick);



function lottoClick() {
    let lottos = []
    const lottoEl = document.querySelector(".lotto-number ul");
    lottoEl.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let lotto = getLotto(start, end);
        lottos.push(lotto);

    }

    for (let i = 0; i < lottos.length; i++) {
        lottoEl.innerHTML += `<li style=${i % 2 == 0 ? "color:red" : "color:blue"}> ${lottos[i].join("-")}</li > `
    }

}