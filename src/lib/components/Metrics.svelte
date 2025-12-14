<script lang="ts">
  import { onMount } from 'svelte';
  
  let visible = $state(false);
  let container: HTMLElement;
  
  // Animated counter state
  let workflows = $state(0);
  let chains = $state(0);
  let latency = $state(0);
  let uptime = $state(0);
  
  function animateValue(start: number, end: number, duration: number, callback: (value: number) => void) {
    const startTime = performance.now();
    
    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      
      callback(current);
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    
    requestAnimationFrame(update);
  }
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visible) {
            visible = true;
            
            // Start animations with staggered timing
            setTimeout(() => animateValue(0, 10000, 2000, (v) => workflows = v), 100);
            setTimeout(() => animateValue(0, 50, 1500, (v) => chains = v), 200);
            setTimeout(() => animateValue(0, 100, 1800, (v) => latency = v), 300);
            setTimeout(() => animateValue(0, 99.99, 2200, (v) => uptime = v), 400);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (container) {
      observer.observe(container);
    }
    
    return () => observer.disconnect();
  });
</script>

<section bind:this={container} class="bg-[#2a2418] px-6 py-24 relative overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 opacity-5">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
  
  <div class="max-w-[1400px] mx-auto relative z-10">
    <div class="text-center mb-16">
      <div class="text-xs text-[#f5f3ef]/60 mb-4 uppercase tracking-wider">Platform metrics</div>
      <h2 class="font-serif text-4xl md:text-5xl text-[#f5f3ef] mb-4">
        Built for production scale
      </h2>
      <p class="text-[#ddd7cc] text-lg max-w-2xl mx-auto">
        Powering real-time blockchain intelligence for developers worldwide
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Metric 1: Workflows -->
      <div class={[
        'relative p-8 rounded border border-[#4d4439] bg-[#1f1b15]/50 backdrop-blur-sm transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      ]}>
        <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[oklch(0.723_0.23_136)] to-transparent opacity-60"></div>
        <div class="text-5xl md:text-6xl font-bold text-[#f5f3ef] mb-2 font-mono">
          {workflows.toLocaleString()}+
        </div>
        <div class="text-sm text-[#f5f3ef]/70 mb-1">Active workflows</div>
        <div class="text-xs text-[#f5f3ef]/50">Running 24/7 across the network</div>
      </div>
      
      <!-- Metric 2: Blockchains -->
      <div class={[
        'relative p-8 rounded border border-[#4d4439] bg-[#1f1b15]/50 backdrop-blur-sm transition-all duration-700 delay-100',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      ]}>
        <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[oklch(0.792_0.22_138)] to-transparent opacity-60"></div>
        <div class="text-5xl md:text-6xl font-bold text-[#f5f3ef] mb-2 font-mono">
          {chains}+
        </div>
        <div class="text-sm text-[#f5f3ef]/70 mb-1">Blockchains supported</div>
        <div class="text-xs text-[#f5f3ef]/50">Ethereum, Solana, Cosmos & more</div>
      </div>
      
      <!-- Metric 3: Latency -->
      <div class={[
        'relative p-8 rounded border border-[#4d4439] bg-[#1f1b15]/50 backdrop-blur-sm transition-all duration-700 delay-200',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      ]}>
        <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[oklch(0.723_0.23_136)] to-transparent opacity-60"></div>
        <div class="text-5xl md:text-6xl font-bold text-[#f5f3ef] mb-2 font-mono">
          &lt;{latency}ms
        </div>
        <div class="text-sm text-[#f5f3ef]/70 mb-1">Average latency</div>
        <div class="text-xs text-[#f5f3ef]/50">Sub-second data delivery</div>
      </div>
      
      <!-- Metric 4: Uptime -->
      <div class={[
        'relative p-8 rounded border border-[#4d4439] bg-[#1f1b15]/50 backdrop-blur-sm transition-all duration-700 delay-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      ]}>
        <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[oklch(0.792_0.22_138)] to-transparent opacity-60"></div>
        <div class="text-5xl md:text-6xl font-bold text-[#f5f3ef] mb-2 font-mono">
          {uptime.toFixed(2)}%
        </div>
        <div class="text-sm text-[#f5f3ef]/70 mb-1">Platform uptime</div>
        <div class="text-xs text-[#f5f3ef]/50">Enterprise-grade reliability</div>
      </div>
    </div>
    
    <!-- Pulsing indicator -->
    <div class="flex items-center justify-center gap-2 mt-12">
      <div class="relative">
        <div class="w-2 h-2 rounded-full bg-[oklch(0.723_0.23_136)]"></div>
        <div class="absolute inset-0 w-2 h-2 rounded-full bg-[oklch(0.723_0.23_136)] animate-ping"></div>
      </div>
      <span class="text-xs text-[#f5f3ef]/60 uppercase tracking-wider">Live metrics</span>
    </div>
  </div>
</section>
