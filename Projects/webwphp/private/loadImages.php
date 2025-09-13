<?php
$dir_image_covers = 'public/images/covers/';
// Crea los elementos para albergar las imagenes a cargar
function loadImages($path, $height) {
    $images = glob($path .  '*.jpg');
    foreach($images as $image) {
        if ($image === $images[0]) 
            echo "<img src='$image' height='$height' style='display: inline' alt='cover'/>
        ";
        else 
            echo "<img src='$image' height='240px' alt='n_cover'/>
        ";
        
        //Un enter para que en el html los elementos esten
        // correctamente posicionados.
    }
} 

function printmessage() {
    return 'hello';
}

?>