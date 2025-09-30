const item5 = document.getElementById("image_load");
const imgs = item5.querySelectorAll("img");

const images_in_banner = document.getElementsByClassName("banner_imgs");
const arr_imgs = [...images_in_banner];
// Creo que se puede acortar mas reemplazando imgs por arr_imgs
arr_imgs.forEach((e) => {
  e.addEventListener("click", function () {
    if (arr_imgs.length == 0) console.log("no hay imagenes para la portada");
    for (let i = 0; i < imgs.length; i++) {
      if (arr_imgs[i].style.display == "inline") {
        arr_imgs[i].style.display = "none";
        if (arr_imgs[i + 1] == undefined) {
          arr_imgs[0].style.display = "inline";
          return;
        } else {
          arr_imgs[i + 1].style.display = "inline";
          return;
        }
      } else continue;
    }
  });
});
//Añadir flechas a los lados de la imagen
//Create Arrows

function createArrow() {
  const arrow = document.createElement("div");
  arrow.style.position = "absolute";
  arrow.style.width = "100px";
  arrow.style.height = "100px";
  arrow.style.backgroundColor = "rgba(255,0,0,0)";
  arrow.style.top = "calc(50% - 50px)";
  arrow.style.border = "solid black";
  return arrow;
}

const arrowLeft = createArrow();

const arrowRight = createArrow();
arrowRight.style.left = "calc(100% - 100px)";

const bubbles = document.createElement("div");
bubbles.style.position = "absolute";
bubbles.style.width = "500px";
bubbles.style.height = "40px";
bubbles.style.top = "calc(100% - 40px)";
bubbles.style.left = "calc(50% - 250px)";
bubbles.style.backgroundColor = "lightgray";
bubbles.style.border = "solid black";
bubbles.style.backgroundColor = "rgba(255,0,0,0)";
bubbles.style.alignContent = "center";
bubbles.style.justifyItems = "center";

function addBubble() {
  const bubble = document.createElement("div");
  bubble.style.height = "15px";
  bubble.style.width = "15px";
  bubble.style.backgroundColor = "rgba(245, 245, 245, 0.9)";
  bubble.style.borderRadius = "15px";
  bubble.style.margin = "0";
  bubble.style.display = "inline-block";
  bubble.style.margin = "7px";
  bubble.style.border = "solid rgba(243, 243, 236, 0.5)";
  return bubble;
}
//Definimos la cantidad de burbujas en la caja de burbujas
//!probar denuevo con e.addeventlistener porque cuando
// se hace click las burbujas ya existen dentro de la caja
// de burbujas.
arr_imgs.forEach((e) => bubbles.appendChild(addBubble()));
// ahora añadimos eventlistener click a cada una de las burbujas y
// refrescamos el resto de burbujas a su color inicial
//append elements

item5.appendChild(arrowRight);

item5.appendChild(arrowLeft);

item5.appendChild(bubbles);

window.addEventListener("load", function () {
  console.log("La página y todos sus recursos se han cargado");
  // Aquí va el código que necesita que todo esté listo
});
