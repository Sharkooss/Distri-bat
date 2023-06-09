<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/contact.css">
    <link rel="stylesheet" href="/css/footer.css">
    <link rel="stylesheet" href="/css/header.css">
    <script src="\js\header.js"></script>
    <link rel="icon" href="/photo\Logo\logo-title.jpg">
    <title>Distri-Bat - Contact</title>
</head>


<header>
    <?php include 'header.php'; ?>     
</header>


<body>


<div class="contmom">
    
    <div class="containercontacttitle">
        <h1>Contact</h1>
    </div>

    <div class="containercontact">

        <div class="paracontact responsive"></div>

        <div class="contactgauche">
            <h2 class="content gauche">rénovation et embellissements intérieurs</h2>
            <div class="petitseparateur"></div>
            <h2 class="content milieu">Isolation thermique par l'extérieur</h2>
            <div class="petitseparateur"></div>
            <h2 class="content droite">Ravalement de façades</h2>
        </div>


        <div class="paracontact"></div>


        <div class="contactinfo">

            <div class="coocontainer un"><img src="\photo\contact\phone.svg" alt="phone photo" class="contactsvg"> <h2 class="coocontent">06 70 04 55 76</h2></div>
            <div class="petitseparateur"></div>
            <div class="coocontainer  deux"><img src="\photo\contact\at.svg" alt="mail photo" class="contactsvg"> <h2 class="coocontent">distribatsinistres @gmail.com</h2></div>
            <div class="petitseparateur"></div>
            <div class="coocontainer trois"><img src="\photo\contact\location.svg" alt="location photo" class="contactsvg"> <h2 class="coocontent">Siège social à Lattes Agence logistique à Poussan</h2></div>
        
        </div>

        
        <div class="paracontact"></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.4003355269156!2d3.67300007657708!3d43.47311506405905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6bb6565230a9b%3A0x15ab78633134ae21!2sDISTRI-BAT%20SINISTRES!5e0!3m2!1sen!2sfr!4v1685709156392!5m2!1sen!2sfr" width="800" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="locacontact"></iframe>
        <div class="paracontact responsive"></div>
    </div>

    


    <div class="deviscontainermom">


        <div class="deviscontainer">

            <div class="devis">

                <?php
                    error_reporting(0);
                    trigger_error("user warning!", E_USER_WARNING);

                    // Vérifier si le formulaire a été soumis
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        // Récupérer les données du formulaire
                        $nom = $_POST["nom"];
                        $prenom = $_POST["prenom"];
                        $reponse = $_POST["reponse"];
                        $description = $_POST["description"];

                        
                        // Valider les données (vous pouvez ajouter des validations supplémentaires si nécessaire)
                        if (!empty($nom) && !empty($prenom) && !empty($description) && !empty($reponse)) {
                            // Adresse e-mail où envoyer les résultats
                            $destinataire = "distribatsinistres@gmail.com";
                            
                            // Construire le corps de l'e-mail
                            $corps_message = "Nom: " . $nom . "\n";
                            $corps_message .= "Prénom: " . $prenom . "\n";
                            $corps_message .= "Demande: " . $reponse . "\n";
                            $corps_message .= "Description: " . $description . "\n";

                            if (isset($_FILES['photo']) && $_FILES['photo']['error'] == UPLOAD_ERR_OK) {
                                // Chemin temporaire du fichier téléchargé
                                $chemin_temporaire = $_FILES['photo']['tmp_name'];
                                
                                // Lire le contenu du fichier
                                $contenu_fichier = file_get_contents($chemin_temporaire);
                                
                                // Encoder le contenu du fichier en base64
                                $photo_encodee = base64_encode($contenu_fichier);
                                
                                // Ajouter la photo encodée dans le corps de l'e-mail
                                $corps_message .= "Photo: <img src='data:image/jpeg;base64," . $photo_encodee . "'>";
                            }
                            
                            // Envoyer l'e-mail
                            if (mail($destinataire, "Nouveau message de formulaire de contact", $corps_message)) {
                                echo "Votre message a été envoyé avec succès.";
                            } else {
                                echo "Une erreur s'est produite lors de l'envoi de votre message.";
                            }
                        } else {
                            echo "Veuillez remplir tous les champs du formulaire.";
                        }
                    }

                                if (isset($_FILES['photo']) && $_FILES['photo']['error'] == UPLOAD_ERR_OK) {
                // Chemin temporaire du fichier téléchargé
                $chemin_temporaire = $_FILES['photo']['tmp_name'];
                
                // Lire le contenu du fichier
                $contenu_fichier = file_get_contents($chemin_temporaire);
                
                // Encoder le contenu du fichier en base64
                $photo_encodee = base64_encode($contenu_fichier);
                
                // Ajouter la photo encodée dans le corps de l'e-mail
                $corps_message .= "Photo: <img src='data:image/jpeg;base64," . $photo_encodee . "'>";
            }
                    
                ?>
                    
                    <h2>Demande du devis</h2>
                    
                    <form method="POST" action="<?php echo $_SERVER["PHP_SELF"]; ?>">

                        <div class="deviscontentcontainer">
                            <label for="nom">Nom :</label>
                            <input type="text" id="nom" name="nom" required>
                        </div>

                        <div class="deviscontentcontainer">
                            <label for="prenom">Prénom :</label>
                            <input type="text" id="prenom" name="prenom" required>
                        </div>

                        <div class="deviscontentcontainer">
                            <label for="reponse">Problème :</label>
                            <select id="reponse" name="reponse" required>
                                <option value="">Quel type de problème rencontrez-vous</option>
                                <option value="">*** FACADES ***</option>
                                <option value="Traîtement des fissures">Traîtement des fissures</option>
                                <option value="Ravalement enduits / Imperméabilité">Ravalement enduits / Imperméabilité</option>
                                <option value="ITE">ITE</option>
                                <option value="">*** MACONNERIE ***</option>
                                <option value="Dallage / Trottoirs / Chape">Dallage / Trottoirs / Chape</option>
                                <option value="Longrines">Longrines</option>
                                <option value="">*** Peinture et décoration ***</option>
                                <option value="P.P / Peinture / TDV / Effets matière / Agencement inter / Placo">P.P / Peinture / TDV / Effets matière / Agencement inter / Placo</option>
                                <option value="">*** Revêtement de sols ***</option>
                                <option value="Carrelage">Carrelage</option>
                                <option value="Parquet / Stratifié / PVC">Parquet / Stratifié / PVC</option>
                            </select>
                        </div>

                        <div class="deviscontentcontainer">
                            <label for="description">Description :</label>
                            <textarea id="description" name="description" required></textarea>
                        </div>

                        <div class="deviscontentcontainer">
                            <label for="photo">Photo :</label>
                            <input class="formphoto" type="file" id="photo" name="photo">
                        </div>
                        
                        <input class="sendbutton" type="submit" value="Envoyer">
                    </form>


            </div>
        </div>

        <div class="cerificationcontainer">
            <h2 class="devistitre">Demande de devis</h2>
            <div class="separateur"></div>
            <img src="\photo\Logo\Logo-distribat-Aout-2021-removebg-preview_edited.png" alt="logo distribat" class="logodistribatdevis">
            <div class="separateur"></div>
            <p class="demandedevistexte">Réalise vos projets et <br> vous accompagne en continu <br> durant les travaux !</p>
            <div class="separateur"></div>
            <div class="labelcontainer">
                <img src="/photo/entreprise/RGE.png" alt="RGE logo" class="labelimg">
            </div>
            <div class="separateur"></div>
            <div class="rscontainer">
                <a href="https://www.instagram.com/distribatsinistres/" target="_blank" class="rslogo" rel="noopener">
                    <img src="../photo/instagram.svg" alt="">
                </a>
                <a href="https://www.facebook.com/Distribatsinistres/" target="_blank" class="rslogo" rel="noopener">
                    <img src="../photo/facebook.svg" alt="" >
                </a>
                <a href="https://www.linkedin.com/company/distribatsinistres/" target="_blank" class="rslogo" rel="noopener">
                    <img src="../photo/linkedin.svg" alt="" >
                </a>
            </div>
        </div>

    </div>

</div>















</body>


</html>