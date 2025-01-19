# **GESTION ET SPECIFICITÉS DU PROJET**

## **NOMBRE DE COLLABORATEURS pour le projet collectif** :
     3

## **TEMPS de conception et démonstration**: 
     2 semaines

## **THEME de l'EXTENSION CHOISI et OBJECTIFS:**

  - Ce  premier projet collectif est un **jeu de quiz interactif**, conçu pour tester les connaissances des utilisateurs sur différents thèmes ou catégories.
  
  - Le but principal est de permettre aux utilisateur·ices de répondre à une série de questions et d'évaluer leurs connaissances en temps réel, avec un retour immédiat sur leurs réponses ou à la fin du quiz.

## **ORGANISATION de TRAVAIL et OUTILS:**

### - Selon la répartition des tâches, en Mob/Pair/Split Programming

### - Outils utilisés :
  
    - Trello: Kanban/Retroplanning/Retrospective 4L
    
    - Git et Git Hub
    
    - VSCode
      

## **MVP : FONCTIONNALITES et OBJECTIFS dans le CADRE du PROJET:**
 
  1. L'application propose une **série de 4 questions minimum**, sur un thème de votre choix.
    
  2. Lorsque l‘utilisateur·ice arrive sur la page d‘accueil du site, **iel voit la première question de cette série,
        avec plusieurs réponses possibles parmi lesquelles iel doit choisir.**
    
  3. L'utilisateur·ice **clique sur l'une des options de réponse** à cette question.
    
  4. Le bouton **"Suivant" reste désactivé** tant que l'utilisateur·ice n'a pas sélectionné une réponse.
    
  5. Lorsque l'utilisateur·ice sélectionne une option, **les autres options ne peuvent plus être sélectionnées.**

  6. **Le résultat** (bonne réponse ou mauvaise réponse) est **affiché immédiatement.**

  7. Le bouton **"Suivant" est de nouveau actif**, quand il est cliqué par l'utilisateur·ice,
        il passe à la question suivante.

  8. **Le score est calculé et affiché à la fin du quiz**. Un message personnalisé est affiché en fonction du score.

  9. Une fois le quiz terminé, l'utilisateur·ice a la possibilité de **cliquer un bouton pour rejouer.**
    

## **VERSION 2: OBJECTIFS et FONCTIONNALITES pour la version 2 du projet:**

  **1. Ajout d'une barre de progression** permettant aux joueur·ses de voir
        combien de questions il reste avant de finir le quiz.

  **2. Ajout d'une barre de navigation (navbar)** qui permet aux joueur·ses de choisir parmi
        plusieurs quiz sur des thématiques différentes,
         
  **3. Ajout d'un timer de 15s** avec les fonctions setInterval() et clearInterval () par question.

  **4. Utilisation du local storage pour stocker les scores** de le·la joueur·se sur son navigateur
          et les afficher dans une page dédiée.

  **5. Integration d'animation CSS**


## **Fonctionnement technique** ##

   **a. Chargement du quiz**
   
          Le script charge le quiz en fonction de la valeur mémorisée dans le sessionStorage.
          Si aucune valeur n'est présente, le premier quiz (QUIZ1) est sélectionné par défaut.
    
   **b. Interactions utilisateur**
   
          L'utilisateur sélectionne une réponse en cliquant sur un bouton.
          Le script compare la réponse choisie avec la réponse correcte et met à jour la couleur de la bordure
              (vert pour correct, rouge pour incorrect).

   **c. Stockage des données**
   
           Le localStorage est utilisé pour sauvegarder :
            -Les scores de chaque tentative.
            -Le nombre total de tentatives.
           Le sessionStorage est utilisé pour mémoriser le thème choisi par l'utilisateur.

   **d. Navigation**
   
          Les boutons de navigation permettent de changer de thème en redémarrant le quiz avec de nouvelles questions.

        

     
