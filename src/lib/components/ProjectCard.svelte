<script lang="ts">
  import type { Project } from '$lib/data/projects';
  let { project }: { project: Project } = $props();
</script>

<a href="/projects/{project.slug}/" class="card painterly">
  <div class="card-inner">
    <div class="top">
      <span class="year">{project.year}</span>
      <span class="arrow" aria-hidden="true">→</span>
    </div>
    <h3 class="title">{project.title}</h3>
    <p class="summary">{project.summary}</p>
    <ul class="tags">
      {#each project.tags as tag (tag)}
        <li>{tag}</li>
      {/each}
    </ul>
  </div>
</a>

<style>
  .card {
    display: block;
    position: relative;
    padding: 1.5rem 1.6rem 1.4rem;
    background: color-mix(in oklch, var(--color-midnight) 65%, transparent);
    border-radius: 3px;
    text-decoration: none;
    color: inherit;
    overflow: hidden;
    transition:
      transform 400ms cubic-bezier(0.2, 0.7, 0.2, 1),
      background 300ms ease;
  }
  .card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 100% 80% at 100% 0%,
      rgba(245, 165, 91, 0),
      transparent 40%
    );
    transition: background 400ms ease;
    pointer-events: none;
  }
  .card:hover {
    transform: translateY(-3px);
    background: color-mix(in oklch, var(--color-midnight-2) 75%, transparent);
  }
  .card:hover::after {
    background: radial-gradient(
      ellipse 100% 80% at 100% 0%,
      rgba(245, 165, 91, 0.2),
      transparent 55%
    );
  }
  .card-inner {
    position: relative;
    z-index: 1;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.85rem;
  }
  .year {
    font-family: var(--font-mono);
    font-size: 0.66rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--color-bone-dimmer);
  }
  .arrow {
    font-family: var(--font-mono);
    color: var(--color-amber);
    opacity: 0.6;
    transform: translateX(0);
    transition:
      transform 300ms ease,
      opacity 300ms ease;
  }
  .card:hover .arrow {
    transform: translateX(4px);
    opacity: 1;
  }
  .title {
    font-family: var(--font-display);
    font-size: 1.55rem;
    font-weight: 400;
    font-style: italic;
    margin: 0 0 0.45rem;
    line-height: 1.15;
    letter-spacing: -0.01em;
  }
  .summary {
    font-size: 0.94rem;
    line-height: 1.55;
    color: var(--color-bone-dim);
    margin: 0 0 1rem;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 0.8rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .tags li {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-bone-dimmer);
  }
  .tags li::before {
    content: '·';
    margin-right: 0.4rem;
    color: var(--color-bone-dimmer);
  }
  .tags li:first-child::before {
    display: none;
  }
</style>
