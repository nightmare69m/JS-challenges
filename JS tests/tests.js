// // let myString ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"
// // let solution = myString.split(",")
// // .filter(function(ele){
// //    return isNaN(ele);
// // })
// // .map(function(ele){
// //     return ele ==="_"? " " : ele
// // })
// // .reduce(function (acc,current){
// //  return acc+current
// // }).slice(1,-1)
// // console.log(solution)

// //                                  obj sec


// // let member = {
// //  name:"Elzero",
// //  age:38,
// //  country:"Egypt",
// //  fullDetails : function(){
// //     return `my name is ${member.name} , my age is ${member.age}, i live in ${member.country}`
// //  }

// // }
// // console.log(member.name); // Elzero
// // console.log(member.age); // 38
// // console.log(member.country); // Egypt
// // console.log(member.fullDetails());


// // let a = 1;

// // let threeNums = {
// //   b: 2,
// //   c: 3,
// //   d: 4,
// // };

// // let twoNums = {
// //   e: 5,
// //   f: 6,
// // };

// // // Create Your Object Here in One Line
// // let finalObject = Object.assign(a,threeNums,twoNums)

// // console.log(finalObject);

// // /*
// //   a: 1
// //   b: 2
// //   c: 3
// //   d: 4
// //   e: 5
// //   f: 6
// // */


// // The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;
// let keys = Object.keys(myFavGames)
// for (let i = 0; i < objectLength; i++) {
//   let current_game = myFavGames[keys[i]]
//   let gameName =keys[i]
//   console.log(`The Game Name Is ${gameName}`);
//   console.log(`The Publisher Is ${current_game.publisher}`);
//   console.log(`The Price Is ${current_game.price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (current_game.bestThree) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${current_game.bestThree.one}`);
//     console.log(`Second => ${current_game.bestThree.two}`);
//     console.log(`Third => ${current_game.bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }

// // Ouput

// // "The Game Name Is Trinity Universe"
// // "The Publisher Is NIS America"
// // "The Price Is 40"
// // "####################"
// // "The Game Name Is Titan Quest"
// // "The Publisher Is THQ"
// // "The Price Is 50"
// // "- Game Has Releases"
// // "First => Immortal Throne"
// // "Second => Ragnarök"
// // "Third => Atlantis"
// // "####################"
// // "The Game Name Is YS"
// // "The Publisher Is Falcom"
// // "The Price Is 40"
// // "- Game Has Releases"
// // "First => Oath in Felghana"
// // "Second => Ark Of Napishtim"
// // "Third => origin"
// // "####################"





//               DOM



// let links =document.querySelector(".link")
// links.setAttribute = ("")
// // console.log(T.innerHTML)











// insertion sort

// let arr =[6,1,7,4,2,9,8,5,3];
// for(i=1;i<arr.length;i++){
//     let j = i-1
//     let temp = arr[i] 
//     while(arr[j]>temp){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1]=temp
// }
// console.log(arr)