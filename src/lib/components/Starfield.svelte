<script lang="ts">
  import { onMount } from 'svelte';

  let { fixed = false, density = 90 }: { fixed?: boolean; density?: number } = $props();

  type Star = {
    key: number;
    size: number;
    left: number;
    delay: number;
    duration: number;
    opacity: number;
    color: string;
  };

  let stars = $state<Star[]>([]);

  onMount(() => {
    const colors = [
      'var(--color-bone)',
      'var(--color-bone)',
      'var(--color-bone)',
      'var(--color-bone)',
      'var(--color-amber)',
      'var(--color-magenta-glow)',
      'var(--color-indigo-glow)'
    ];
    const arr: Star[] = [];
    for (let i = 0; i < density; i++) {
      arr.push({
        key: i,
        size: Math.random() * 2 + 0.6,
        left: Math.random() * 100,
        delay: Math.random() * -55,
        duration: 35 + Math.random() * 50,
        opacity: 0.25 + Math.random() * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    stars = arr;
  });
</script>

<div class="starfield" class:fixed aria-hidden="true">
  {#each stars as s (s.key)}
    <span
      class="star"
      style="
        left: {s.left}%;
        width: {s.size}px;
        height: {s.size}px;
        color: {s.color};
        background: {s.color};
        animation-delay: {s.delay}s;
        animation-duration: {s.duration}s;
        --peak: {s.opacity};
      "
    ></span>
  {/each}
</div>

<style>
  .starfield {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }
  .starfield.fixed {
    position: fixed;
  }
  .star {
    position: absolute;
    bottom: -6vh;
    border-radius: 999px;
    animation-name: drift;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    filter: blur(0.35px);
    box-shadow: 0 0 5px currentColor;
    opacity: 0;
  }
  @keyframes drift {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    8% {
      opacity: var(--peak);
    }
    92% {
      opacity: var(--peak);
    }
    100% {
      transform: translateY(-130vh);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .star {
      animation: none;
      opacity: var(--peak);
      bottom: auto;
      top: calc(var(--peak) * 100vh);
    }
  }
</style>
