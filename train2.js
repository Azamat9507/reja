console.log("Jak Ma maslahatlari");
const list = [
    "yaxshi talaba boling", // 0 -20
    "togri boshliq tanlang va koproq hato qiling", // 20-30
    "ozingizga ishlashingizni boshlang", // 30-40
    "siz kuchli bolgan narslarni qiling", // 40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling, foydasi yoq", // 60
];

function maslahatBering(a, callback) {
    if(typeof a !== 'number') throw new Error("insert a number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {

        return list[5];
    //     setTimeout(function() {
    //     callback(null, list[5]);
    //         }, 3000);
    }
}
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR", err);
//     else {
//         console.log("javob:",data);
//     }
// });

// console.log("passed here 1");

async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();

