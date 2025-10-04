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
  const almacen_bubble = document.createElement("div");
  bubble.style.height = "15px";
  bubble.style.width = "15px";
  bubble.style.backgroundColor = "rgba(245, 245, 245, 0.9)";
  bubble.style.borderRadius = "12px";
  bubble.style.margin = "0";
  almacen_bubble.style.display = "inline-block";
  almacen_bubble.style.border = "groove rgba(245,245,245,0.85)";
  almacen_bubble.style.borderRadius = "15px";
  almacen_bubble.style.margin = "7px";
  almacen_bubble.classList.add("goto_img");
  almacen_bubble.appendChild(bubble);
  return almacen_bubble;
}
//Definimos la cantidad de burbujas en la caja de burbujas
//!probar denuevo con e.addeventlistener porque cuando
// se hace click las burbujas ya existen dentro de la caja
// de burbujas.
/*
for (let i = 0; i < arr_imgs.length; i++) {
  //usar for en vez de forEach para acceder'
  // a los valores [i] de cada conjunto de imagenes y burbujas.
  const created_bubble = addBubble();
  const burbuja = created_bubble.querySelector("div>*");

  created_bubble.addEventListener("click", function () {
    // insertar funcion para cambiar todos las burbujas a color
    // por default

    const pileOfBubbles = bubbles.querySelectorAll(".goto_img");
    pileOfBubbles.forEach((e) => {
      e.style.border = "groove rgba(245,245,245,0.85)";
      const circulo = e.querySelector("div > *");
      circulo.style.backgroundColor = "rgba(245, 245, 245, 0.9)";
    });
    //
    burbuja.style.backgroundColor = "rgba(245, 245, 245, 0.5)";
    burbuja.style.border = "none";
    created_bubble.style.border = "groove rgba(245, 245, 245, 0.3)";
    console.log("oola");
    //
  });
  bubbles.appendChild(created_bubble);
}
*/
arr_imgs.forEach(() => bubbles.appendChild(addBubble()));
const pileOfBubbles = bubbles.querySelectorAll(".goto_img");

//function default bubble color

// function hide banner images

// ahora añadimos eventlistener click a cada una de las burbujas y
// refrescamos el resto de burbujas a su color inicial
//append elements

function addEventsInBubbles(arrayOfImages, bunchOfBubbles) {
  for (let i = 0; i < arrayOfImages.length; i++) {
    const burbuja = bunchOfBubbles[i].querySelector("div");
    bunchOfBubbles[i].addEventListener("click", function () {
      bunchOfBubbles.forEach((e) => {
        //estilos por defecto de una burbuja no presionada
        e.style.border = "groove rgba(245, 245,  245, 0.85)";
        const bubble_in_e = e.querySelector("div");
        bubble_in_e.style.backgroundColor = "rgba(245, 245,  245, 0.9)";
      });
      //default value of color in bubble
      burbuja.style.backgroundColor = "rgba(245, 245, 245, 0.5)";
      burbuja.style.border = "none";
      bunchOfBubbles[i].style.border = "groove rgba(245, 245, 245, 0.3)";
      //funcionalidad para cambiar de imagen al presionar burbuja
      arrayOfImages.forEach((e) => (e.style.display = "none"));
      arrayOfImages[i].style.display = "inline";
    });
  }
}

item5.appendChild(arrowRight);

item5.appendChild(arrowLeft);

item5.appendChild(bubbles);

addEventsInBubbles(arr_imgs, pileOfBubbles);

window.addEventListener("load", function () {
  console.log("La página y todos sus recursos se han cargado");
  // Aquí va el código que necesita que todo esté listo
});
