

let start = 1;
let end = 49;
let lottos = [];
// document.write("<h2>大樂透</h2>");
// // for (let j = 0; j < 5; j++) {
// //     let lotto = [];
// //     for (let i = 0; i < 6; i++) {
// //         number = getLotto(start, end);
// //         // lottos[i] = number;
// //         lotto.push(number);

// //     }
// //     // array轉成字串
// //     // console.log(lotto);
// //     lottos.push(lotto);
// //     // lottos[j] = lotto;
// //     document.write(`<li style="color:red">${lotto.join(",")}</li>`);
// // }
// // console.log(lottos);

// // 把函式當變數使用(函式表達式要寫前面) 只有一行可不用{}和return
const getRanNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

// // 二維(一維在下面的function)
// for (let i = 0; i < 5; i++) {
//     lotto = getLotto(start, end);
//     lottos.push(lotto);
//     document.write(`<li style="color:red">${lotto.join("~~")}</li>`);
// }

// document.write("=========================================================")

// for (let i = 0; i < lottos.length; i++) {
//     document.write(`<li style="color:blue">${lottos[i].join("-")}</li>`);
// }
// document.write("=========================================================")

// //三元運算子
// a = 10
// b = 20
// c = 0
// if (a > b) { c = a + b } else { c = a - b }
// // c = a + b if a > b else a - b;
// c = a > b ? a + b : a - b;
// console.log(c);
// lottos.forEach((x) => document.write(`<li style="color:blue">${x.join("/")}</li>`))

// document.write("=========================================================")

// // for (let i = 0; i < lottos.length; i++) {
// //     if (i % 2 == 0) {
// //         document.write(`<li style="color:red">${lottos[i].join("-")}</li>`);
// //     } else {
// //         document.write(`<li style="color:blue">${lottos[i].join("-")}</li>`);
// //     }
// // }



// // 三元運算

// for (let i = 0; i < lottos.length; i++) {
//     document.write(`<li style=${i % 2 == 0 ? "color:red" : "color:blue"}> ${lottos[i].join("-")}</li > `);
// }

// // if (i % 2 == 0) {
// //     document.write(`<li style="color:red">${lotto[i].join(",")}</li>`)
// // } else {
// //     document.write(`<li style="color:blue">${lotto[i].join(",")}</li>`)
// // }


// document.write("======================================================================<br>")




// 先一維  可寫後面
//不重複 排序  函式宣告
function getLotto(start, end, count = 6) {
    let lotto = [];
    for (i = 0; i < count;) {
        number = getRanNumber(start, end);
        if (!lotto.includes(number)) {
            lotto.push(number);
            i++
        }
    }
    // else {
    // console.log(lotto, number);
    // i--; //i--  =>i=i-1

    lotto.sort((a, b) => a - b);//排序從小到大  b-a 大到小
    return lotto;
}



let user = {
    name: 'jerry',
    email: 'jerry@gmail.com',
    password: '12345678',
}
console.log(user);
console.log(user.name);
console.log(user.email);
console.log(user.password);
console.log(user['name']);


let users = [{
    name: 'jerry',
    email: 'jerry@gmail.com',
    password: '12345678',
},
{
    name: 'jimmy',
    email: 'jimmy@gmail.com',
    password: '12345678',
},
{
    name: 'kevin',
    email: 'kevin@gmail.com',
    password: '12345678',
}
]
console.log(users);
console.log(users[0]);



// // 使用for 迴圈取值，姓名跟email輸出document

// for (let i = 0; i < users.length; i++) {
//     document.write(`${users[i].name}-${users[i].email}<br>`);
// }
// document.write("=========================================<br>")

// // 使用forEach 迴圈取值，姓名跟email輸出document
// users.forEach((x) => document.write(`${x.name}-${x.email}<br>`))



