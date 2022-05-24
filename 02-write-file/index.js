const fs = require('fs');


fs.writeFile('./02-write-file/secTxt.txt', '' , function(error){
 
    if(error) throw error; // если возникла ошибка
});

let readStreem = fs.createReadStream('./02-write-file/secTxt.txt');
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
readline.setPrompt('Write\n');
readline.prompt();
readline.on('line', (txt) => {
    if (txt == 'exit'){
        readline.close()
    }
    else{
        fs.appendFile("./02-write-file/secTxt.txt",  txt  , function(error){
      if(error) throw error; // если возникла ошибка
        }
)
}});
