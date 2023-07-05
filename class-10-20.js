// class-11 javascript math 
// + যোগ 
 var pricAe_1 = 10 ;
 var pricAe_2 = 20 ;
 var total = pricAe_1 + pricAe_2 ;
 console.log(total);
 console.log(pricAe_1 + pricAe_2);
 // - বিয়োগ 
 var biyog = 10;
 var biyog_2 = 20;
 var total_biyog = biyog - biyog_2;
 console.log(total_biyog);
 console.log(biyog - biyog_2);
 // gon (*)
 var gon_1 = 20 
 var gon2 = 10 
 var totalGon = gon_1 * gon2;
 console.log(totalGon);
 console.log(gon_1 * gon2);
  // ভাগ (/)
  var vag = 10 ;
  var vag_2 = 2 ;
  var totalVag = vag / vag_2;
  console.log(totalVag);
  console.log(vag / vag_2);
  // ভাগ শেষ (%)
  var vagSes = 11 ;
  var vagSes_2 = 2 ;
  var totalVagSes = vagSes % vagSes_2 ;
  console.log(totalVag);
  console.log(vagSes % vagSes_2);
  
  
  
// class-12 javaScript Math 
// Math.abs() নেগেটিব মান কে পযিটিব আউটপুট পেতে ব্যাবহার করে
var absMath = -55 ;
absMath = Math.abs(absMath);
console.log(absMath);
// Math.round() দশমিকের পরের মান বাদ দিতে ব্যবহার করে 
 var mRound = 20.20 ;
 mRound = Math.round(mRound)
 console.log(mRound);
 console.log(Math.round(mRound));
// Math.ceil()
var mathCeil = 20.200 
mathCeil = Math.ceil(mathCeil);
console.log(mathCeil);
console.log(Math.ceil(mathCeil));
// Math.floor()
var floorMath = 40.60;
floorMath = Math.floor(floorMath)
console.log(Math.floor(floorMath));
// Math.random()
 var randomMath = Math.random();
 

// class-13  assignment class 



// class-14 conditional statement 
// conditional statement introduction 


// class-15 if condi 
var alorPrice = 20 ;
if (alorPrice < 10) {
  console.log('ভাই আমারে ১০ কেজি আলু দেন');
}
if (alorPrice > 10) {
  console.log('থাক ভাই আমি আলু কিনব না');
}
if (alorPrice = 10) {
  console.log('ভাই আমারে ১ কেজি আলু দেন বেশি দিয়েন না');
}


// class - 16 else contional statement 
// জখন দুইটা condition  নিয়ে কাজ করতে হয় তখন আমরা প্রথমে  if এবং পরে else ব্যবহার করবো। 
var golAlo = 20 ;
if (golAlo <= 10) {
  console.log('ভাই ৫ কেজি গোল আলু দেন');
} else{
  console.log('না ভাই আমি ডাল আর কাচাঁ মরিচ দিয়া কাজ চালাই নিবো আলু লাগবে না');
}



// class-17 else of condition 
// যখন আমাদের অধিক পরিমান কন্ডিশন নিয়ে কাজ করতে হয় তখন আমরা else if কন্ডিশন ব্যবহার করব প্রতমনে if এবং তারপরেই প্রয়োজন অনুশারে  else if কে একাধিক বার ব্যবহার করবো।
var stadyTourFee = 1000
var tourDate = 9
if (stadyTourFee < 100) {
  console.log('স্যার আমার জন্য একটা সিট রাখবেন');
}
else if (stadyTourFee > 100) {
  console.log('বন্ধু বান্দব থাইকা টাকা মারতে পারলে যাব');
}
else if (stadyTourFee = 1000) {
  console.log('চল বন্ধু ঘুইরা আসি');
}
else {
  console.log('কপালে কি আছে দেখা যাক');
}


// class - 18 switch statement 
// আমাদের যখন অনেক পরিমান কন্ডিশন নিয়ে কাজ করতে হবে েখন আমরা এটা ব্যবহার করব 
var getDay = new Date ;
getDay = getDay.getDay();
switch(getDay){
  case 0:
    console.log('শনিবার');
    break;
  case 1:
    console.log('রবিবার');
    break;
  case 2:
    console.log('সোমবার');
    break;
  case 3:
    console.log('মঙ্গলবার');
    break;
  case 4:
    console.log('বুধবার');
    break;
  case 5:
    console.log('বাৃহস্পতিবার');
    break;
  case 6:
    console.log('শুক্রবার');
    break;
  default:
  console.log('404 Erorr');
}


// class - 19  javascript  date getMathoud
var d = new Date();
// মাসের কত তারিখ তা জানতে 
console.log(d.getDate());
// বার জানেত 
console.log(d.getDay());
// বছর জানতে 
console.log(d.getFullYear());
// ঘন্টা জানতে 
console.log(d.getHours());
// মিলি সেকেন্ড জানতে 
console.log(d.getMilliseconds());
// মিনিট জানতে 
console.log(d.getMinutes());
// মাস জানেত 
console.log(d.getMonth());
// সেকেন্ড জানেত 
console.log(d.getSeconds());
// -- 
console.log(d.getTime());
// তারিখ এবং টাইম  একসাথে জানেত 
console.log(d.toLocaleString());
// তারিখ মাস বছর একসাথে জানতে 
console.log(d.toLocaleDateString());
// লোকাল টাইম জানতে 
console.log(d.toLocaleTimeString());


// class-20 javaScript Array 
var myArry = ['rifat', 'mehedi', 'hasam', 10, 50]
console.log(myArry);
// change array data 
myArry[1] = 40
console.log(myArry);