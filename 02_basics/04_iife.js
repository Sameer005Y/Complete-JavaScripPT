//Immediately Invoked Function Expression

(function hello(){  //-->Named IIFE because the function has some name
    console.log("Hello World");
})();

((name) => {        //-->UnNamed IIFE
    console.log(`${name}`);
})("Sameer");