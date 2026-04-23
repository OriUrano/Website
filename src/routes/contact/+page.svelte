<script lang="ts">
  const methods = [
    {
      label: 'github',
      handle: '@OriUrano',
      note: 'the main one — issues, DMs via discussions, or just say hi on a repo.',
      href: 'https://github.com/OriUrano',
      sigil: '◬'
    }
  ];
</script>

<svelte:head>
  <title>send an owl · ori</title>
</svelte:head>

<section class="wrap">
  <header class="head">
    <div class="chapter-mark">
      <span class="num">V.</span>
      <span>send an owl</span>
    </div>
    <h1 class="title">
      <em>say something</em>
    </h1>
    <p class="sub">
      no forms here — just a list of places I answer. fastest route is github.
    </p>
  </header>

  <ul class="methods">
    {#each methods as m (m.label)}
      <li>
        <a href={m.href} target="_blank" rel="noopener me" class="method painterly">
          <span class="sigil" aria-hidden="true">{m.sigil}</span>
          <div class="copy">
            <div class="top-line">
              <span class="label">{m.label}</span>
              <span class="handle">{m.handle}</span>
            </div>
            <p class="note">{m.note}</p>
          </div>
          <span class="arrow" aria-hidden="true">→</span>
        </a>
      </li>
    {/each}
  </ul>

  <p class="soon">
    <span class="hand">more to come.</span>
    email + other channels arrive once I'm sure they won't just collect dust.
  </p>
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
    margin: 0 0 1rem;
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
    max-width: 48ch;
  }
  .methods {
    list-style: none;
    padding: 0;
    margin: 0 0 3rem;
    display: grid;
    gap: 1rem;
  }
  .method {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.25rem;
    padding: 1.5rem 1.5rem 1.4rem;
    background: color-mix(in oklch, var(--color-midnight) 55%, transparent);
    border-radius: 3px;
    text-decoration: none;
    color: inherit;
    transition:
      transform 300ms ease,
      background 300ms ease;
    position: relative;
  }
  .method:hover {
    transform: translateY(-2px);
    background: color-mix(in oklch, var(--color-midnight-2) 75%, transparent);
  }
  .sigil {
    font-family: var(--font-mono);
    color: var(--color-amber);
    font-size: 1.4rem;
    text-shadow: 0 0 16px rgba(245, 165, 91, 0.5);
  }
  .top-line {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 0.35rem;
  }
  .label {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-bone-dim);
  }
  .handle {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.2rem;
    color: var(--color-bone);
    letter-spacing: -0.005em;
  }
  .note {
    margin: 0;
    color: var(--color-bone-dim);
    font-size: 0.95rem;
    line-height: 1.55;
  }
  .arrow {
    font-family: var(--font-mono);
    color: var(--color-amber);
    font-size: 1.25rem;
    opacity: 0.6;
    transition:
      opacity 220ms ease,
      transform 220ms ease;
  }
  .method:hover .arrow {
    opacity: 1;
    transform: translateX(4px);
  }
  .soon {
    font-family: var(--font-display);
    font-style: italic;
    color: var(--color-bone-dim);
    font-size: 1.05rem;
    line-height: 1.6;
    max-width: 44ch;
    margin: 0;
  }
  .hand {
    font-family: var(--font-hand);
    font-style: normal;
    color: var(--color-amber);
    font-size: 1.4rem;
    margin-right: 0.45rem;
    letter-spacing: 0;
  }

  @media (max-width: 560px) {
    .method {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      gap: 0.75rem 1rem;
    }
    .arrow {
      grid-column: 2;
      justify-self: start;
    }
  }
</style>
