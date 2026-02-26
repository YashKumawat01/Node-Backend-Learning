// console.log("Here we Start File Handling")

const fs = require("fs");


//  **************************  Create File  ************************************

// Synchronous Call
// fs.writeFileSync('./test.txt','Hey YASH 1 2 3');

// Asynchronous
// fs.writeFile('./test1.txt','Hey YASH 1 2 3 Async', (err) =>{});


//  **************************  READ File  ************************************


// Synchronous Method
// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result)


// Asynchronous Method
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString)
fs.appendFileSync("./test.txt", `${Date.now()}Hey These\n`)


// Create Directories
fs.mkdirSync("my-docs/a/b",{recursive:true});