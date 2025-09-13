const item5 = document.getElementById("image_load");

item5.addEventListener("click", function () {
  console.log("Hola!");
  const newImage = document.createElement("img");
  newImage.src = "public/images.jpg";
  newImage.alt = "Description of image";
  item5.textContent = "";
  item5.appendChild(newImage);
});

window.addEventListener("load", function () {
  console.log("La página y todos sus recursos se han cargado");
  // Aquí va el código que necesita que todo esté listo
});
