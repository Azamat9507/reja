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
//     if(typeof a !== 'number') callback("insert a number",null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//         callback(null, list[5]);
//             }, 3000);
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



// function giveAdvise(num, callback) {
//     if (typeof num !== "number") callback("raqam kiriting", null);
//     else if (num > 100) callback(null, "yuzdan katta");
//     else{
//         callback("yuzdan kichkina");
//     }
// }

// giveAdvise(105, (err, data) => {
//     if (err) console.log("ERROR:", err)
//     else {
//         console.log("javob:", data);
//     }
// });



// oddiy functionlar

// const num = function(a, b) {
//     return a + b
    
// }

// console.log(num(2, 6)); 
 
// H - task
// function reverseString(str) {
//     return str.split("").reverse("").join("")
// }

// console.log(reverseString("javascript")); 

// // H- task 2chi usul
// class ReverseString {
//     constructor(str) {
//       this.str = str;
//     }
  
//     reverse() {
//       return this.str.split('').reverse().join('');
//     }
//   }
//   const reverse = new ReverseString("javascript");
//   console.log(reverse.reverse());
    
// function getPositive(numbers) {
//     return numbers.filter(function(num) {
//       return num > 0;
//     });
//   }
  
//   console.log(getPositive([0, -15, 5, -3, 2, -8, 9, -11])); // [5, 2, 9]

// const magazine = "Lorem ipsum MrA sit amet, hack consecteture asipising you elit, sed do temor"
// const note = "MrA hack you";

// function canMurderWrite(note) {
//     const magazineWords = magazine.split(" ");
//     const noteWords = note.split(" ");
//     const magazineWordCount = {};

//     for (let i = 0; i < magazineWords.length; i++) {
//         console.log(magazineWords);
//         const a = magazineWords[i];
//         if (magazineWordCount[a]) {
//             magazineWordCount[a]++;
//         } else {
//             magazineWordCount[a] = 1;
//         }
//         console.log(magazineWordCount);
        
//     }
//     for (let i = 0; i < noteWords.length; i++) {
//         const a = noteWords[i];
//         console.log(noteWords);
//         if (!magazineWordCount[a]) {
//             return false;
//         } else {
//             magazineWordCount[a]--;
//         }
//     }

//     return true;
// }
// const result = canMurderWrite(note);
// console.log("Hacker hack qila oladimi:", result);

  
// const magazine = "Lorem ipsum MrA sit amet, hack consecteture asipising you elit, sed do temor"
// const note = "MrA hack you";

// function canMurderWrite(note) {
//     const magazineWords = magazine.split(" ");
//     const noteWords = note.split(" ");
    
//     return noteWords.every(word => magazineWords.includes(word));
    
// }

// const result = canMurderWrite(note);
// console.log("Mr A hack qila oladi?",result);
