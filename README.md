# Sea of mines
Projet typescript de troisième année Bachelor

Description basique du projet:
Tu controlles ton bateau avec ZQSD ou les flèches du clavier, tu dois aller sauver des naufragés, c'est un jeu 2D, et on a une vue du dessus qui n'est pas focus sur l bateau (la vue est la map, ne suit pas le bateau). On a des mines qui se placent aléatoirement et qui sont visibles, si on rentre dedans avec le bateau on explose et game over. La map se "déplace" vers l'avant (l'image waves slide vers la gauche, mais c'est un carré donc l'image est zoomée x3 de base) pour génerer plus de contenu et si on sort de la map avec le bateau c'est game over. On va faire un png transparent avec les vagues en blanc pur pour l'océan et on mettre les couleurs "dessous" l'image dans le code car on veut faire un cycle jour/nuit qui a des couleurs bleu clair/ violet/ rouge/orange pour le cycle normal/nuit/matin. Pour les autres images on va juste modifier le contraste de l'image pour réduire les couleurs et la luminosité.  Voici les assets:
/assets
   /sprites
      - boat.png - image du bateau - OK
      - boat_damaged.png - (when the boat reaches 50% HP or less) image du bateau endommagé - OK
      - boat_explosion.png - image, bateau explosé quand la partie est terminée - OK
      - survivorv1.png - Image de personne version alternative 1 - OK
      - survivorv2.png - Image de personne version alternative 2 - OK
      - survivorv3.png - Image de personne version alternative 3 - OK
      - mine.png - Mine, image seule - OK
      - explosion_1.png 1/4 de tile de 4 états de l'explosion - OK
      - explosion_2.png 2/4 de tile de 4 états de l'explosion - OK
      - explosion_3.png 3/4 de tile de 4 états de l'explosion - OK
      - explosion_4.png 4/4 de tile de 4 états de l'explosion - OK
   /backgrounds
      - waves.png - png transparente avec seulement les vagues en blanc - OK
   /ui
      - heart.png - coeur qui représente les 3 vies - OK
      - logo.png - Nom du jeu "sea of mines" - OK
      - gameover_screen.png - Écran "Game over" qui se superpose à l'écran actuel à la fin de la partie après que l'animation de la mine soit terminée - OK
