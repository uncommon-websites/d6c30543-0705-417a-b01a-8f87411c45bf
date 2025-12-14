<section class="bg-gradient-to-b from-gray-50 to-white px-6 pt-20 pb-0">
  <div class="max-w-[1400px] mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
      <div class="lg:col-span-7">
        <h1 class="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-gray-900 font-semibold">
          Real-time blockchain intelligence via composable data streams
        </h1>
      </div>
      <div class="lg:col-span-5 flex flex-col justify-center">
        <p class="text-gray-600 text-lg md:text-xl max-w-md leading-relaxed">
          Build DeFi apps with pre-indexed data from 50+ blockchains, serverless calculations, and automated cross-chain actions. Zero infrastructure overhead.
        </p>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-6 mb-12 border-t border-gray-200 pt-8">
      <div class="flex items-center gap-6">
        <button class="bg-gray-900 text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02]">
          Start building
        </button>
        <span class="text-sm text-gray-500 max-w-[140px] leading-snug">
          Free tier available
        </span>
      </div>
      <div class="text-xs text-gray-400 uppercase tracking-[0.15em] font-medium">
        50+ BLOCKCHAINS • SUB-SECOND LATENCY
      </div>
    </div>

    <div class="relative w-full h-[700px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800">
      <!-- Image Overlay -->
      <img 
        src="/generated/image-abstract-visualization-of-interconnected-1765592022043-0.webp" 
        alt="Blockchain network visualization" 
        class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
      />
      <div class="absolute inset-0 bg-gradient-to-tr from-gray-900/95 via-gray-800/80 to-gray-900/90"></div>
      
      <!-- Network Flow Visualization -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 700" fill="none" preserveAspectRatio="xMidYMid meet">
        <!-- Data flow curves from left (blockchains) to center (Rebar) to right (apps) -->
        <path d="M100,200 Q400,180 700,350" stroke="oklch(0.723 0.23 136)" stroke-width="1.5" stroke-opacity="0.5" vector-effect="non-scaling-stroke" />
        <path d="M100,300 Q400,320 700,350" stroke="oklch(0.723 0.23 136)" stroke-width="1.5" stroke-opacity="0.5" vector-effect="non-scaling-stroke" />
        <path d="M100,400 Q400,380 700,350" stroke="oklch(0.723 0.23 136)" stroke-width="1.5" stroke-opacity="0.5" vector-effect="non-scaling-stroke" />
        <path d="M100,500 Q400,480 700,350" stroke="oklch(0.723 0.23 136)" stroke-width="1.5" stroke-opacity="0.4" vector-effect="non-scaling-stroke" />
        
        <path d="M700,350 Q1000,320 1300,200" stroke="oklch(0.792 0.22 138)" stroke-width="1.5" stroke-opacity="0.5" vector-effect="non-scaling-stroke" />
        <path d="M700,350 Q1000,350 1300,300" stroke="oklch(0.792 0.22 138)" stroke-width="1.5" stroke-opacity="0.5" vector-effect="non-scaling-stroke" />
        <path d="M700,350 Q1000,380 1300,400" stroke="oklch(0.792 0.22 138)" stroke-width="1.5" stroke-opacity="0.5" vector-effect="non-scaling-stroke" />
        <path d="M700,350 Q1000,420 1300,500" stroke="oklch(0.792 0.22 138)" stroke-width="1.5" stroke-opacity="0.4" vector-effect="non-scaling-stroke" />
        
        <!-- Animated data pulses flowing through the network -->
        <circle r="4" fill="oklch(0.72 0.20 250)" opacity="0.9">
          <animateMotion dur="4s" repeatCount="indefinite" path="M100,200 Q400,180 700,350" />
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="oklch(0.72 0.20 250)" opacity="0.9">
          <animateMotion dur="4s" begin="1s" repeatCount="indefinite" path="M100,300 Q400,320 700,350" />
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="4s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="oklch(0.72 0.20 250)" opacity="0.9">
          <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M100,400 Q400,380 700,350" />
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="4s" begin="2s" repeatCount="indefinite" />
        </circle>
        
        <circle r="4" fill="oklch(0.72 0.20 290)" opacity="0.9">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M700,350 Q1000,320 1300,200" />
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="oklch(0.72 0.20 290)" opacity="0.9">
          <animateMotion dur="3.5s" begin="1s" repeatCount="indefinite" path="M700,350 Q1000,350 1300,300" />
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3.5s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="oklch(0.72 0.20 290)" opacity="0.9">
          <animateMotion dur="3.5s" begin="2s" repeatCount="indefinite" path="M700,350 Q1000,380 1300,400" />
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3.5s" begin="2s" repeatCount="indefinite" />
        </circle>
        
        <!-- Node circles with pulsing animation -->
        <circle cx="100" cy="200" r="4" fill="oklch(0.723 0.23 136)" opacity="0.6">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="300" r="4" fill="oklch(0.723 0.23 136)" opacity="0.6">
          <animate attributeName="r" values="4;6;4" dur="2s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="400" r="4" fill="oklch(0.723 0.23 136)" opacity="0.6">
          <animate attributeName="r" values="4;6;4" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="500" r="4" fill="oklch(0.723 0.23 136)" opacity="0.5">
          <animate attributeName="r" values="4;6;4" dur="2s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>
        
        <!-- Center node with larger pulse -->
        <circle cx="700" cy="350" r="8" fill="oklch(0.723 0.23 136)" opacity="0.8">
          <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="350" r="8" fill="oklch(0.723 0.23 136)" opacity="0.3">
          <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="1300" cy="200" r="5" fill="oklch(0.72 0.20 290)" opacity="0.7">
          <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="1300" cy="300" r="5" fill="oklch(0.72 0.20 290)" opacity="0.7">
          <animate attributeName="r" values="5;7;5" dur="2s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="1300" cy="400" r="5" fill="oklch(0.72 0.20 290)" opacity="0.7">
          <animate attributeName="r" values="5;7;5" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="1300" cy="500" r="5" fill="oklch(0.72 0.20 290)" opacity="0.6">
          <animate attributeName="r" values="5;7;5" dur="2s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>

      <!-- Labels for the flow -->
      <div class="absolute top-[25%] left-[5%] text-white/80 text-xs">
        <div class="flex items-center gap-2 mb-3">
          <div class="w-[2px] h-4 bg-primary-400"></div>
          <span class="tracking-[0.15em] uppercase font-semibold">Blockchains</span>
        </div>
        <div class="text-[11px] text-white/60 space-y-1.5 ml-4 font-medium">
          <div>Ethereum</div>
          <div>Solana</div>
          <div>Cosmos</div>
          <div class="opacity-70">+47 more</div>
        </div>
      </div>

      <!-- Center - Rebar -->
      <div class="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div class="flex flex-col items-center gap-3 text-white text-xs tracking-[0.2em] font-semibold uppercase">
          <div class="w-[2px] h-4 bg-primary-300"></div>
          <div>Rebar Network</div>
          <div class="text-[10px] text-white/70 tracking-normal normal-case font-medium">Real-time intelligence layer</div>
        </div>
      </div>

      <!-- Right side - Applications -->
      <div class="absolute top-[25%] right-[5%] text-right text-white/80 text-xs">
        <div class="flex items-center justify-end gap-2 mb-3">
          <span class="tracking-[0.15em] uppercase font-semibold">Your Apps</span>
          <div class="w-[2px] h-4 bg-secondary-400"></div>
        </div>
        <div class="text-[11px] text-white/60 space-y-1.5 mr-4 font-medium">
          <div>DeFi Protocols</div>
          <div>Trading Bots</div>
          <div>Analytics</div>
          <div class="opacity-70">Monitoring</div>
        </div>
      </div>
    </div>
  </div>
</section>
