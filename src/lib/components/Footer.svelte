<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="col">
    <span class="eyebrow">made by hand</span>
    <span class="quote">— from a dim room somewhere</span>
  </div>
  <div class="col right">
    <a class="eyebrow link" href="https://github.com/OriUrano/Website" target="_blank" rel="noopener me">
      view source
    </a>
    <span class="year">© {year} · ori urano</span>
  </div>
</footer>

<style>
  .footer {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5rem clamp(1rem, 4vw, 2.5rem) 2.5rem;
    border-top: 1px solid color-mix(in oklch, var(--color-bone) 8%, transparent);
    margin-top: 5rem;
  }
  .col {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .col.right {
    text-align: right;
  }
  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-bone-dimmer);
  }
  .link {
    text-decoration: none;
    color: var(--color-bone-dim);
    transition: color 200ms ease;
  }
  .link:hover {
    color: var(--color-amber);
  }
  .quote {
    font-family: var(--font-hand);
    font-size: 1.3rem;
    color: var(--color-amber);
    letter-spacing: 0;
    line-height: 1;
  }
  .year {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    color: var(--color-bone-dimmer);
    text-transform: uppercase;
  }
</style>
