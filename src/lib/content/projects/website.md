---
title: this website
summary: A hand-stitched SvelteKit grimoire. Painterly, nocturnal, prerendered static and deployed to S3 + CloudFront by a GitHub Action.
year: 2026
tags: [sveltekit, tailwind v4, aws, mdsvex]
repo: https://github.com/OriUrano/Website
link: https://oriurano.dev
---

This is the site you're on.

## the stack

- **SvelteKit** with `adapter-static`, everything prerendered
- **Tailwind v4** for styling, using its new CSS-first theme config
- **MDsveX** for project write-ups and blog posts
- **Fraunces** for display type, **JetBrains Mono** for metadata, **Caveat** for handwritten flourishes
- **S3 + CloudFront** for hosting, with a GitHub Action that does the sync + invalidation on every push to `main`

## design notes

The palette is pulled from my avatar — near-black indigo as the base, with magenta, amber, and teal accents. The whole thing is meant to feel like a dim workshop: subtle film grain overlay, drifting stars in the hero, painterly mask edges on the avatar (SVG `feTurbulence` + `feDisplacementMap` is doing a lot of work here), and a handwritten accent font for the occasional moody note.

Nothing here is especially load-bearing — it's a personal site. But I wanted it to feel like a place, not a template.
