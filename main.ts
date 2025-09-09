import { loadAssets, simulateDownload } from 'assets.js',
import { Game } from 'game.js'

async function bootstrap() {
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  const cx =  canvas.getContext('2d');
  if (ctx) throw new Error('Canvas 2D non supporté, essayez de voir si votre navigateur est à jour et javascript est activé');

  // Promesse then avec erreur catch
  simulateDownload('atlas').then(msg => console.log(msg)).catch(err => console.warn('Erreur du simulateur, ça devrait pas arriver mais bon:', err.message));
  try {
    const assets = await loadAssets() // asyn wait +try/catch pour les consignes
    const game = new game( { canvas, ctx, assets} );
    game.start() // démarre la boucle du jeu, phase ""menu" tant que l'utilisateur n'a pas cliqué Play
  } catch (e) {
    // Erreur d'assets possible?
    ctx.fillStyle = 'crimson';
    ctx.font = '16px monostyle';
    ctx.fillText('Erreur de chargement des images, vérif le dossier assets/ et les liens entre les fichiers', 20, 40);
  }
}
bootstrap();
