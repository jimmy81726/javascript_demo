a = -7.7
console.log(Math.PI);
console.log(Math.abs(a));
console.log("================================");
for (i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}
console.log("================================");
/**區域   var區域全域分不清楚
* const就完全不能改了後面也不能+...
*
*
*
*/
let email = "jimmy81726@gmail.com";
console.log(email);
console.log(email.length);
console.log(email[0]);
console.log(email[email.length - 1]);
for (let i = 0; i < email.length; i++) {
    document.write(email[i]);
}

console.log("================================");
let x = 10;
let y = "5";

console.log(x + y);
console.log(x + Number(y));

console.log("================================");

let count = 0;
for (let i = 0; i < 10; i++) {
    console.log(i, count++);
    // 試試看++count
}

console.log("================================");
if (x) {
    // 0,'',NaN,null,undefined => false
    console.log('yes!');
}

// for i in range(len(email)):
//     print(email[i])

const PI = 3.1415926;
let radius = 0;
console.log(radius)
while (false) {
    radius = prompt("請輸入半徑:");
    // ! => not
    if (!isNaN(radius)) {
        break;
    } alert("請輸入數值");

}

let area = radius ** 2 * PI;
console.log(area);

if (radius >= 10) {
    let radius = "5";
    let area = radius ** 2 * PI;
    console.log(area);
}

const result = "半徑為 " + radius + "，面積為 " + area;
console.log(result);
document.write("<h3>半徑為" + radius + "面積為" + area + "</h3>");
        // alert(result);


