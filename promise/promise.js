// Promise object

const p = new Promise(() => {});

// console.log(p);

const pResolved = new Promise((res, rej) => {
  // resolve();`
  // res("Hi Hello, My Promise is success Yaaaa...");
});

// console.log(pResolved);

const pRejected = new Promise((resolve, reject) => {
  // reject();
  // reject(new Error("I was unable to resolve"));
});

// console.log(pRejected);

const isHealthy = true;

const doHomeWork = new Promise((resolve, reject) => {
  if (isHealthy) {
    resolve("I did My Home Work");
  } else {
    reject(new Error("I was unable to do My Home Work"));
  }
});
console.log(doHomeWork);

doHomeWork.then((result) => {
  // console.log(result);
});

const moneyAvailable = false;
const buildHome = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (moneyAvailable) {
      resolve("I have successfully completed the Home");
    } else {
      reject(new Error("I have No Money Available"));
    }
  }, 5000);
});

console.log(buildHome);

// handling a promise with .then( if resolved ) & .catch( if rejected )
buildHome
  .then((val) => {
    // console.log(val);
    // console.log("Next House Warming");
  })
  .catch((err) => {
    // console.log(err);
    // console.log("Next, Analyse the Failure");
  });

// Chaining
// processes are supposed to chain so that we can complete the end-to-end action

// promise depends on the other parent promise
// To Build a home

// Buy a Land
// Create a plan
// Build the Home

// Buy a Land
const noMoney = false;
const buyLand = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (noMoney) {
      reject(new Error("No Mney No Land"));
    } else {
      resolve("Bought a land in Native Place");
    }
  }, 3000);
});

buyLand
  .then((val) => {
    console.log(val);
    console.log("Started Plan Creation");
    const noPlanners = true;
    // Create a plan
    const createPlan = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (noPlanners) {
          reject(new Error("No planners available"));
        } else {
          resolve("Plan created successfully with two floors");
        }
      }, 2000);
    });
    return createPlan;
  })
  .then((plan) => {
    console.log(plan);
    console.log("Started building Home");
    const buildHome = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Home Built Successfully");
      }, 5000);
    });
    return buildHome;
  })
  .then((home) => {
    console.log(home);
  })
  .catch((err) => {
    console.log("Error", err);
  });
