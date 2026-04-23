<script lang="ts">
  import { page } from '$app/state';

  const links = [
    { href: '/projects/', label: 'works', numeral: 'II' },
    { href: '/blog/', label: 'writ', numeral: 'III' },
    { href: '/about/', label: 'about', numeral: 'IV' },
    { href: '/contact/', label: 'send', numeral: 'V' }
  ];

  function isActive(href: string): boolean {
    const path = page.url.pathname;
    return path.startsWith(href);
  }
</script>

<nav class="nav">
  <a class="monogram" href="/" aria-label="home">
    <span class="sigil ember" aria-hidden="true">◬</span>
    <span class="name">ori</span>
  </a>
  <ul class="links">
    {#each links as link (link.href)}
      <li>
        <a
          href={link.href}
          class="link"
          class:active={isActive(link.href)}
          data-numeral={link.numeral}
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 30;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 1.1rem clamp(1rem, 4vw, 2.5rem);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: linear-gradient(
      to bottom,
      rgba(10, 6, 18, 0.85),
      rgba(10, 6, 18, 0.35)
    );
    border-bottom: 1px solid color-mix(in oklch, var(--color-bone) 6%, transparent);
  }
  .monogram {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    text-decoration: none;
    color: var(--color-bone);
  }
  .sigil {
    font-family: var(--font-mono);
    color: var(--color-amber);
    font-size: 1.05rem;
    display: inline-block;
  }
  .name {
    font-family: var(--font-display);
    font-weight: 400;
    font-style: italic;
    font-size: 1.2rem;
    letter-spacing: 0.01em;
  }
  .links {
    display: flex;
    gap: clamp(1rem, 3vw, 2.4rem);
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .link {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--color-bone-dim);
    text-decoration: none;
    position: relative;
    padding: 0.25rem 0;
    transition: color 220ms ease;
  }
  .link::before {
    content: attr(data-numeral) '.';
    position: absolute;
    left: -1.3em;
    top: 0;
    color: var(--color-amber);
    font-size: 0.62rem;
    opacity: 0;
    transform: translateX(4px);
    transition:
      opacity 250ms ease,
      transform 250ms ease;
  }
  .link:hover,
  .link.active {
    color: var(--color-bone);
  }
  .link:hover::before,
  .link.active::before {
    opacity: 1;
    transform: translateX(0);
  }
  .link.active {
    color: var(--color-amber);
  }
  @media (max-width: 620px) {
    .link::before {
      display: none;
    }
    .links {
      gap: 1rem;
    }
    .link {
      font-size: 0.66rem;
      letter-spacing: 0.18em;
    }
  }
</style>
