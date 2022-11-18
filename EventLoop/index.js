const fs = require("fs");

fs.readFile("../File_System/Text_Folder/output2.txt", () => {
  console.log("read file2");
  console.log("--------------------------------------------");

  setTimeout(() => {
    fs.readFile( 
      "../File_System/Text_Folder/output.txt",
      "utf-8",
      (err, data) => {
        console.log("read file", data);
      }
    );
  }, 5000);
  setImmediate(() => { // process after a while a time 
    fs.readFile(
      "../File_System/Text_Folder/output2.txt",
      "utf-8",
      (err, data) => {
        console.log("read file", data);
      }
    );
  });
  process.nextTick(()=> console.log("Process finished")) //process imediately
});

console.log("Hello world");
setTimeout(() => console.log("2"), 3000);
