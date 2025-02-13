//Test de funciones asincronas
async function getData() {
  const response = await fetch("http://www.example.com/data");
  return response;
}
//Promises in chain
async function getData2() {
  const response = await fetch("http://www.example.com/data");
  const response2 = await processData(response);
  return response2;
}
//Nested setTimeout calls
function doProcessing() {
  var timeout;
  timeout = setTimeout(function () {
    console.log("doing first thing");
    timeout = setTimeout(function () {
      console.log("step 2");
      timeout = setTimeout(function () {
        console.log("step 3");
        setTimeout(function () {
          console.log("last thing!");
        }, 300);
      }, 1000);
    }, 2500);
  }, 3000);
}

doProcessing();
//Promisifying
const promisifiedSetTimeout = function (ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};
//Rewriting doProcessing()
async function doProcessingAsync() {
  await promisifiedSetTimeout(3000);
  console.log("doing first thing");
  await promisifiedSetTimeout(2500);
  console.log("step 2");
  await promisifiedSetTimeout(1000);
  console.log("step 3");
  await promisifiedSetTimeout(300);
  console.log("last thing");
}

doProcessingAsync();
//Handling errors with async/await
async function openBook() {
  try {
    const bookText = await bookLoad("mobydick.txt");
    displayArea.innerText = bookText;
  } catch (e) {
    displayArea.innerText = e;
  }
}

//Catching errors with fetch()
async function fetchTheData(url) {
  try {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}
