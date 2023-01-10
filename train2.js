// console.log("Jak Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0 -20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "ozingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narslarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq", // 60
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {

//         return list[5];
    //     setTimeout(function() {
    //     callback(null, list[5]);
    //         }, 3000);
//     }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR", err);
//     else {
//         console.log("javob:",data);
//     }
// });

// console.log("passed here 1");

// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();



// const list = [
//     "be a good student",
//     "choose the right path and make mistakes",
//     "start working for yourself",
//     "do what you are good at",
//     "invest in youth",
//     "take it easy now, it not worth it",
// ];

// function getAdvice(yosh, callback) {
//     if(typeof yosh !== "number") callback("should be integer",null);
//     else if (yosh > 60) callback(null, list[5]);
//     else if (yosh > 50) callback(null, list[4]);
//     else if (yosh > 40) callback(null, list[3]);
//     else if (yosh > 30) callback(null, list[2]);
//     else if (yosh > 20) callback(null, list[1]);
//     else {
//         setTimeout(() => {
//             callback(null, list[5])
//         }, 2000);
//     }
// }

// getAdvice(25, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else console.log(`Jack Ma said ${data}`);
// });

// 📌  Masalan: findBig([4, 5, 9, 12,  3]) return qilishi kerak 3ni, yoki findBig([0, 100, 5]) return 1

//   G-task 
function findBig(arr) {

let max = 0
for(let i = 0; i < arr.length; i++) {
    if(arr[i]>max) {
        max = arr[i]
    }
}
return arr.indexOf(max)
    
}

const num1 = findBig([0, 5, 9, 12, 121, 3]);
console.log(num1)

