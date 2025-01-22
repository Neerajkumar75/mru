// // // // //  console.log("Start");
// // // // // setTimeout(() => {
// // // // //     console.log("This message is delayed by 2 seconds");
// // // // // }, 2000);
// // // // // console.log("End");
// // // // let count = 0;

// // // // const intervalId = setInterval(() => {
// // // //     count++;
// // // //     console.log(`This message appears every second. Count: ${count}`);
    
// // // //     // Clear the interval after 5 counts
// // // //     if (count === 5) {
// // // //         clearInterval(intervalId);
// // // //         console.log("Interval cleared.");
// // // //     }
// // // // }, 1000);

// // // // console.log("Interval started.");


// // // let number = 1;
// // // const intervalId = setInterval(() => {
// // //   console.log(number);
// // //   number++;
// // //   if (number > 10) {
// // //     clearInterval(intervalId);
// // //   }
// // // }, 2000);


// // function main(a,b){
// //     setTimeout(() => {
// //         for (let i = 0; i < 10; i++) {
// //             console.log(i);
// //         }
// //     }, 2000);
// // }
// // main(1,2);

// // promise in javascript
// //Syntax
// let promise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (" operation successful ") {
//       resolve('Success!');
//     } else {
//       reject('Failure!');
//     }
//   });
// console.log(promise);

let online = window.navigator.onLine;
new Promise((resolve, reject) => {
    setTimeout(() => {
        if (online) {
            resolve("You are online");
        } else {
            reject("You are offline");
        }
    }, 2000);
})
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });


  