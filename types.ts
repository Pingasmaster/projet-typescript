export type GamePhase  = 'menu' | 'running' | 'paused' | 'exploding' | 'gameover';

export interface Vector2 {x: number, y: number};
export interface Rect {x: number, y: number, w: number, t: number};
export interface SpriteMap{ 
  boat: HTMLImageElement;
  boat_damaged: HTMLImageElement;
  boat_explosion: HTMLImageElement;
  survivorv1: HTMLImageElement;
  survivorv2: HTMLImageElement;
  survivorv3: HTMLImageElement;
  mine: HTMLImageElement;
  explosion_1: HTMLImageElement;
  explosion_2: HTMLImageElement;
  explosion_3: HTMLImageElement;
  explosion_4: HTMLImageElement;
}
export interface BackgroundMap{
  waves: HTMLImageElement;
  heart: HTMLImageElement;
  logo: HTMLImageElement;
  gameover_screen: HTMLImageElement;
}

export interface EntityBase {
  id: string;
  pos: Vector2;
  lives: number;
  damaged: boolean;
}

export 
