import { Game } from './game.js';
import { Sound } from './audio.js';

const $ = (id) => document.getElementById(id);

const sound = new Sound();

const ui = {
  menu: $('menu'),
  over: $('over'),
  pause: $('pause'),
  score: $('score'),
  hudBest: $('hudBest'),
  chainCount: $('chainCount'),
  chainMult: $('chainMult'),
  chainFill: $('chainFill'),
  chainBlock: $('chainBlock'),
  chainHint: $('chainHint'),
  livesEl: $('lives'),
  lives: Array.from($('lives').querySelectorAll('.strike')),
  menuBest: $('menuBest'),
  finalScore: $('finalScore'),
  statSliced: $('statSliced'),
  statChain: $('statChain'),
  statBest: $('statBest'),
  newBest: $('newBest'),
};

const game = new Game($('game'), ui, sound);

function syncSoundUi() {
  document.body.classList.toggle('muted', sound.muted);
  $('soundLink').textContent = sound.muted ? 'SOUND OFF' : 'SOUND ON';
  $('muteBtn').setAttribute('aria-label', sound.muted ? 'Enable sound' : 'Mute sound');
}

function toggleSound() {
  sound.unlock();
  sound.toggle();
  syncSoundUi();
}

syncSoundUi();

$('playBtn').addEventListener('click', () => {
  sound.unlock();
  sound.ui();
  game.start();
});

$('againBtn').addEventListener('click', () => {
  sound.unlock();
  sound.ui();
  game.start();
});

$('resumeBtn').addEventListener('click', () => game.resume());
$('restartBtn').addEventListener('click', () => game.start());
$('quitBtn').addEventListener('click', () => game.toMenu());
$('overMenuBtn').addEventListener('click', () => game.toMenu());
$('pauseBtn').addEventListener('click', () => game.pause());
$('muteBtn').addEventListener('click', toggleSound);
$('soundLink').addEventListener('click', toggleSound);

window.addEventListener('keydown', (event) => {
  if (event.repeat) return;
  const key = event.key.toLowerCase();

  if (key === 'm') {
    toggleSound();
    return;
  }

  if (key === 'escape' || key === 'p') {
    if (game.state === 'playing') {
      event.preventDefault();
      game.pause();
    } else if (game.state === 'paused') {
      event.preventDefault();
      game.resume();
    }
    return;
  }

  if (key === ' ' || key === 'enter') {
    if (game.state === 'menu' || game.state === 'over') {
      event.preventDefault();
      sound.unlock();
      sound.ui();
      game.start();
    } else if (game.state === 'paused') {
      event.preventDefault();
      game.resume();
    }
  }
});

// Unlock audio on the first interaction anywhere.
window.addEventListener('pointerdown', () => sound.unlock(), { once: true });
window.addEventListener('keydown', () => sound.unlock(), { once: true });

// Expose a tiny surface for automated verification and debugging.
window.__game = game;
window.__bladeChain = {
  get state() { return game.state; },
  get score() { return game.score; },
  get chain() { return game.chain; },
  get lives() { return game.lives; },
  get fruits() { return game.fruits.length; },
  start: () => game.start(),
  pause: () => game.pause(),
  resume: () => game.resume(),
};
