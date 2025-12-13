<section class="px-6 py-12 bg-[#faf9f7]">
  <div class="max-w-[1400px] mx-auto relative rounded-sm overflow-hidden bg-[#1f1b15] min-h-[700px] flex flex-col justify-center items-center text-center px-6 py-16">
    
    <!-- Background Image & Overlay -->
    <img 
      src="/generated/image-team-of-developers-collaborating-around--1765592028320-2.webp" 
      alt="Developers collaborating on network" 
      class="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-[#1f1b15]/95 via-[#2a2418]/90 to-[#332d24]/85"></div>

    <!-- Network Graph Visualization -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 700" fill="none" preserveAspectRatio="xMidYMid meet">
      <!-- Connection lines forming a network -->
      <path d="M300,200 L500,350" stroke="oklch(0.723 0.23 136)" stroke-width="1" stroke-opacity="0.3" />
      <path d="M500,350 L700,250" stroke="oklch(0.723 0.23 136)" stroke-width="1" stroke-opacity="0.3" />
      <path d="M700,250 L900,350" stroke="oklch(0.723 0.23 136)" stroke-width="1" stroke-opacity="0.3" />
      <path d="M900,350 L1100,200" stroke="oklch(0.723 0.23 136)" stroke-width="1" stroke-opacity="0.3" />
      
      <path d="M300,500 L500,350" stroke="oklch(0.792 0.22 138)" stroke-width="1" stroke-opacity="0.3" />
      <path d="M500,350 L700,450" stroke="oklch(0.792 0.22 138)" stroke-width="1" stroke-opacity="0.3" />
      <path d="M700,450 L900,350" stroke="oklch(0.792 0.22 138)" stroke-width="1" stroke-opacity="0.3" />
      <path d="M900,350 L1100,500" stroke="oklch(0.792 0.22 138)" stroke-width="1" stroke-opacity="0.3" />
      
      <path d="M300,200 L300,500" stroke="oklch(0.723 0.23 136)" stroke-width="1" stroke-opacity="0.2" />
      <path d="M700,250 L700,450" stroke="oklch(0.723 0.23 136)" stroke-width="1" stroke-opacity="0.2" />
      <path d="M1100,200 L1100,500" stroke="oklch(0.723 0.23 136)" stroke-width="1" stroke-opacity="0.2" />
      
      <!-- Nodes -->
      <circle cx="300" cy="200" r="5" fill="oklch(0.723 0.23 136)" opacity="0.6" />
      <circle cx="300" cy="500" r="5" fill="oklch(0.792 0.22 138)" opacity="0.6" />
      <circle cx="500" cy="350" r="7" fill="oklch(0.723 0.23 136)" opacity="0.8" />
      <circle cx="700" cy="250" r="5" fill="oklch(0.723 0.23 136)" opacity="0.6" />
      <circle cx="700" cy="450" r="5" fill="oklch(0.792 0.22 138)" opacity="0.6" />
      <circle cx="900" cy="350" r="7" fill="oklch(0.723 0.23 136)" opacity="0.8" />
      <circle cx="1100" cy="200" r="5" fill="oklch(0.723 0.23 136)" opacity="0.6" />
      <circle cx="1100" cy="500" r="5" fill="oklch(0.792 0.22 138)" opacity="0.6" />
      
      <!-- Pulsing center nodes -->
      <circle cx="500" cy="350" r="7" fill="oklch(0.723 0.23 136)" opacity="0.3">
        <animate attributeName="r" values="7;12;7" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="900" cy="350" r="7" fill="oklch(0.723 0.23 136)" opacity="0.3">
        <animate attributeName="r" values="7;12;7" dur="3s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl">
      <div class="absolute top-[-80px] left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-[#f5f3ef]/70 text-[10px] tracking-[0.2em] font-medium uppercase">
        <div class="w-[2px] h-3 bg-[#f5f3ef]/70"></div>
        Composable Network
      </div>

      <h2 class="font-serif text-3xl md:text-5xl text-[#faf9f7] mb-6 leading-tight">
        Join a composable network where contributions earn rewards
      </h2>
      <p class="text-[#ddd7cc] text-lg mb-12 leading-relaxed">
        Build on top of existing data streams and calculations. Publish your own and earn when others use your work. Network effects built into the platform.
      </p>

      <!-- Network Stats -->
      <div class="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
        <div class="text-center">
          <div class="text-3xl font-bold text-[#f5f3ef] mb-1">10K+</div>
          <div class="text-xs text-[#f5f3ef]/60 uppercase tracking-wider">Active workflows</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-[#f5f3ef] mb-1">50+</div>
          <div class="text-xs text-[#f5f3ef]/60 uppercase tracking-wider">Blockchains</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-[#f5f3ef] mb-1">∞</div>
          <div class="text-xs text-[#f5f3ef]/60 uppercase tracking-wider">Composability</div>
        </div>
      </div>
      
      <button class="border border-[#6b5f52] text-[#faf9f7] px-6 py-3 rounded text-sm font-medium hover:bg-[#faf9f7] hover:text-[#1f1b15] transition-colors">
        Explore the network
      </button>
    </div>

    <!-- Network Effect Illustration -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-[#f5f3ef]/50 text-[10px]">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-[oklch(0.723_0.23_136)]"></div>
        <span>Data streams</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-[oklch(0.792_0.22_138)]"></div>
        <span>Calculations</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-[oklch(0.723_0.23_136)]"></div>
        <span>Actions</span>
      </div>
    </div>
  </div>
</section>
