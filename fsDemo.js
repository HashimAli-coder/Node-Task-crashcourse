//import fs from 'fs';
import fs from 'fs/promises'

//readfile-callback
fs.readFile('./text.txt' , 'utf8' , (err , data) => {
if(err) throw err;
console.log(data);
});

//readfile-synchronus
const data = fs.readFileSync('./text.txt' , 'utf8');
console.log(data);

//readfile-promises
fs.readFile('./text.txt' , 'utf8')
 .then((data) => console.log(data))
 .catch((err) => console.log(err));

 //async await
 const readFile = async () => {
    try {
        const data = await fs.readFile('./text.txt' , 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error)
    }
 };

 //writefile-async-await
 const writeFile = async () => {
   try {
await fs.writeFile('./text.txt' , 'Updated by hashim');
console.log('File written to ...')
   } catch (error) {
    console.log(error);
   }
 }

 //appendfile

 const appendFile = async () => {
    try {
        await fs.appendFile('./text.txt' , '\nHashim is here')
    } catch (error) {
        console.log(error);
    }
 }
appendFile();
writeFile();
readFile();
