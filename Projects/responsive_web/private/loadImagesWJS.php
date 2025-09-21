<?php
$dir_image_covers = 'public/images/covers/';
// Crea los elementos para albergar las imagenes a cargar
function loadImages($path, $height) {
    $images = glob($path .  '*.jpg');
    foreach($images as $image) {
        echo "<script>
        loadImagesfjs('$image', '$height');
        </script>";
        
        //Un enter para que en el html los elementos esten
        // correctamente posicionados.
    }
} 

function printmessage() {
    return 'hello';
}

?> 