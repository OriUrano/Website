<script lang="ts">
  import { posts } from '$lib/data/blog';
</script>

<svelte:head>
  <title>writ · ori</title>
</svelte:head>

<section class="wrap">
  <header class="head">
    <div class="chapter-mark">
      <span class="num">III.</span>
      <span>writ</span>
    </div>
    <h1 class="title">
      <em>the spellbook</em>
    </h1>
    <p class="hand">mostly blank, for now</p>
    <p class="sub">
      occasional notes on what I'm making, breaking, or figuring out. drop by again.
    </p>
  </header>

  {#if posts.length === 0}
    <div class="empty painterly">
      <div class="empty-inner">
        <p class="empty-title"><em>no entries yet</em></p>
        <p class="empty-sub">come back soon, or <a href="/contact/" class="ink-link">send me an owl</a> if you want to know when the first one lands.</p>
      </div>
    </div>
  {:else}
    <ul class="list">
      {#each posts as p (p.slug)}
        <li>
          <a class="row" href="/blog/{p.slug}/">
            <div class="row-top">
              <time>{p.date}</time>
              <h3>{p.title}</h3>
            </div>
            <p class="row-sum">{p.summary}</p>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</section>

<style>
  .wrap {
    max-width: 780px;
    margin: 0 auto;
    padding: clamp(2.5rem, 6vh, 4.5rem) clamp(1rem, 4vw, 3rem);
  }
  .head {
    margin-bottom: 3rem;
  }
  .chapter-mark {
    display: flex;
    gap: 0.55rem;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-bone-dim);
    margin-bottom: 1.25rem;
  }
  .num {
    color: var(--color-amber);
  }
  .title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(3rem, 7vw, 5rem);
    line-height: 0.95;
    letter-spacing: -0.025em;
    margin: 0 0 0.75rem;
  }
  .title em {
    color: var(--color-bone);
    font-style: italic;
    font-weight: 400;
  }
  .hand {
    font-family: var(--font-hand);
    font-size: 1.8rem;
    color: var(--color-amber);
    margin: 0 0 1.25rem;
    transform: rotate(-1.5deg);
    display: inline-block;
  }
  .sub {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.1rem;
    color: var(--color-bone-dim);
    line-height: 1.55;
    margin: 0;
    max-width: 48ch;
  }
  .empty {
    padding: 3rem 2rem;
    text-align: center;
    background: color-mix(in oklch, var(--color-midnight) 45%, transparent);
    border-radius: 3px;
    position: relative;
  }
  .empty::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px dashed color-mix(in oklch, var(--color-bone) 15%, transparent);
    border-radius: 3px;
    filter: url(#roughen);
    pointer-events: none;
  }
  .empty-title {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.6rem;
    color: var(--color-amber);
    margin: 0 0 0.6rem;
  }
  .empty-sub {
    font-family: var(--font-display);
    color: var(--color-bone-dim);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    max-width: 40ch;
    margin: 0 auto;
  }
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1.25rem;
  }
  .row {
    display: block;
    padding: 1.25rem 0;
    border-bottom: 1px dashed color-mix(in oklch, var(--color-bone) 12%, transparent);
    text-decoration: none;
    color: inherit;
    transition: transform 250ms ease;
  }
  .row:hover {
    transform: translateX(3px);
  }
  .row-top {
    display: flex;
    align-items: baseline;
    gap: 1.1rem;
    margin-bottom: 0.35rem;
  }
  .row time {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-amber);
  }
  .row h3 {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 400;
    font-size: 1.4rem;
    margin: 0;
    letter-spacing: -0.01em;
  }
  .row-sum {
    color: var(--color-bone-dim);
    font-size: 0.98rem;
    line-height: 1.55;
    margin: 0;
  }
</style>
