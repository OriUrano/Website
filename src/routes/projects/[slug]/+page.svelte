<script lang="ts">
  import { getProject } from '$lib/data/projects';

  let { data } = $props();

  const loaded = $derived(getProject(data.project.slug));
</script>

<svelte:head>
  <title>{data.project.title} · ori</title>
  <meta name="description" content={data.project.summary} />
</svelte:head>

<article class="wrap">
  <header class="head">
    <a href="/projects/" class="back">← all works</a>
    <div class="meta-row">
      <span class="year">{data.project.year}</span>
      <ul class="tags">
        {#each data.project.tags as tag (tag)}<li>{tag}</li>{/each}
      </ul>
    </div>
    <h1 class="title">{data.project.title}</h1>
    <p class="sum">{data.project.summary}</p>
    {#if data.project.repo || data.project.link}
      <div class="links">
        {#if data.project.link}
          <a href={data.project.link} target="_blank" rel="noopener" class="ink-link">
            live →
          </a>
        {/if}
        {#if data.project.repo}
          <a href={data.project.repo} target="_blank" rel="noopener" class="ink-link">
            source →
          </a>
        {/if}
      </div>
    {/if}
  </header>

  {#if loaded?.Component}
    {@const Component = loaded.Component}
    <section class="prose-grimoire">
      <Component />
    </section>
  {/if}
</article>

<style>
  .wrap {
    max-width: 720px;
    margin: 0 auto;
    padding: clamp(2.5rem, 6vh, 4rem) clamp(1rem, 4vw, 2rem);
  }
  .head {
    margin-bottom: 2.5rem;
    border-bottom: 1px dashed color-mix(in oklch, var(--color-bone) 12%, transparent);
    padding-bottom: 2rem;
  }
  .back {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.66rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--color-bone-dim);
    text-decoration: none;
    margin-bottom: 2rem;
    transition: color 200ms ease;
  }
  .back:hover {
    color: var(--color-amber);
  }
  .meta-row {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }
  .year {
    color: var(--color-amber);
  }
  .tags {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 0.6rem;
    color: var(--color-bone-dimmer);
  }
  .tags li::before {
    content: '· ';
    margin-right: 0.1rem;
  }
  .title {
    font-family: var(--font-display);
    font-weight: 400;
    font-style: italic;
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    line-height: 1.05;
    letter-spacing: -0.015em;
    margin: 0 0 0.9rem;
  }
  .sum {
    font-family: var(--font-display);
    font-size: 1.2rem;
    line-height: 1.55;
    color: var(--color-bone-dim);
    margin: 0 0 1.25rem;
  }
  .links {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }
</style>
