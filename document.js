
  let winJoueurX = 0;         //Manche gangier Joueur X
  let winJoueurO = 0;         //Manche gangier Joueur O
  let joueur     = 1;         //On définit le joueurs qui commance
  let play       = 0;         //Le nombre de tours d'une manche
  let stopManche = false;     //Stoper la manche qui est terminer;

  function Initialisation() {                                         //Il inialise à chaque modification
    document.getElementById("rejouer").style.visibility = "hidden";   //On cache le bouton "Rejouer"
    document.getElementById("notif").style.visibility = "hidden";     //On cache la notif
  }

  function alertMessagePlayeur(niveauAlert, joueurAppeler){                           //Function alert message si erreur ou win

    document.getElementById("notif").style.visibility = "visible";                    //On lui rende visible

    if(niveauAlert === 1){                                                            //Si la une case remplie et un joueur essayer de jouer
      var textMessage = "Vous ne pouvez pas faire cela joueur " + joueurAppeler;      //Text message
      var textHeader  = "erreur"                                                      //Text header
    }

    if(niveauAlert === 2){                                                            //Si la un win d'un joueur
      var textMessage = "le joueur " + joueurAppeler + " à gagnier la manche";        //Text message
      var textHeader  = "Fin de manche"                                               //Text Header
    }

    if(niveauAlert === 3){                                                            //Si la win de partie d'un joueur
      var textMessage = "le joueur " + joueurAppeler + " à gagnier la partie";        //Text message
      var textHeader  = "Fin de partie"                                               //Text Header
    }

    if(niveauAlert === 4){                                                            //Si la une égaliter
      var textMessage = "Manche égaliter";                                            //Text message
      var textHeader  = "Fin de manche"                                               //Text Header
    }

    if(niveauAlert === 5){                                                            //C'est au joueurs X de jouer
      var textMessage = "joueur X de jouer";                                          //Text message
      var textHeader  = "Le tours de"                                                 //Text header
    }

    if(niveauAlert === 6){                                                            //C'est au joueur O de jouer
      var textMessage = "joueur O de jouer";                                          //Text message
      var textHeader  = "Le tours de"                                                 //Text Header
    }

    if(niveauAlert === 7){                                                            //On informe que c'est le perdant qui joue
      var textMessage = "du perdant"                                                  //Text message
      var textHeader  = "Au tours"                                                    //Text Header
    }

    document.getElementById("messageAlert").textContent   = textMessage;              //remplire le textContent du message
    document.getElementById("messageHeader").textContent  = textHeader;               //remplire le textContent du header
  }

  function reloadGame(){                                                              //Function relancer une autre manche
    document.getElementById("rejouer").style.visibility   = "visible";                //Rend visible le bouton rejouer
    document.getElementById("rejouer").onclick = function() {                         //Ce qui se passe quand on appuye
      var i = 0;                                                                      //On créer une variable i pour tous selecte les carres
      stopManche = false;                                                             //On redonne le droit de jouer
      play = 0;                                                                       //On résete le tours jouer
      alertMessagePlayeur(7);                                                         //On afficher la notif

      while (i < 9) {                                                                 //Boucle pour chaque carre
        document.getElementsByClassName('carre')[i].style.backgroundImage   = null;   //Retire l'image
        document.getElementsByClassName('carre')[i].className               = "carre";//On laisse que carre
        document.getElementsByClassName('carre')[i].textContent             = i;      //On redonne le text de base
        i += 1;                                                                       //On plus 1 à I pour la bloucle
        }
      }
  }

  function Score() {
    document.getElementById('scoreX').textContent = winJoueurO;                       //Afficher le score
    document.getElementById('scoreO').textContent = winJoueurX;                       //Afficher le score

    if(winJoueurO > 5 || winJoueurX > 5){                                             //Si le score et égale ou plus haute d'un joueurs
      document.getElementById("rejouer").style.visibility = "visible";                //On rende visible le button
      document.getElementById("button").textContent       = "Relancer une partie";    //Text message button
      document.getElementById("rejouer").onclick          = function(){               //Ce qui se passe quand on appuye
        location.reload();                                                            //Raffrichire la page
      }

      if(winJoueurX > 5) {                                                            //Si le joueurs égale 5 ou audessus
        alertMessagePlayeur(3, winJoueurX);                                           //Fenetre affiche le winer
      }

      if(winJoueurO > 5) {                                                            //Si le joueurs égale 5 ou audessus
        alertMessagePlayeur(3, winJoueurO);                                           //Fenetre affiche le winer
      }
    }
  }

  function jouer(zone) {                                                             //Recupère le nom de la zone cliquée via "zone"

  if (joueur === 1) {                                                                //Si le joueur et egale au joueur 'X'

      if (document.getElementById(zone).className.indexOf('remplie') >= 0 || stopManche === true) { //Si la case et dejà pleine (class remplie)
        alertMessagePlayeur(1, joueur);                                                             //On affiche une alerte
        return;                                                                                     //Stop la function
      }
      else {
        document.getElementById(zone).style.backgroundImage  = "url(image-morpion/croix.png)";      //Sinon on definit le background de la case avec l'image Croix
        document.getElementById(zone).className             += " remplie";                          //Et on lui ajoute la class "remplie" pour ne plus pouvoir la changer
        document.getElementById(zone).textContent            = " ";                                 //On lui donne textContent distinctif
        joueur += 1;                                                                                //On passe la main au joueur 'RONDS'
        play += 1;                                                                                  //Plus 1+ nombre de tours passer
        alertMessagePlayeur(6);                                                                     //Informer du changement de main
      }
    }
    else if (joueur === 2) {                                                                        //Si le joueur et egale au joueur 'O'

      if (document.getElementById(zone).className.indexOf('remplie') >= 0 || stopManche === true) { //Si la case et dejà pleine (class remplie)
        alertMessagePlayeur(1, joueur);                                                             //On affiche un alerte
        return;                                                                                     //Stop la function
      }
      else {
      document.getElementById(zone).style.backgroundImage  = "url(image-morpion/rond.png)";         //Sinon on definit le background de la case avec l'image Rond
      document.getElementById(zone).className             += " remplie";                            //Et on lui ajoute la class "remplie" pour ne plus pouvoir la changer
      document.getElementById(zone).textContent            = "  ";                                  //On lui donne textContent distinctif
      joueur -= 1;                                                                                  //On passe la main au joueur 'CROIX'
      play += 1;                                                                                    //Plus 1+ nombre de tours passer
      alertMessagePlayeur(5);                                                                       //Informer du changement de main
      }
    }
    checking();                                                                                     //On fait un check :)
  }

  function checking() {
    one   = document.getElementById('Zone1').textContent; //Definition des getelement pour racourcir le if()
    two   = document.getElementById('Zone2').textContent;
    three = document.getElementById('Zone3').textContent;
    four  = document.getElementById('Zone4').textContent;
    five  = document.getElementById('Zone5').textContent;
    six   = document.getElementById('Zone6').textContent;
    seven = document.getElementById('Zone7').textContent;
    eight = document.getElementById('Zone8').textContent;
    nine  = document.getElementById('Zone9').textContent;

    if(play === 9){                    //Si la 9 tour qui sont passé
      alertMessagePlayeur(4, null);    //Fenetre d'alert
      reloadGame();                    //Appel de la function reloadGame
      stopManche = true;               //Plus un pour bloquer les actions de la manche terminer
      return;
    }

    if (one   === two   && one    === three ||  //Win Longeur
        four  === five  && four   === six   ||
        seven === eight && seven  === nine  ||
        one   === five  && one    === nine  ||  //Win Hauteur
        three === five  && three  === seven ||
        one   === four  && one    === seven ||
        two   === five  && two    === eight ||  //Win Dyagonald
        three === six   && three  === nine){

      if (joueur === 1) {               //Si c'est joueur O
        alertMessagePlayeur(2, joueur); //Fenetre d'alerte
        winJoueurO += 1;                //Ajoute du point
      }

      else if (joueur === 2) {          //Si c'est joueur X
        alertMessagePlayeur(2, joueur); //Fenetre d'alerte
        winJoueurX += 1;                //Ajoute du point
      }
      document.getElementById("button").textContent = "Prochain manche";    //Changer le text du boutton
      reloadGame();                                                         //Appel de la function reloadGame
      stopManche = true;                                                    //Plus un pour bloquer les actions de la manche terminer
      Score();                                                              //Appel de la function Score
    }
  }

  /* Les sources des codes que j'ai pris ou des aide trouvée.
    les code de base: https://github.com/bZez/JS-Morpion
    css la positon:   https://www.alsacreations.com/article/lire/539-Centrer-les-elements-ou-un-site-web-en-CSS.html
    Aide mémoire:     https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web  et  https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript
  */
