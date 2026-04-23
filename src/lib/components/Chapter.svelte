<script lang="ts">
  let {
    numeral,
    title,
    children
  }: { numeral: string; title: string; children?: import('svelte').Snippet } = $props();
</script>

<div class="chapter-mark">
  <span class="num">{numeral}.</span>
  <span class="title">{title}</span>
</div>
{#if children}
  {@render children()}
{/if}

<style>
  .chapter-mark {
    display: inline-flex;
    align-items: baseline;
    gap: 0.55rem;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-bone-dim);
    margin-bottom: 1.5rem;
  }
  .num {
    color: var(--color-amber);
  }
</style>
