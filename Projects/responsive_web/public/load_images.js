function loadImagesfjs(path, height, alt, clase) {
  const dive = document.getElementById("image_load");
  let imgt = new Image();
  imgt.style.height = height;
  imgt.src = path;
  imgt.alt = alt;
  if (clase != "") imgt.classList.add(clase);

  if (dive.querySelectorAll("img").length < 1) imgt.style.display = "inline";
  dive.appendChild(imgt);
  console.log(dive.childElementCount);
}

function loadPileOfImages(paths, height, alt, clase) {
  for (let path of paths) {
    loadImagesfjs(path, height, alt, clase);
  }
}
