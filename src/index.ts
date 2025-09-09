const startButton = document.getElementById('startButton') as HTMLButtonElement;
const startScreen = document.getElementById('startScreen') as HTMLDivElement;
const gameTitle = document.getElementById('gameTitle') as HTMLHeadingElement;
const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

startButton.addEventListener('click', () => {
  // Ajoute la classe pour animer le titre
  gameTitle.classList.add('hideTitle');

  // Après l'animation (1s), cache le startScreen
  setTimeout(() => {
    startScreen.style.display = 'none';
    canvas.style.display = 'block'; // afficher le canvas si caché
    startGame(); // fonction pour démarrer la boucle de jeu
  }, 1000);
});

function startGame() {
  // Ici tu démarres ton game loop, background, player, etc.
  console.log("Le jeu commence !");
}