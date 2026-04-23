<script lang="ts">
  import Starfield from '$lib/components/Starfield.svelte';
  import Avatar from '$lib/components/Avatar.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';

  const featured = projects.slice(0, 3);
</script>

<svelte:head>
  <title>Ori · a small dim workshop</title>
</svelte:head>

<section class="hero">
  <div class="starwrap"><Starfield /></div>

  <div class="hero-grid">
    <aside class="meta">
      <div class="chapter-mark">
        <span class="num">I.</span>
        <span>a workshop</span>
      </div>
      <dl class="entries">
        <div><dt>role</dt><dd>tinkerer</dd></div>
        <div><dt>status</dt><dd>high-schooler</dd></div>
        <div><dt>stack</dt><dd>ts · svelte · python · rust-curious</dd></div>
        <div><dt>hours</dt><dd>nocturnal</dd></div>
      </dl>
    </aside>

    <h1 class="name">
      <span class="line l1 rise" style="animation-delay: 80ms">ori</span>
      <span class="ampersand rise" style="animation-delay: 180ms" aria-hidden="true">·</span>
      <span class="line l2 rise" style="animation-delay: 240ms">urano</span>
    </h1>

    <div class="avatar-wrap rise" style="animation-delay: 380ms">
      <Avatar size={360} />
    </div>

    <p class="tagline rise" style="animation-delay: 520ms">
      a small, dim <em>workshop</em> for half-finished spells<br />
      and whatever else wanders in after midnight.
    </p>

    <div class="cta-row rise" style="animation-delay: 680ms">
      <a href="/projects/" class="cta-primary">
        <span>see the works</span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>
      <a
        href="https://github.com/OriUrano"
        class="cta-secondary"
        target="_blank"
        rel="noopener me"
      >
        <span class="sig" aria-hidden="true">◬</span>
        <span>github / oriurano</span>
      </a>
    </div>
  </div>

  <div class="scroll-cue" aria-hidden="true">
    <span class="line-small">scroll</span>
    <span class="tick"></span>
  </div>
</section>

<section class="about-teaser">
  <div class="chapter-mark">
    <span class="num">II.</span>
    <span>who</span>
  </div>
  <p class="drop">
    <span class="dropcap">I</span> am a high-schooler who stays up too late writing code. I'm still
    figuring most of it out — which, I'm told, is pretty much the whole point. This site is my
    scratchpad: projects I've built, a few words when I've got them, and a way to send me owls.
  </p>
  <a href="/about/" class="ink-link arrow-link">read the longer version →</a>
</section>

