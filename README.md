# **GESTION ET SPECIFICITÉS DU PROJET**

## 🤝 **NOMBRE DE COLLABORATEURS pour le projet collectif** :
     3

## ⌛️ **TEMPS de conception et démonstration**: 
     2 semaines

## ❓**THEME de l'EXTENSION CHOISI et OBJECTIFS:**

 📌 Ce  premier projet collectif est un **jeu de quiz interactif**, conçu pour tester les connaissances des utilisateurs sur différents thèmes ou catégories.
  
 📌  Le but principal est de **permettre aux utilisateur·ices de répondre à une série de questions** et d'évaluer leurs connaissances en temps réel, avec un retour immédiat sur leurs réponses ou à la fin du quiz.

## 📋**ORGANISATION de TRAVAIL et OUTILS:**

### 💻  - Selon la répartition des tâches, en Mob/Pair/Split Programming

### 🔧 - Outils utilisés :
  
📌 **Trello**: Kanban/Retroplanning/Retrospective 4L
    
📌 **Git et Git Hub**
    
📌 **VSCode**
      

## ✔️**MVP : FONCTIONNALITES et OBJECTIFS dans le CADRE du PROJET:**
 
  ✅  L'application propose une **série de 4 questions minimum**, sur un thème de votre choix.
    
  ✅  Lorsque l‘utilisateur·ice arrive sur la page d‘accueil du site, **iel voit la première question de cette série,
        avec plusieurs réponses possibles parmi lesquelles iel doit choisir.**
    
  ✅  L'utilisateur·ice **clique sur l'une des options de réponse** à cette question.
    
  ✅  Le bouton **"Suivant" reste désactivé** tant que l'utilisateur·ice n'a pas sélectionné une réponse.
    
  ✅  Lorsque l'utilisateur·ice sélectionne une option, **les autres options ne peuvent plus être sélectionnées.**

  ✅ **Le résultat** (bonne réponse ou mauvaise réponse) est **affiché immédiatement.**

  ✅  Le bouton **"Suivant" est de nouveau actif**, quand il est cliqué par l'utilisateur·ice,
        il passe à la question suivante.

  ✅  **Le score est calculé et affiché à la fin du quiz**. Un message personnalisé est affiché en fonction du score.

  ✅  Une fois le quiz terminé, l'utilisateur·ice a la possibilité de **cliquer un bouton pour rejouer.**
    

## ➕**VERSION 2: OBJECTIFS et FONCTIONNALITES pour la version 2 du projet:**

  ✅ **Ajout d'une barre de progression** permettant aux joueur·ses de voir
        combien de questions il reste avant de finir le quiz.

  ✅ **Ajout d'une barre de navigation (navbar)** qui permet aux joueur·ses de choisir parmi
        plusieurs quiz sur des thématiques différentes,
         
  ✅ **Ajout d'un timer de 15s** avec les fonctions setInterval() et clearInterval () par question.

  ✅ **Utilisation du local storage pour stocker les scores** de le·la joueur·se sur son navigateur
          et les afficher dans une page dédiée.

  ✅ **Integration d'animation CSS**


## 🔎 **FONCTIONNEMENT TECHNIQUE** ##

   1️⃣**Chargement du quiz**
   
📌  **Le script charge le quiz** en fonction de la valeur mémorisée dans le sessionStorage.

📌  Si aucune valeur n'est présente, **le premier quiz (QUIZ1) est sélectionné par défaut.**
    
   2️⃣**Interactions utilisateur**
   
📌 L'utilisateur sélectionne une réponse en **cliquant sur un bouton.**

📌 Le script compare la réponse choisie avec la réponse correcte et **met à jour la couleur de la bordure**
      (vert pour correct, rouge pour incorrect).

   3️⃣**Stockage des données**
   
 📌 Le **localStorage est utilisé pour sauvegarder** :
            -Les scores de chaque tentative.
            -Le nombre total de tentatives.
            
 📌 Le **sessionStorage est utilisé pour mémoriser le thème choisi par l'utilisateur.**

   4️⃣**Navigation**
   
 📌 Les boutons de navigation permettent de **changer de thème** en redémarrant le quiz avec de nouvelles questions.

        

     
