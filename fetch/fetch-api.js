// const xhr = new XMLHttpRequest();

// //step 1: Config the connection
// xhr.open("GET", "https://restcountries.com/v3.1/all");

// // Step 2: Send the request
// xhr.send();

// // step 3: Handle the response
// xhr.onload = () => {
//   const response = JSON.parse(xhr.responseText);
//   console.log(response);

//   response.forEach((country) => {
//     console.log(country.name.common, country.flag);
//   });
// };

const responsePromise = fetch("https://restcountries.com/v3.1/all");
console.log(responsePromise);
responsePromise
  .then((value) => {
    const dataPromise = value.json(); // value.json() returns a promise with the expected data(countries info)
    console.log(dataPromise);
    return dataPromise;
  })
  .then((data) => {
    // console.log(data);
    data.forEach((country) => {
      console.log(country.name.common, country.flag);
    });
  })
  .catch((err) => {
    console.log(err);
  });
