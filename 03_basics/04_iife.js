// Immediately Involed Function Expressions (IIFE)


(function chai(){
    //name IIFE
    console.log(`DB CONNECTED`);
})();

( name => {
    console.log(`DB CONNECTED TWO ${name}`);
})('jyoti')
