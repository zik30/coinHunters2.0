import kaboom from "kaboom";
import u from "/src/assets/sprites/u.png";
import u2 from "/src/assets/sprites/u2.png";
import u3 from "/src/assets/sprites/u3.png";
import dr0ne from "/src/assets/sprites/dr0ne.png";
import burn3r from "/src/assets/sprites/burn3r.png";
import AkjolSprite from "/src/assets/sprites/AkjolSprite.png";
import BakstybekSprite from "/src/assets/sprites/BakstybekSprite.png";
import EgorSprite from "/src/assets/sprites/EgorSprite.png";
import FelixSprite from "/src/assets/sprites/FelixSprite.png";
import NurdinSprite from "/src/assets/sprites/NurdinSprite.png";
import ElhanSprite from "/src/assets/sprites/ElhanSprite.png";
import EvgeniySprite from "/src/assets/sprites/EvgeniySprite.png";
import IgorSprite from "/src/assets/sprites/IgorSprite.png";
import KanatSprite from "/src/assets/sprites/KanatSprite.png";
import RadomirSprite from "/src/assets/sprites/RadomirSprite.png";
import AlbertJSprite from "/src/assets/sprites/AlbertJSprite.png";
import AlekseiSprite from "/src/assets/sprites/AlekseiSprite.png";
import AidanaSprite from "/src/assets/sprites/AidanaSprite.png";

import uiPng from "/src/assets/ui.png";
import animationsPng from "/src/assets/animations.png";
import coinPng from "/src/assets/coin.png";
import tilesetPng from "/src/assets/tileset.png";
import backgroundPng from "/src/assets/background.png";

import notifyMp3 from "/src/assets/sounds/notify.mp3";
import boomM4a from "/src/assets/sounds/Ahtung.m4a";
import healthM4a from "/src/assets/sounds/Aliluya.m4a";
import flamethrowerMp3 from "/src/assets/sounds/flamethrower.mp3";
import Akjol1M4a from "/src/assets/sounds/Akjol-1.m4a";
import Akjol2M4a from "/src/assets/sounds/Akjol-2.m4a";
import Egor1M4a from "/src/assets/sounds/Egor-1.m4a";
import Egor2M4a from "/src/assets/sounds/Egor-2.m4a";
import FelixAhtungM4a from "/src/assets/sounds/Felix-Ahtung.m4a";
import FelixAliluyaM4a from "/src/assets/sounds/Felix-Aliluya.m4a";
import Nurdin1M4a from "/src/assets/sounds/Nurdin-1.m4a";
import Nurdin2M4a from "/src/assets/sounds/Nurdin-2.m4a";

import room1Png from "/src/maps/room1.png";
import room2Png from "/src/maps/room2.png";

export const scale = 2;
export let k;

export function initKaboom(canvas) {
  k = kaboom({
    width: 640 * scale,
    height: 360 * scale,
    scale,
    letterbox: true,
    clearColor: [0, 0, 0, 1],
    canvas,
    // global: true,
  });
  return k;
}

export function loadAssets(k) {
  k.loadFont("glyphmesss", "./assets/glyphmesss.ttf");

  k.loadSprite("player", u, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });

  k.loadSprite("player2", u2, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });

  k.loadSprite("player3", u3, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });

  k.loadSprite("drone", dr0ne, {
    sliceX: 6,
    sliceY: 3,
    anims: {
      flying: { from: 0, to: 3, loop: true },
      attack: { from: 6, to: 11, loop: true },
      explode: { from: 12, to: 17 },
    },
  });

  k.loadSprite("burner", burn3r, {
    sliceX: 5,
    sliceY: 6,
    anims: {
      idle: { from: 0, to: 3, loop: true },
      run: { from: 6, to: 8, loop: true },
      "open-fire": { from: 10, to: 14 },
      fire: { from: 15, to: 18, loop: true },
      "shut-fire": { from: 20, to: 23 },
      explode: { from: 25, to: 29 },
    },
  });

  k.loadSpriteAtlas(uiPng, {
    healthBar: {
      x: 16,
      y: 16,
      width: 60,
      height: 48,
      sliceY: 3,
    },
  });

  k.loadSpriteAtlas(animationsPng, {
    cartridge: {
      x: 125,
      y: 145,
      width: 134,
      height: 16,
      sliceX: 8,
      anims: {
        default: { from: 0, to: 4, loop: true, speed: 7 },
      },
    },
  });

  k.loadSpriteAtlas(coinPng, {
    coin: {
      x: 125,
      y: 145,
      width: 134,
      height: 16,
      sliceX: 8,
      anims: {
        default: { from: 0, to: 3, loop: true, speed: 7 },
      },
    },
  });

  k.loadSpriteAtlas(coinPng, {
    counter: {
      x: 125,
      y: 145,
      width: 134,
      height: 16,
      sliceX: 8,
      anims: {
        default: { from: 0, to: 3, loop: true, speed: 7 },
      },
    },
  });

  k.loadSprite("tileset", tilesetPng, {
    sliceX: 33,
    sliceY: 21,
  });

  k.loadSprite("background", backgroundPng, {
    sliceX: 13,
    sliceY: 25,
  });

  k.loadSound("notify", notifyMp3);
  k.loadSound("boom", boomM4a);
  k.loadSound("health", healthM4a);
  k.loadSound("flamethrower", flamethrowerMp3);
  k.loadSound("Akjol-1", Akjol1M4a);
  k.loadSound("Akjol-2", Akjol2M4a);
  k.loadSound("Egor-1", Egor1M4a);
  k.loadSound("Egor-2", Egor2M4a);
  k.loadSound("Felix-Ahtung", FelixAhtungM4a);
  k.loadSound("Felix-Aliluya", FelixAliluyaM4a);
  k.loadSound("Nurdin-1", Nurdin1M4a);
  k.loadSound("Nurdin-2", Nurdin2M4a);

  k.loadSprite("room1", room1Png);
  k.loadSprite("room2", room2Png);
  k.loadSprite("front1", AkjolSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("front2", BakstybekSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("front3", EgorSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("front4", FelixSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("front5", NurdinSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back1", ElhanSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back2", EvgeniySprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back3", IgorSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back4", KanatSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back5", RadomirSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("mob1", AlbertJSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("mob2", AlekseiSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("uxui1", AidanaSprite, {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
}
