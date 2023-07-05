// class-21 topic= array pop() push() shift() unshift()
var newArray = ['alo','kola','mas','vat']
// pop()
newArray.pop();
console.log(newArray);
// push()
newArray.push(50)
console.log(newArray);
//  shift()
newArray.shift();
console.log(newArray);
// unshift()
newArray.unshift('alo')
console.log(newArray);
// array ar data replase 
newArray[1] = 'bal'
console.log(newArray);


// class-22 topic arry slice() splice()
var sliceSpliceTest = ['rifat','hasan','mehedi','rakib','alom']
var itsSlice = sliceSpliceTest.slice(2,3)
console.log(itsSlice);
//  splice()
sliceSpliceTest.splice(0,2, 'Mehedi Hasam Rifat')
console.log(sliceSpliceTest);


// class-23 topic for loop 
// run array in for loop 
var array = [50, 60, 70, 80, 90, 100]
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
}
// for loop
for (var i = 1; i <= 10; i++) {
    console.log(i + ' mehedi hasan rifat');    
}


// class- 24 topic= while loop 
var whileTest = 0 ;
while (whileTest<=10) {
    console.log(whileTest+ ' while loop test');
    whileTest++
}


// class-25 topic function
// basic function 
function myFastFunction(){
    var num = 10 ;
    var num1 = 10;
    var total = num + num1;
    console.log(total);
}
myFastFunction();
myFastFunction();
myFastFunction();
myFastFunction();
myFastFunction();
// advance function with perametter 
function secondFunction(nan, nan2){
    var result = nan + nan2;
    return result;
}
var plus = secondFunction(10, 30);
console.log(plus);
var plus2 = secondFunction(10, 50);
console.log(plus);
var allPlusConvertInto = plus * plus2
console.log(allPlusConvertInto);
// gon vag ja khosi korte parbi so pera nai 



//   class-26 
// kono manoser information store kore rakte object use kora hoy 
let anyName = {nam:'rifat', phone:+8801933995057, address:'comilla'}
console.log(anyName);    
console.log(anyName.nam);
var rifat = anyName['nam']
console.log(rifat);
// object ar kono data change korte chaile 
anyName.nam = 'mehedi'
console.log(anyName);
// advance 
function lastFunction(name, phone, password){
    this.name = name ;
    this.phone = phone ;
    this.password = password;
    this.showMe = function(){
      console.log(this.name);
      console.log(this.phone);
      console.log(this.password);
    }
  }
  var hasan = new lastFunction('hasan mahmud', 193399505, 2345)
  hasan.showMe();
  console.log(hasan.name);
  hasan.name = 'rakib'
  console.log(hasan.name);


//   class-27 js comment 
// it is single line comment 
/* it is 
multi line 
comment */


// class-28 terbary operator 
var potato = 20
const potatoCondition = potato == 10 ? 'give me 1kg potato' : 'thank you'
console.log(potatoCondition);


// class - 29 javaScript continue and break
for (var index = 0; index < 10; index++) {
    if(index == 5){
        console.log('breack now')
        break;
    }
    console.log(index);
}
// continue
for (var index = 0; index < 10; index++) {
    if(index == 5){
        console.log('breack now')
        continue;
    }
    console.log(index);
}


// cass 30 var let const
// jokhon aki namer variable onerk bar likte hoy tokhon var use korte hoy 
// jokhon varible onek bar likte hoy na tobe chane ante hoy amon kaje let babohar kora hoy 
// jokhon kono variable kono prokar change ante hoy na amon somoy const bobohar kora hoy 
