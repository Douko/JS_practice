function loadImagesfjs(path, height) {
  const dive = document.getElementById("image_load");
  let imgt = new Image();
  imgt.style.height = height;
  imgt.src = path;
  imgt.alt = "cover";

  if (dive.childElementCount < 1) imgt.style.display = "inline";
  dive.appendChild(imgt);
  console.log(dive.childElementCount);
}
//!! ESTA Parte esta al final del body, cuando la pagina ya esta cargada, asi que los cambios
// no se registran en el html que le llega al usuario. curioso.
/*
var img = new Image();
img.onload = function () {
  // Image is loaded, now you can use it
  document.body.appendChild(img);
};
img.src = "path/to/your/image.png";*/
