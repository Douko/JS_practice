const item5 = document.getElementById("image_load");
const imgscollection = item5.children;
const imgs = [...imgscollection];
const imgsiterator = imgs[Symbol.iterator]();

item5.addEventListener("click", function () {
  if (imgs.length == 0) console.log("no hay imagenes para la portada");
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display == "inline") {
      imgs[i].style.display = "none";
      if (imgs[i + 1] == undefined) {
        imgs[0].style.display = "inline";
        return;
      } else {
        imgs[i + 1].style.display = "inline";
        return;
      }
    } else continue;
  }

  /*
  for(img in imgs) {
    if (img.style.display == "inline") {
      img.style.display = "none";
    } if (img = imgs.at(-1)){
        imgs.at(0).style.inline = "inline";
        return;    
      } else {
        img
      }
  }
  */
  console.log("Hola!");
});

window.addEventListener("load", function () {
  console.log("La página y todos sus recursos se han cargado");
  // Aquí va el código que necesita que todo esté listo
});
