const element = document.querySelector("h1");
console.log(element);

// element.innerText = "2023/6/15" + element.innerText
element.innerHTML = `<li style="color:red">${element.innerText}</li>`;
// .就是class
// 有空格代表下一階的
const dateEl = document.querySelector("span.date");
console.log(dateEl);
// const dateEl2 = document.querySelector("h3 .date");

const dateEls = document.querySelectorAll(".date")
dateEls.forEach(x => x.innerText = getToday())
dateEls[0].setAttribute("style", "color:black;fontsize=16")
showTime()
click = false;

function showTime() {
    dateEls[0].innerText = getTime();
    setTimeout(() => {
        showTime();
        if (!click) {
            lottoClick()
        }
    }, 1000);

}


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
    const lottoEl = document.querySelector(".lotto-number");
    lottoEl.innerHTML = "";
    click = true;
    for (let i = 0; i < 5; i++) {
        let lotto = getLotto(start, end);
        lottos.push(lotto);

    }
    let htmlText = "<table border=1>";
    for (let i = 0; i < lottos.length; i++) {
        htmlText += "<tr>";
        for (let j = 0; j < lottos[i].length; j++) {
            htmlText += `<td>${lottos[i][j]}</td>`;
        }
        htmlText += "</tr>";
    }
    htmlText += "</table>";
    lottoEl.innerHTML = htmlText;

}
function getTime(fullTime = true) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = String(now.getSeconds()).padStart(2, "0");

    if (fullTime) {
        return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
    }

    return `${year}/${month}/${date}`;
}