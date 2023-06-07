<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/footer.css">
    <link rel="stylesheet" href="/css/header.css"> 
    <link rel="stylesheet" href="/css/realisation.css">  
    <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>
    <script src="/js/header.js"></script>
    <script src="\js\footer.js" defer></script>
    <script src="\js\realisation.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />    
    <title>Nos Réalisations</title>
</head>
<header>
<?php include 'header.php'; ?>    
</header>
<body>
    <div class="ravalement-center-container">
        <div class="ravalement-container">
            <div class="ravalement-container-title"><h2>Ravalement de Facades</h2></div>
            <div class="ravalement-caroussel-container">
                <div class="ravalement-caroussel left">

                    <div class="slides">

                        <input type="radio" name="radio-btn" id="radio1">
                        <input type="radio" name="radio-btn" id="radio2">
                        <input type="radio" name="radio-btn" id="radio3">
                        <input type="radio" name="radio-btn" id="radio4">

                        <div class="slide first">
                          <img src="/photo/realisation/1.jpg" alt="">
                        </div>
                        <div class="slide">
                          <img src="/photo/realisation/2.jpg" alt="">
                        </div>
                        <div class="slide">
                          <img src="/photo/realisation/3.jpg" alt="">
                        </div>
                        <div class="slide">
                          <img src="/photo/realisation/4.jpg" alt="">
                        </div>
                        <!--slide images end-->
                        <!--automatic navigation start-->
                        <div class="navigation-auto">
                          <div class="auto-btn1"></div>
                          <div class="auto-btn2"></div>
                          <div class="auto-btn3"></div>
                          <div class="auto-btn4"></div>
                        </div>
                    </div>

                    <div class="navigation-manual">
                      <label for="radio1" class="manual-btn"></label>
                      <label for="radio2" class="manual-btn"></label>
                      <label for="radio3" class="manual-btn"></label>
                      <label for="radio4" class="manual-btn"></label>
                    </div>

                </div>
                <div class="ravalement-caroussel right">

                    <div class="slides">

                        <input type="radio" name="radio-btn" id="radio5">
                        <input type="radio" name="radio-btn" id="radio6">
                        <input type="radio" name="radio-btn" id="radio7">
                        <input type="radio" name="radio-btn" id="radio8">

                        <div class="slide first">
                          <img src="/photo/realisation/1.jpg" alt="">
                        </div>
                        <div class="slide">
                          <img src="/photo/realisation/2.jpg" alt="">
                        </div>
                        <div class="slide">
                          <img src="/photo/realisation/3.jpg" alt="">
                        </div>
                        <div class="slide">
                          <img src="/photo/realisation/4.jpg" alt="">
                        </div>
                        <!--slide images end-->
                        <!--automatic navigation start-->
                        <div class="navigation-auto">
                          <div class="auto-btn5"></div>
                          <div class="auto-btn6"></div>
                          <div class="auto-btn7"></div>
                          <div class="auto-btn8"></div>
                        </div>
                    </div>

                    <div class="navigation-manual">
                      <label for="radio5" class="manual-btn"></label>
                      <label for="radio6" class="manual-btn"></label>
                      <label for="radio7" class="manual-btn"></label>
                      <label for="radio8" class="manual-btn"></label>
                    </div>

                </div>
            </div>        
        </div>
    </div>
    


</body>
</html>