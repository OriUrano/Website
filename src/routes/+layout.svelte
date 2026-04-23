<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Starfield from '$lib/components/Starfield.svelte';

  let { children } = $props();
</script>

<svg width="0" height="0" style="position: absolute" aria-hidden="true">
  <defs>
    <filter id="roughen">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="7" />
      <feDisplacementMap in="SourceGraphic" scale="2.5" />
    </filter>
    <filter id="paint-mask" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="4" />
      <feDisplacementMap in="SourceGraphic" scale="8" />
    </filter>
  </defs>
</svg>

<Starfield fixed density={110} />

<Nav />
<main class="main-wrap">
  {@render children()}
</main>
<Footer />

<style>
  .main-wrap {
    position: relative;
    z-index: 1;
    min-height: calc(100vh - 8rem);
  }
</style>
