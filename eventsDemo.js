import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(){
    console.log('Hello World');
}

function goodbyHandler(){
    console.log('Good Bye World');
}

//registereventlisteners
myEmitter.on('greet' , greetHandler);
myEmitter.on('goodbye' , goodbyHandler);

//emit event
myEmitter.emit('greet');
myEmitter.emit('goodbye');


//error event
myEmitter.on('error' ,(err) => {
    console.log('Error occured' , err);
})

//simulate err
myEmitter.emit('error' , new Error('Gone Wrong'));