<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/footer.css">
    <link rel="stylesheet" href="/css/header.css">
    <link rel="stylesheet" href="/css/activite.css">
    <script src="/js/header.js"></script>
    <script src="/js/activite.js"></script>    
    <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Distri-Bat</title>
</head>

<header>
<?php include 'header.php'; ?>    
</header> 
<body>

    <div class="activite-main-container">
        <div class="activite-grid">
            <div class="card"><img src="/photo/activite/facade.jpg" alt="" class='parallaximg'></div>
            <div class="card">
                <div class="activite-grid-title"><h2>Façades</h2></div>
                <div class="activite-grid-text"><p>Ravalement, Décoratif D2/D3, imperméabilisation, enduit épais, ...</p></div>
                <div class="activite-grid-btn">Demander un devis</div>
            </div>
            <div class="card"><img src="/photo/activite/frontignan.jpg" alt="" class='parallaximg'></div>
            <div class="card">
                <div class="activite-grid-title"><h2>Isolation thermique par l’exterieur</h2></div>
                <div class="activite-grid-text"><p>Étude de projets /expertise, point singulier, détails techniques, RGE, cabinet d'architecte / maitre d’œuvre</p></div>
                <div class="activite-grid-btn">Demander un devis</div>
            </div>
            <div class="card">
                <div class="activite-grid-title"><h2>Traitement de fissures</h2></div>
                <div class="activite-grid-text"><p>Sinistres et sécheresse, ouverture, piquage, rebouchage</p></div>
                <div class="activite-grid-btn">Demander un devis</div>
            </div>
            <div class="card"><img src="/photo/activite/fissures.jpg" alt="" class='parallaximg'></div>
            <div class="card">
                <div class="activite-grid-title"><h2>embellissements intérieurs / extérieurs</h2></div>
                <div class="activite-grid-text"><p>Sinistres, rénovation, peinture, papier peint, plomberie, électricité, revêtement de sol, carrelage et faïence</p></div>
                <div class="activite-grid-btn">Demander un devis</div>
            </div>
            <div class="card"><img src="/photo/activite/deco.jpg" alt="" class='parallaximg'></div>
        </div>
    </div>

    <div class="transi-contact-main">
        <div class="transi-text">
            <div class="transi-text-haut"><p>Faire appel à nos services, c'est bénéficier de l'expertise d'un spécialiste des travaux de rénovation de façade depuis plus de 30 ans : </p></div>
            <div class="transi-text-bas">
                <p> - <span class="bleu">conseils</span> personnalisés<br>
                    - <span class="bleu">accompagnement</span> en continu<br>
                    - <span class="bleu">développement</span> des compétences<br>
                </p>
            </div>
        </div>
        <div class="transi-contact">
            <div class="transi-contact-text">
                <p>Contactez-nous <br>pour obtenir un devis</p>
            </div>
            <div class="transi-contact-btn-container">
                <div class="transi-contact-btn">mail</div>
                <div class="transi-contact-btn">contact</div>
            </div>
        </div>
    </div>
<?php include 'php/footer.php'; ?>
</body>
</html>