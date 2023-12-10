// assume the house is built but the below works are pending,
// exterior decor & painting
// interior decor & painting
// fencing & painting

// Promise All, simultaneously starting all the promises( above works )
const exteriorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Exterior Decor & Painting is Complete");
    // reject();
  }, 3000);
});

const interiorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Interior Decor & Painting is Complete");
    // reject(new Error("No Money interior is pending"));
  }, 5000);
});

const fencingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject();
    resolve("Fecning & Painting work is Complete");
  }, 2000);
});

// Promise.all([exteriorPromise, interiorPromise, fencingPromise])
//   .then((values) => {
//     console.log(values);
//     console.log("Home is completed");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("Problem Occured in finishing the Home process");
//   });

// Completion of any one promise is enough for further process
Promise.any([exteriorPromise, interiorPromise, fencingPromise])
  .then((value) => {
    console.log(value); // resolve value of the first completed promise
    console.log("Home is completed");
  })
  .catch((err) => {
    console.log(err);
    console.log("Problem Occured in finishing the Home process");
  });
