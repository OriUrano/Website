<script lang="ts">
  import { getPost } from '$lib/data/blog';

  let { data } = $props();

  const loaded = $derived(getPost(data.post.slug));
</script>

<svelte:head>
  <title>{data.post.title} · ori</title>
  <meta name="description" content={data.post.summary} />
</svelte:head>

<article class="wrap">
  <header class="head">
    <a href="/blog/" class="back">← all entries</a>
    <time class="date">{data.post.date}</time>
    <h1 class="title">{data.post.title}</h1>
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
    max-width: 680px;
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
  .date {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-amber);
    margin-bottom: 0.75rem;
  }
  .title {
    font-family: var(--font-display);
    font-weight: 400;
    font-style: italic;
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    line-height: 1.05;
    letter-spacing: -0.015em;
    margin: 0;
  }
</style>
