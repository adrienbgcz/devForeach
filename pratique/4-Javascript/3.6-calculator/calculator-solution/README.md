# **_LA CALCULATRICE_**

    Vous décidez de concevoir une calculatrice en javaScript.
    Le code HTML et CSS sont fournis

    Cette calculatrice doit permettre :

    - D'afficher un entier ou un décimal dans la zone appropriée comme opérande courant
    - Quand une opération est choisie, la valeur de l'opérande courant doit s'afficher dans la zone de l'opérande précédant suivi du symbole de l'opération choisie, et l'affichage de l'opérande courant doit être vidé.
    - Si un opérande précédant est présent dans sa zone d'affichage, le prochain entier ou décimal choisi doit apparaitre dans la zone de l'opérande courant
    - Si la zone de l'opérande précédant et de l'opérande courant sont remplies, le choix d'une nouvelle opération doit déclencher le calcul entre l'opérande précédant et l'opérande courant
    - Si la zone de l'opérande précédant et de l'opérande courant sont remplies, appuyer sur la touche "=" doit déclencher le calcul entre l'opérande précédant et l'opérande courant
    - la calculatrice doit empêcher de saisir plusieurs fois le symbole "." lors de la création d'un décimal
    - Si il n'y a pas d'opérande précédent, mais qu'il y a un opérande courant, appuyer sur la touche "=" ne doit déclencher aucune opération, ni ne doit placer l'opérande courant dans la zone d'affichage de l'opérande précédant.
    - La touche DEL doit permettre de supprimer le dernier nombre de l'opérande courant
    - La touche AC doit permettre de supprimer tous les opérandes, ainsi que leur affichage

---

## **_FONCTIONNALITES_**

    - Récupérer les noeuds DOM appropriés
    - Stocker l'opérande courant
    - Choisir l'opération
    - Supprimer le dernier nombre de l'opérande courant
    - Supprimer tous les opérandes
    - Calculer le résulat demandé
    - Récupérer un opérande depuis l'affichage
    - Mettre à jour l'affichage
    - Créer les écouteurs d'événements appropriés
