const fs = require('fs');

const path = require('path')

fs.mkdir('./04-copy-directory/files-copy', err => {
   if(err) {return}
   else {// не удалось создать папку
   console.log('Папка успешно создана');
   }
});


fs.readdir('./04-copy-directory/files', (err, files) => {
    if(err) {
        console.log('Файлы скопированы');
        return 
    }
    else{  
   for(let i =0; i<files.length; i++){
     console.log(files[i]);
    fs.copyFile(path.join('./', '04-copy-directory/files', files[i]), path.join('./', '04-copy-directory/files-copy/', files[i]), err => {
        if(err) throw err; 

     });
 }
}
})