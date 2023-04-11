"use strict";
//
// var a=5
// var b=4

// console.error(a+b)

// var a="5"

// console.log(typeof(Number(a)));

// var a="3"
// var b=4
// var c=a*b

// console.log(c);

// var reqem1=10
// var reqem2="Eli"

// console.log(reqem1+reqem2);
// console.log(reqem1-reqem2);
// console.log(reqem1*reqem2);
// console.log(reqem1/reqem2);

// Number,
// String,
// Boolean,
// undefined,
// null,
// Symbol,
// Object,
// BigInt

// var a=true
// console.log(typeof(a));

// var ad
// console.log(ad);

// var number="Elmeddin"
// console.log(first_name)
//
// var reqem1=5
// console.log(reqem1)

// var a=5
// var a=a+3
// console.log(a);
// var a = 4;
// var b = 10;
// a=b;
// console.log(a);

// var a=5

// a=a+4
// a/=4
// console.log(a);

// var a = 5;
// var a = 3;
//  a = 4;
// console.log(a);

// VAR  , LET  ,CONST

// let a=5
//  a=4

// console.log(a);

// const a = 5;
// const a=3
// a = 2;
// console.log(a);

// const password="user123"

// var password="leyla111"
// console.log(password);

/*
cascsacas
ascasc
asc
asc
asc
asc
asc*/

//sascscs
// ascasc

// let firstName="Eli"
// console.log(firstName.toLowerCase());

// let sentence="Seyfeler arasinda en cox sevdiyim seyfe bu seyfedir"
// let result=sentence.toLowerCase().replace("seyfe","sehife")
// console.log(result);

// const password = "12345";
// // console.log(typeof(password));

//  password = "6666";

// console.log(password);

// let firstName="Eli"

// let lastName=" Ezizov"

// alert(firstName.concat(lastName)+" xos gelmissiniz:)");

// console.log(ad.toLowerCase());
// console.log(ad.toUpperCase());

// let firstName=prompt("Adinizi daxil edin:")
// let lastName=prompt("Soyadinizi daxil edin:")

// alert(firstName + " "+ lastName+" xos geldiz");

// let developer = {
//   firstName: "Elmeddin",
//   lastName: "Eliyev",
//   age: "33",
//   hobby: ["football", "tennis", "music", "chess"],
//   adress: {
//     city: ["Baku", "Susa", "Agsu", "Astara", "Sumqayit", "Goycay", "Agcabedi"],
//     country: ["Africa", "Suria", "Afganistan", "Somali", "India", "Antraktida"],
//   },
// };
// console.log(developer.adress.country);

// let telephones = [
//   { ad: "Samsung", il: 1998 },
//   {
//     ad: "Apple",il: 1995,
//   },
// ];
// console.log(telephones[1].ad);

// let reqem = 6;

// reqem1=reqem1+1
// reqem1+=1
// reqem-=1
// reqem/=2
// reqem=reqem/2
// reqem--
// console.log(reqem);

// let firstNameOne="Eliw"
// let firstNameTwo="Eliska"

// firstNameOne=firstNameTwo
// console.log(firstNameOne);

// let a=2
// let b=3

// b=a
// console.log(b);

// let developer={
//     ad:"Balaeli",
//     soyad:"RangeRover",
//     age:75,

// }

// let meyxanaci={...developer,taland:"Qafiye tutmaq"}
// console.log(meyxanaci);

// delete developer.age

// console.log(developer);

// let reqemler=[2,4,6,8]

// reqemler[0]=100

// console.log(reqemler);

// let ad = "leyla";

// if (ad.toUpperCase() == "LEYLA") {
//   console.log(`Salam xos gelmisen ${ad}`);
// }
//  else {
//   console.log("yazdiginiz ad movcud deyil");
// }

// let reqem=60

// if(reqem<=60){
//     console.log("Zeif gedirsen");
// }
// else if(reqem<90){
//     console.log("Normal gedirsen");
// }
// else if(reqem<180){
//     console.log("Ucassan??!");
// }
// else{
//     console.log("Hereket etmirsen");
// }

let reqem = prompt("Reqem daxil edin");

if (reqem > 1000 && reqem < 100000) {
  if (reqem % 3 == 0) {
    alert(`Sizin daxil etdiyiniz ${reqem} 3-e qaliqsiz bolunur`);
  } else {
    alert("Daxil etdiyiniz reqem 3-e bolunmur");
  }
} else {
  alert("Sizin daxil etdiyiniz reqemler 1000 ve 100_000 araliginda deyil");
}
