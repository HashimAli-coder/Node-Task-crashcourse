import url from 'url';

const urlString = 'http://www.google.com/search?q=hello+world';

//properties
const urlObj = new URL(urlString);
console.log(urlObj);

//format
console.log(url.format(urlObj));

//filepath
console.log(import.meta.url);

//path
console.log(url.fileURLToPath(import.meta.url));

//params
const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
params.append('limit' , 5);
params.delete('limit');
console.log(params);