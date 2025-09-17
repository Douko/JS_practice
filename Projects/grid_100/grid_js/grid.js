const colors = document.getElementById("recomendations").children;

const [div_1, div_2, div_3, div_4] = colors;
const g_post = document.getElementById("g_post");
//funcion que devuelve una funcion aaprovechando
// el parametro introducido en la funcion raiz
//para evitar que se ejecute c(color)
function c(a) {
  return () => (g_post.style.backgroundColor = `${a}`);
}
function addColor(element, color) {
  element.addEventListener("click", c(color));
}

addColor(div_1, "orange");
addColor(div_2, "purple");
addColor(div_3, "green");
addColor(div_4, "red");
