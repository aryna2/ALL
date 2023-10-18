// datatype
// console.log(typeof 98765n);
// console.log(typeof true);
// console.log(typeofa=null);
// console.log(typeof 71);
// console.log(typeof "aryan");
// console.log(typeofvalue=Symbol("hello"));
// console.log(typeof {});
// console.log(typeof a);


// stringify,parse
// const a={name:"aryan",email:"aryan@gmail.com"}
// console.log(a);

// const b=JSON.stringify(a)
// console.log(b);

// const c=JSON.parse(b)
// console.log(c);


// tostring= array ne string ma convert krva
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// const a=fruits.toString()
// console.log(a);
// console.log(fruits);


// pop= last element delete krva
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

// push= last element add krva
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);

// shift= first element delete krva
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// unshift= first element add krva
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// console.log(fruits);


// flat= array of array join krva
// const a = [[1,2],[3,4],[5,6]];
// const b = a.flat();
// console.log(b);


// concat= const ne join krva
// const a = ["Cecilie", "Lone"];
// const b = ["Emil", "Tobias", "Linus"];
// const c = a.concat(b);
// console.log(c);


// sort= a to z ma ave
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// reverse= z to a ma ave
// const fruits = ["a","r","y","a","n"]
// fruits.reverse();
// console.log(fruits);


// find and filter
// const a=[10,20,30,10]
// const b=a.find(element=>{
// const b=a.filter(element=>{
//     if(element==10){
//         return element
//     }
// })
// console.log(b);


// callback function
// function add(a,b,callback){
//     callback(a+b)
// }add(10,20,(result)=>{
//     console.log(result);
// })