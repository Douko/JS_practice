const item5 = document.getElementById("image_load");
//const imgs = item5.querySelectorAll("img");

const images_in_banner = document.getElementsByClassName("banner_imgs");
const arr_imgs = [...images_in_banner];
// Creo que se puede acortar mas reemplazando imgs por arr_imgs

function rSwitchImage(button, imgList, bunchOfBubbles) {
  button.addEventListener("click", function () {
    if (imgList.length == 0) console.log("no hay imagenes para la portada");
    for (let i = 0; i < imgList.length; i++) {
      if (imgList[i].style.display == "inline") {
        imgList[i].style.display = "none";
        //introducir propiedades de burbuja por defecto
        bubbleDefaultColor(bunchOfBubbles[i]);
        if (imgList[i + 1] == undefined) {
          imgList[0].style.display = "inline";
          //introducir propiedades para cambiar color de burbuja
          bubbleWhenPressed(bunchOfBubbles[0]);
          return;
        } else {
          imgList[i + 1].style.display = "inline";
          //introducir propiedades para cambiar color de burbuja
          bubbleWhenPressed(bunchOfBubbles[i + 1]);
          return;
        }
      } else continue;
    }
  });
}

function lSwitchImage(button, imgList, bunchOfBubbles) {
  button.addEventListener("click", function () {
    if (imgList.length == 0) console.log("no hay imagenes para la portada");
    for (let i = 0; i < imgList.length; i++) {
      if (imgList[i].style.display == "inline") {
        imgList[i].style.display = "none";
        bubbleDefaultColor(bunchOfBubbles[i]);
        if (imgList[i - 1] == undefined) {
          imgList.at(-1).style.display = "inline";
          //diferenciacion entre at y array[array.length - 1] dentro de una funcion
          bubbleWhenPressed(bunchOfBubbles[bunchOfBubbles.length - 1]);
          return;
        } else {
          imgList[i - 1].style.display = "inline";
          bubbleWhenPressed(bunchOfBubbles[i - 1]);
          return;
        }
      } else continue;
    }
  });
}
//Añadir flechas a los lados de la imagen
//Create Arrows

function createArrow() {
  const arrow = document.createElement("div");
  arrow.classList.add("Arrow");
  return arrow;
}

//create bubble
function addBubble() {
  const bubble = document.createElement("div");
  const almacen_bubble = document.createElement("div");

  bubble.classList.add("Bubble");
  almacen_bubble.classList.add("BubbleBox");
  almacen_bubble.appendChild(bubble);

  return almacen_bubble;
}
// events for bubbles
function addEventsInBubbles(arrayOfImages, bunchOfBubbles) {
  for (let i = 0; i < arrayOfImages.length; i++) {
    bunchOfBubbles[i].addEventListener("click", function () {
      //bubbleColorChangeInPress(arrayOfImages, bunchOfBubbles, i);

      bunchOfBubbles.forEach((e) => bubbleDefaultColor(e));
      //default value of color in bubble
      bubbleWhenPressed(bunchOfBubbles[i]);
      //funcionalidad para cambiar de imagen al presionar burbuja
      arrayOfImages.forEach((e) => (e.style.display = "none"));
      arrayOfImages[i].style.display = "inline";
    });
  }
}

function bubbleWhenPressed(e) {
  const burbuja = e.querySelector("div");
  burbuja.style.backgroundColor = "rgba(245, 245, 245, 0.5)";
  e.style.border = "groove rgba(245, 245, 245, 0.3)";
}

function bubbleDefaultColor(e) {
  e.style.border = "groove rgba(245, 245,  245, 0.85)";
  const bubble_in_e = e.querySelector("div");
  bubble_in_e.style.backgroundColor = "rgba(245, 245,  245, 0.9)";
}

const arrowLeft = createArrow();

const arrowRight = createArrow();
arrowRight.style.left = "calc(100% - 100px)";
// Añadiendo evento en flechas

const bubbles = document.createElement("div");
bubbles.classList.add("BubbleContainer");

arr_imgs.forEach(() => bubbles.appendChild(addBubble()));
const pileOfBubbles = bubbles.querySelectorAll(".BubbleBox");
//Añadimos eventos
arrowLeft.addEventListener(
  "click",
  lSwitchImage(arrowLeft, arr_imgs, pileOfBubbles)
);
arrowRight.addEventListener(
  "click",
  rSwitchImage(arrowRight, arr_imgs, pileOfBubbles)
);
arr_imgs.forEach((e) => {
  rSwitchImage(e, arr_imgs, pileOfBubbles);
});

addEventsInBubbles(arr_imgs, pileOfBubbles);

item5.appendChild(arrowRight);

item5.appendChild(arrowLeft);

item5.appendChild(bubbles);

window.addEventListener("load", function () {
  console.log("La página y todos sus recursos se han cargado");
  // Aquí va el código que necesita que todo esté listo
});