<section class="works">
  <div class="chapter-mark">
    <span class="num">III.</span>
    <span>spells in the kiln</span>
  </div>
  {#if featured.length > 0}
    <ul class="grid">
      {#each featured as p (p.slug)}
        <li><ProjectCard project={p} /></li>
      {/each}
    </ul>
    <a href="/projects/" class="ink-link arrow-link more">all works →</a>
  {:else}
    <p class="muted">The kiln is cold for the moment.</p>
  {/if}
</section>

<section class="writ-teaser">
  <div class="chapter-mark">
    <span class="num">IV.</span>
    <span>writ</span>
  </div>
  <p class="hand">the spellbook is still mostly blank</p>
  <a href="/blog/" class="ink-link arrow-link">peek the table of contents →</a>
</section>

<section class="send-teaser">
  <div class="chapter-mark">
    <span class="num">V.</span>
    <span>send an owl</span>
  </div>
  <p class="tagline-sm">say hi, point out something broken, ask anything —</p>
  <div class="cta-row">
    <a
      href="https://github.com/OriUrano"
      class="cta-primary"
      target="_blank"
      rel="noopener me"
    >
      <span>find me on github</span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>
    <a href="/contact/" class="ink-link arrow-link">other ways →</a>
  </div>
</section>

<style>
  section {
    position: relative;
    padding: 0 clamp(1rem, 4vw, 3rem);
  }

  .hero {
    min-height: 92vh;
    padding-top: clamp(2rem, 6vh, 4rem);
    padding-bottom: clamp(3rem, 8vh, 6rem);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .starwrap {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
  .hero-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 220px) minmax(0, 1fr) minmax(0, 360px);
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'meta   name    avatar'
      'meta   tag     avatar'
      'meta   cta     avatar';
    gap: 1.25rem clamp(1.5rem, 4vw, 3.5rem);
    align-items: end;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  .meta {
    grid-area: meta;
    align-self: start;
    padding-top: 0.75rem;
  }
  .chapter-mark {
    display: flex;
    align-items: baseline;
    gap: 0.55rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-bone-dim);
    margin-bottom: 1.2rem;
  }
  .num {
    color: var(--color-amber);
  }
  .entries {
    display: grid;
    gap: 0.35rem;
    margin: 0;
  }
  .entries > div {
    display: grid;
    grid-template-columns: 4.5rem 1fr;
    gap: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
  }
  .entries dt {
    color: var(--color-bone-dimmer);
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.62rem;
    padding-top: 0.18em;
  }
  .entries dd {
    margin: 0;
    color: var(--color-bone-dim);
  }

  .name {
    grid-area: name;
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(5rem, 15vw, 13rem);
    line-height: 0.85;
    letter-spacing: -0.045em;
    margin: 0;
    color: var(--color-bone);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.1em 0.35em;
  }
  .line {
    display: inline-block;
  }
  .name .l1 {
    font-style: italic;
    font-weight: 400;
  }
  .name .l2 {
    font-style: normal;
    font-weight: 300;
    color: var(--color-bone);
    background: linear-gradient(
      180deg,
      var(--color-bone) 0%,
      var(--color-bone) 55%,
      color-mix(in oklch, var(--color-amber) 60%, var(--color-bone)) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .ampersand {
    display: inline-block;
    color: var(--color-amber);
    font-family: var(--font-mono);
    font-size: 0.35em;
    transform: translateY(-0.3em);
  }

  .avatar-wrap {
    grid-area: avatar;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tagline {
    grid-area: tag;
    font-family: var(--font-display);
    font-size: clamp(1.05rem, 1.5vw, 1.3rem);
    font-style: italic;
    line-height: 1.5;
    letter-spacing: 0.005em;
    max-width: 40ch;
    color: var(--color-bone-dim);
    margin: 0.3rem 0 0;
  }
  .tagline em {
    color: var(--color-amber);
    font-style: italic;
  }

  .cta-row {
    grid-area: cta;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem 1.8rem;
    margin-top: 0.8rem;
  }
  .cta-primary {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.85rem 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-ink);
    background: var(--color-amber);
    border-radius: 2px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px color-mix(in oklch, var(--color-amber) 60%, transparent),
      0 0 30px -4px rgba(245, 165, 91, 0.55);
    transition:
      transform 250ms ease,
      box-shadow 250ms ease,
      background 250ms ease;
  }
  .cta-primary:hover {
    transform: translateY(-1px);
    background: var(--color-amber-hot);
    box-shadow:
      0 0 0 1px color-mix(in oklch, var(--color-amber-hot) 70%, transparent),
      0 0 42px -4px rgba(255, 184, 107, 0.75);
  }
  .cta-primary .arrow {
    transition: transform 250ms ease;
  }
  .cta-primary:hover .arrow {
    transform: translateX(4px);
  }
  .cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-bone);
    text-decoration: none;
    padding: 0.85rem 0;
    border-bottom: 1px solid color-mix(in oklch, var(--color-bone) 25%, transparent);
    transition:
      color 220ms ease,
      border-color 220ms ease;
  }
  .cta-secondary:hover {
    color: var(--color-amber);
    border-color: var(--color-amber);
  }
  .cta-secondary .sig {
    color: var(--color-amber);
  }

  .scroll-cue {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    z-index: 2;
    animation: cue 2.8s ease-in-out infinite;
  }
  .scroll-cue .line-small {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--color-bone-dimmer);
  }
  .scroll-cue .tick {
    width: 1px;
    height: 28px;
    background: linear-gradient(
      to bottom,
      color-mix(in oklch, var(--color-amber) 80%, transparent),
      transparent
    );
  }
  @keyframes cue {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
      opacity: 0.7;
    }
    50% {
      transform: translateX(-50%) translateY(6px);
      opacity: 1;
    }
  }

  /* Shared section styles */
  .about-teaser,
  .works,
  .writ-teaser,
  .send-teaser {
    max-width: 1060px;
    margin: 0 auto;
    padding-top: clamp(3rem, 10vh, 6rem);
    padding-bottom: clamp(2rem, 6vh, 4rem);
  }

  .about-teaser {
    max-width: 720px;
  }
  .drop {
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 1.6vw, 1.4rem);
    line-height: 1.55;
    color: var(--color-bone);
    margin: 0 0 1.25rem;
  }
  .dropcap {
    font-size: 3.6em;
    font-weight: 400;
    font-style: italic;
    float: left;
    line-height: 0.82;
    padding-right: 0.1em;
    padding-top: 0.08em;
    color: var(--color-amber);
    font-family: var(--font-display);
  }

  .arrow-link {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .grid {
    list-style: none;
    margin: 0 0 2rem;
    padding: 0;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  .more {
    display: inline-block;
    margin-top: 0.5rem;
  }

  .writ-teaser {
    max-width: 720px;
  }
  .hand {
    font-family: var(--font-hand);
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    color: var(--color-amber);
    line-height: 1;
    margin: 0 0 1rem;
    transform: rotate(-1.5deg);
    display: inline-block;
  }

  .send-teaser {
    max-width: 720px;
  }
  .tagline-sm {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.15rem;
    line-height: 1.55;
    color: var(--color-bone-dim);
    margin: 0 0 1.5rem;
  }

  .muted {
    color: var(--color-bone-dim);
    font-style: italic;
  }

  /* Responsive */
  @media (max-width: 980px) {
    .hero-grid {
      grid-template-columns: 1fr;
      grid-template-areas:
        'meta'
        'avatar'
        'name'
        'tag'
        'cta';
      align-items: start;
      gap: 1.5rem;
    }
    .meta {
      padding-top: 0;
    }
    .avatar-wrap {
      justify-content: flex-start;
    }
    .name {
      font-size: clamp(4.5rem, 18vw, 8rem);
    }
    .scroll-cue {
      display: none;
    }
  }
</style>
