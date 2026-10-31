# PlayGround

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Created using [OMGithub.com](https://omgithub.com).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://omgithub.com/ricky280/PlayGround)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/ricky280/PlayGround)

- 🎮 [Open the project](https://omgithub.com/ricky280/PlayGround).
- ✨ [Remix this project](https://omgithub.com/?remix=ricky280%2FPlayGround).
- 💻 [Explore the source](https://github.com/ricky280/PlayGround).
- 🛠️ [Check build runs](https://github.com/ricky280/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/ricky280/PlayGround/issues).
- 👤 [Explore the creator's projects](https://omgithub.com/ricky280).
- 🌍 [Create with OMGithub](https://omgithub.com).
<!-- omgithub:readme:end -->

## Blade Chain

A Fruit Ninja–style arcade game with a combo-chaining sword. Slice flying fruit, keep the chain meter alive, and every fourth link sends a lightning arc from your blade to the nearest fruit.

### Play

```bash
./start.sh
```

Then open <http://localhost:3000>.

### Controls

- **Swipe** with a mouse, pen, or finger to slice.
- **Esc / P** pauses, **M** mutes, **Space** starts or restarts.
- Touch controls work on phones and tablets; the layout respects safe areas.

### Mechanics

- Every slice feeds the **chain meter**; it drains in 1.8 seconds.
- Chain links raise the score multiplier (`×1`, `×2`, `×3`, ...).
- Every **4 links**, the sword fires a lightning arc that slices the nearest fruit for you.
- Bombs and missed fruit cost a strike. Three strikes ends the run.
- Fruit Frenzy waves arrive periodically — no bombs, lots of fruit.

The game is a static site (`index.html`, `styles.css`, `js/`) with no build step. All fruit art, particles, and audio are procedural.

