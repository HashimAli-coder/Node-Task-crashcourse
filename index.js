import getPosts , {getPostsLength} from "./postController.js";

console.log("Hello World")
// console.log(global)
// console.log(process)

// const {generateRandomNum , celciusToFahrenheit} = require('./utils')

// console.log(`Random Number is : ${generateRandomNum()}`);
// console.log(`Celcius into Fahrenheit is : ${celciusToFahrenheit(7)}`)    

console.log(getPosts() , getPostsLength());