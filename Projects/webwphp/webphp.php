<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="grid_css/grid.css" />
    <link rel="stylesheet" href="grid_css/grid_750.css" />
    <link rel="icon" type="image/x-icon" href="public/images/favicon.ico">
    <?php include 'private/loadImages.php'; ?>
  </head>
  <body>
    <div class="container">
      <div class="item item1">
        <div class="item11">
          <button><img src="bar.svg" /></button>
          <div class="list1">
            <a>Home</a>
            <a>Features</a>
            <a>Help</a>
            <a>Contact</a>
          </div>
        </div>
        <div>123</div>
      </div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
      <div class="item item4">
        <a>Home</a>  
        <a>Features</a>
        <a>Help</a>
        <a>Contact</a>
      </div>
      <div class="item item5" id="image_load">
        <?php echo loadImages($dir_image_covers, '240px'); ?>
      </div>
      <div class="item item6">
        <div class="recomendations">1</div>
        <div class="g_post">2</div>
        <div class="feedback">3</div>
      </div>
      <div class="item item7">7</div>
    </div>
  </body>
  <script src = 'public/main.js'></script>
</html>
