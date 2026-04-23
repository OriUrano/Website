<script lang="ts">
  const things = [
    { year: 'now', body: 'high school · building this site · reading too many docs' },
    { year: '2024', body: 'picked up svelte, spent a weekend on tailwind v4' },
    { year: '2023', body: 'python and small scripts · first time deploying anything' },
    { year: 'before', body: 'html + messing around with friends\' minecraft servers' }
  ];

  const stack = {
    comfortable: ['typescript', 'svelte', 'tailwind', 'python', 'git', 'bash'],
    learning: ['rust', 'aws (the bill-generating parts)', 'systems things', 'vim-fu'],
    liking: ['fraunces', 'dark-mode everything', 'small static sites', 'markdown']
  };
</script>

<svelte:head>
  <title>about · ori</title>
</svelte:head>

<article class="about">
  <header class="head">
    <div class="chapter-mark">
      <span class="num">IV.</span>
      <span>about</span>
    </div>
    <h1 class="title">
      <em>a slightly longer</em><br />introduction
    </h1>
  </header>

  <section class="body prose-grimoire">
    <p class="lead">
      <span class="dropcap">H</span>i. I'm <strong>Ori</strong> — a high-schooler who writes code
      mostly between midnight and whenever the sun comes up. There is no fancy title to put here
      yet. That's fine.
    </p>

    <p>
      I keep this site as a kind of workshop: a place to put things I've made, words I've thought
      through long enough to write down, and a way for anyone curious to find me. It's built with
      <a href="https://svelte.dev" class="ink-link" target="_blank" rel="noopener">SvelteKit</a>
      and
      <a href="https://tailwindcss.com" class="ink-link" target="_blank" rel="noopener">Tailwind</a>,
      prerendered to static files, and quietly served from S3.
    </p>

    <p>
      I'm into software that feels handmade — the kind where you can tell someone cared. Tools
      that respect your attention. Small programs that do one thing well. A nice serif in the
      right place. I'm not particularly experienced yet; I'm mostly just curious and stubborn.
    </p>

    <p>
      If any of that lands for you,
      <a href="/contact/" class="ink-link">send me an owl</a>.
    </p>
  </section>

  <aside class="sidebars">
    <div class="panel">
      <div class="panel-head">
        <span class="num">◇</span>
        <span class="label">stack</span>
      </div>
      <div class="rows">
        <div class="row">
          <span class="row-label">comfortable</span>
          <ul>
            {#each stack.comfortable as s (s)}<li>{s}</li>{/each}
          </ul>
        </div>
        <div class="row">
          <span class="row-label">learning</span>
          <ul>
            {#each stack.learning as s (s)}<li>{s}</li>{/each}
          </ul>
        </div>
        <div class="row">
          <span class="row-label">liking</span>
          <ul>
            {#each stack.liking as s (s)}<li>{s}</li>{/each}
          </ul>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-head">
        <span class="num">◇</span>
        <span class="label">roughly</span>
      </div>
      <ol class="timeline">
        {#each things as t (t.year)}
          <li>
            <span class="t-year">{t.year}</span>
            <span class="t-body">{t.body}</span>
          </li>
        {/each}
      </ol>
    </div>
  </aside>
</article>

<style>
  .about {
    max-width: 1120px;
    margin: 0 auto;
    padding: clamp(2.5rem, 6vh, 4.5rem) clamp(1rem, 4vw, 3rem);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 360px);
    grid-template-rows: auto 1fr;
    gap: 2rem clamp(2rem, 5vw, 4.5rem);
  }
  .head {
    grid-column: 1 / -1;
    margin-bottom: 1rem;
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
    font-size: clamp(2.6rem, 6vw, 4.5rem);
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin: 0;
  }
  .title em {
    color: var(--color-amber);
    font-style: italic;
    font-weight: 400;
  }
  .body {
    max-width: 62ch;
  }
  .lead {
    font-size: 1.25rem !important;
    line-height: 1.55 !important;
    font-family: var(--font-display);
    font-style: italic;
    margin: 0 0 1.6rem !important;
  }
  .lead strong {
    color: var(--color-amber);
    font-weight: 500;
    font-style: italic;
  }
  .dropcap {
    font-size: 3.6em;
    font-weight: 400;
    font-style: italic;
    float: left;
    line-height: 0.82;
    padding-right: 0.12em;
    padding-top: 0.08em;
    color: var(--color-amber);
    font-family: var(--font-display);
  }

  .sidebars {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .panel {
    padding: 1.5rem 1.5rem 1.25rem;
    background: color-mix(in oklch, var(--color-midnight) 50%, transparent);
    border-radius: 3px;
    border: 1px solid color-mix(in oklch, var(--color-bone) 7%, transparent);
    position: relative;
  }
  .panel::before {
    content: '';
    position: absolute;
    inset: -1px;
    border: 1px dashed color-mix(in oklch, var(--color-amber) 18%, transparent);
    border-radius: 3px;
    pointer-events: none;
    filter: url(#roughen);
    opacity: 0.5;
  }
  .panel-head {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.66rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-bone-dim);
    margin-bottom: 1.1rem;
  }
  .panel-head .num {
    color: var(--color-amber);
  }
  .rows {
    display: grid;
    gap: 1rem;
  }
  .row-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--color-bone-dimmer);
    margin-bottom: 0.35rem;
  }
  .row ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem 0.55rem;
  }
  .row li {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-bone);
    padding: 0.15rem 0.5rem;
    background: color-mix(in oklch, var(--color-midnight-2) 70%, transparent);
    border-radius: 2px;
  }
  .timeline {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.85rem;
  }
  .timeline li {
    display: grid;
    grid-template-columns: 4rem 1fr;
    gap: 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.4;
    padding-bottom: 0.75rem;
    border-bottom: 1px dashed color-mix(in oklch, var(--color-bone) 10%, transparent);
  }
  .timeline li:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
  .t-year {
    color: var(--color-amber);
    font-size: 0.74rem;
    letter-spacing: 0.12em;
  }
  .t-body {
    color: var(--color-bone-dim);
  }

  @media (max-width: 900px) {
    .about {
      grid-template-columns: 1fr;
    }
  }
</style>
