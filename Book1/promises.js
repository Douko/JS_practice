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
