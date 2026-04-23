<script lang="ts">
  let {
    size = 320,
    src = '/avatar.png',
    alt = "Ori's avatar"
  }: { size?: number; src?: string; alt?: string } = $props();
</script>

<div class="avatar-frame" style="--size: {size}px">
  <div class="glow" aria-hidden="true"></div>
  <div class="halo" aria-hidden="true"></div>
  <svg
    class="avatar-svg"
    viewBox="0 0 100 100"
    role="img"
    aria-label={alt}
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <filter id="avatar-paint" x="-8%" y="-8%" width="116%" height="116%">
        <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="9" />
        <feDisplacementMap in="SourceGraphic" scale="6" />
      </filter>
      <clipPath id="avatar-clip">
        <circle cx="50" cy="50" r="46" filter="url(#avatar-paint)" />
      </clipPath>
    </defs>
    <image
      href={src}
      x="-2"
      y="-2"
      width="104"
      height="104"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#avatar-clip)"
    />
    <circle
      cx="50"
      cy="50"
      r="46.4"
      fill="none"
      stroke="var(--color-amber)"
      stroke-width="0.4"
      opacity="0.65"
      filter="url(#avatar-paint)"
    />
    <circle
      cx="50"
      cy="50"
      r="48"
      fill="none"
      stroke="var(--color-magenta)"
      stroke-width="0.18"
      opacity="0.5"
      filter="url(#avatar-paint)"
    />
  </svg>
  <div class="sparkle s1" aria-hidden="true">✦</div>
  <div class="sparkle s2" aria-hidden="true">✦</div>
  <div class="sparkle s3" aria-hidden="true">✧</div>
</div>

<style>
  .avatar-frame {
    position: relative;
    width: var(--size);
    height: var(--size);
    max-width: 100%;
  }
  .avatar-svg {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }
  .glow {
    position: absolute;
    inset: -14%;
    z-index: 1;
    background: radial-gradient(
      circle,
      rgba(245, 165, 91, 0.28),
      rgba(209, 78, 141, 0.12) 45%,
      transparent 70%
    );
    filter: blur(24px);
  }
  .halo {
    position: absolute;
    inset: -4%;
    z-index: 1;
    border-radius: 50%;
    border: 1px dashed color-mix(in oklch, var(--color-amber) 55%, transparent);
    filter: url(#roughen);
    opacity: 0.35;
    animation: rotate 60s linear infinite;
  }
  .sparkle {
    position: absolute;
    z-index: 3;
    color: var(--color-amber);
    font-family: var(--font-mono);
    text-shadow: 0 0 10px currentColor;
    animation: twinkle 4s ease-in-out infinite;
    font-size: 0.9rem;
  }
  .s1 {
    top: 4%;
    right: 6%;
    animation-delay: 0s;
  }
  .s2 {
    bottom: 10%;
    right: -2%;
    color: var(--color-magenta-glow);
    font-size: 0.7rem;
    animation-delay: 1.4s;
  }
  .s3 {
    top: 42%;
    left: -4%;
    color: var(--color-bone);
    font-size: 0.6rem;
    animation-delay: 2.6s;
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.25;
      transform: scale(0.85);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .halo,
    .sparkle {
      animation: none;
    }
  }
</style>
