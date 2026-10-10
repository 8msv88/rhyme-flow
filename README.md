# Rhyme Flow

**Land the rhyme. Own the beat.**

A free, browser-based freestyle rap practice tool. A bouncing ball marks every beat — say the word when it lands. No account, no download, no mic required.

---

## Why this exists

The original Rhyme Game apps and browser versions are great for getting started. Rhyme Flow is a cleaner, faster, fully open alternative focused on:

- **Instant play** — procedural boom-bap / trap beats generated in the browser (Web Audio). No external streams.
- **Curated rhyme packs** — high-quality, freestyle-friendly families (Pain & Mind, Money, Battle, Love, Street, Motivation) instead of raw dictionary dumps.
- **Clear difficulty ladder**
  - Beginner → every rhyme shown
  - Intermediate → first of family only
  - Advanced → last word only (you set up the punchline)
  - Expert → sound family only
- **Rhyme schemes** — AABB, AAAA, ABAB
- **Local stats & day streaks** — stored in your browser
- **Built-in rhyme dictionary**
- **Tap tempo** + multiple BPMs (85–140)
- **Keyboard & touch** — Space or tap the stage to mark a hit

No voice recording. No accounts. Just reps.

---

## How to play

1. Pick BPM, theme, difficulty, scheme, and bar length (8 / 16 / 32).
2. Hit **Start Session**.
3. The ball bounces on every beat. Rhyme words land on the **4th beat** of each bar.
4. Say the word out loud (or just feel the timing). Press **Space** or tap the stage to register a hit.
5. Finish the run and check your score + streak.

---

## Tech

- Vanilla HTML / CSS / JS — zero dependencies
- Web Audio API for the beat
- `localStorage` for stats
- Works on phone and desktop

---

## Run locally

```bash
# just open it
open index.html

# or any static server
npx serve .
```

## Deploy (GitHub Pages)

Settings → Pages → Source: Deploy from branch `main` / root.

---

## License

MIT. Free to use, remix, and improve.
