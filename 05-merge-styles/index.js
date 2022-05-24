const fs = require('fs');
const path = require('path')
// fs.mkdir('./04-copy-directory/files-copy', err => {
//    if(err) {return}
//    else {// не удалось создать папку
//    console.log('Папка успешно создана');
//    }
// });
// fs.readdir('./05-merge-styles/styles', (err, files) => {
//     if(err) {
//         console.log('Файлы скопированы');
//         return 
//     }
//     else{  
//    for(let i =0; i<files.length; i++){
//      console.log(files[i]);
//     fs.copyFile(path.join('./', '05-merge-styles/styles', files[i]), path.join('./', '05-merge-styles/bundle.css', files[i]), err => {
//         if(err) throw err; 
//      });
//  }
// }
// })


/* */
fs.readdir('./05-merge-styles/styles', (err, files) => {
    if(err) {
        console.log('Файлы скопированы');
        return 
    }
let mass ='';
for(let i =0; i<files.length; i++){
let readStreem = fs.createReadStream(path.join('./', '05-merge-styles/styles', files[i]))
readStreem.on('data', (chunk) =>  {
    mass =+ chunk.toString();

    
})
}


console.log(mass);})