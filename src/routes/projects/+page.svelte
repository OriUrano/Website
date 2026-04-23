<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
</script>

<svelte:head>
  <title>works · ori</title>
</svelte:head>

<section class="wrap">
  <header class="head">
    <div class="chapter-mark">
      <span class="num">II.</span>
      <span>works</span>
    </div>
    <h1 class="title">
      spells<br />
      <em>in the kiln</em>
    </h1>
    <p class="sub">
      things I've built, in varying states of done. the shape of a project shows even before
      the details are filed smooth.
    </p>
  </header>

  {#if projects.length > 0}
    <ul class="grid">
      {#each projects as p (p.slug)}
        <li><ProjectCard project={p} /></li>
      {/each}
    </ul>
  {:else}
    <p class="muted">The kiln is cold for the moment.</p>
  {/if}
</section>

<style>
  .wrap {
    max-width: 1060px;
    margin: 0 auto;
    padding: clamp(2.5rem, 6vh, 4.5rem) clamp(1rem, 4vw, 3rem);
  }
  .head {
    margin-bottom: 3rem;
    max-width: 720px;
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
    font-size: clamp(2.8rem, 7vw, 5rem);
    line-height: 0.95;
    letter-spacing: -0.025em;
    margin: 0 0 1.25rem;
  }
  .title em {
    color: var(--color-amber);
    font-style: italic;
    font-weight: 400;
  }
  .sub {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.15rem;
    line-height: 1.55;
    color: var(--color-bone-dim);
    margin: 0;
    max-width: 52ch;
  }
  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .muted {
    color: var(--color-bone-dim);
    font-style: italic;
  }
</style>
