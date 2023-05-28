

let start = 1;
let end = 49;
let lottos = [];
document.write("<h2>大樂透</h2>");
// for (let j = 0; j < 5; j++) {
//     let lotto = [];
//     for (let i = 0; i < 6; i++) {
//         number = getLotto(start, end);
//         // lottos[i] = number;
//         lotto.push(number);

//     }
//     // array轉成字串
//     // console.log(lotto);
//     lottos.push(lotto);
//     // lottos[j] = lotto;
//     document.write(`<li style="color:red">${lotto.join(",")}</li>`);
// }
// console.log(lottos);

// 二維(一維在下面的function)
for (let i = 0; i < 5; i++) {
    lotto = getLotto(start, end);
    lottos.push(lotto);
    document.write(`<li style="color:red">${lotto.join(",")}</li>`);

}

// 先一維
function getLotto(start, end, count = 10) {
    let lotto = [];
    for (let i = 0; i < count; i++) {
        number = Math.floor(Math.random() * (end - start + 1)) + start;
        lotto.push(number);
    }
    return lotto;
}

// 把函式當變數使用(函式表達式)
const getRanNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}


