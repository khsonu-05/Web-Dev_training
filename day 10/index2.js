// const a=5;
// const b=9;
// console.log("...value of a...:",a);
// //try catch se hmara input rukta nahi hai  beech me 
// //error hone ke baad bhi agla print ho jaayega 
// try{
// a =6;
// console.log("...value of a ...:",a);
// }catch(error){ 
//     console.log(error);
// }
// console.log("..value of b ..:",b);

// function myPromiseFun(res,rej){
//     //pahla resolve dusra reject and hum res and rej ko change bhi kar sakte hai 
//     let delay = 100000000;
//     while(delay--);
//     // rej("hello world");
//     res("hello world");
// }
const myPromise = new Promise(myPromiseFun);
// console.log(myPromise);



function myPromiseFun(fun1,fun2){
    //pahla resolve dusra reject and hum res and rej ko change bhi kar sakte hai 
        //pahla resolve dusra reject and hum res and rej ko change bhi kar sakte hai 
        let n = 10000;
        while(n--);
        // rej("hello world");
        fun1("Data");
        
    }
    console.log("...A...");
    console.log(myPromise);
    console.log("...B...");