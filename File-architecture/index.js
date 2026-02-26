const fs = require("fs");

// Sync..  Blocking Request

// fs.writeFileSync("./test.txt","Hello Worldd")

// Async.. Non-Blocking Request
// fs.writeFile("./test.txt","Hello Worldd by Async", (err)=>{})


// *********************************************************************************

// Blocking Request
/*
console.log("1")
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);
console.log("2")
*/

/* Blocking example me 1 print hoga uske baad result and in end 2 print hoga....

2 print hone se pehle result ka wait karega kyunki result ne block kar rakha hai  ......*/

// *********************************************************************************

// Non - Blocking Request


console.log("1")
fs.readFile("./test.txt", "utf-8",(err,result)=>{
    if(err){
        console.log("There is error",err)
    }
    else{
        console.log(result)
    }
});

console.log("2")

/* Yaha par 1 or 2 phele print hoga uske baad result */

// *********************************************************************************


//  Default Thread Pool Size = 4 
