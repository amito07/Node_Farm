const fs = require('fs')


//Blocking, synchronous operations
// const gg = fs.readFileSync('./Text_Folder/test.txt','utf-8')
// console.log("GG",gg)

// const nextText = `HAHAHA We write ${gg}.\nCreate on ${Date.now()}`;
// fs.writeFileSync('./Text_Folder/output.txt',nextText)
// console.log("File written")


//Non-blocking asynchronous operations
fs.readFile('./Text_Folder/asynctext.txt','utf-8',(err,data1)=>{
    fs.readFile(`./Text_Folder/${data1}.txt`,'utf-8',(err,data2)=>{
        fs.writeFile('./Text_Folder/output2.txt',data2,(err)=>{
            if(err) throw err
        })
    })
})
console.log("Before")

// fs.writeFile('./Text_Folder/asynctext.txt',gg,(err,data)=>{
//     if(err) throw err;
//     console.log("File written")

// })
