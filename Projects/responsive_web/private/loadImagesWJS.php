<?php
$dir_image_covers = 'public/images/covers/';
// Crea los elementos para albergar las imagenes a cargar
function loadImages($path, $height) {
    $images = glob($path .  '*.jpg');
    /* 
    foreach($images as $image) {
        echo "loadImagesfjs('$image', '$height');";
        echo "
        ";
        //Un enter para que en el html los elementos esten
        // correctamente posicionados.
    }*/
    $stringar = implode(', ', $images);
    echo  "loadPileOfImages('$stringar'.split(', '), '$height');";
} 

function printmessage() {
    return 'hello';
}

?> 