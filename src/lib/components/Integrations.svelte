<script lang="ts">
  import SectionLabel from './SectionLabel.svelte';
  
  type Integration = {
    name: string;
    category: string;
  };
  
  const chains: Integration[] = [
    { name: 'Ethereum', category: 'Layer 1' },
    { name: 'Solana', category: 'Layer 1' },
    { name: 'Cosmos', category: 'Layer 1' },
    { name: 'Avalanche', category: 'Layer 1' },
    { name: 'Polygon', category: 'Layer 2' },
    { name: 'Arbitrum', category: 'Layer 2' },
    { name: 'Optimism', category: 'Layer 2' },
    { name: 'Base', category: 'Layer 2' }
  ];
  
  const tools: Integration[] = [
    { name: 'Discord', category: 'Notifications' },
    { name: 'Telegram', category: 'Notifications' },
    { name: 'Email', category: 'Notifications' },
    { name: 'X (Twitter)', category: 'Social' },
    { name: 'GitHub Actions', category: 'DevOps' },
    { name: 'Webhooks', category: 'Integration' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'RPC Access', category: 'Infrastructure' }
  ];
  
  let activeTab = $state<'chains' | 'tools'>('chains');
</script>

<section class="bg-[#faf9f7] px-6 py-24 border-t border-gray-200">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-3">
      <SectionLabel label="Integrations" />
    </div>
    
    <div class="lg:col-span-9">
      <div class="mb-12">
        <h2 class="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
          Connect to everything you need
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl">
          Pre-built integrations with major blockchains, communication channels, and developer tools. Start building immediately.
        </p>
      </div>
      
      <!-- Tab Navigation -->
      <div class="flex gap-2 mb-8 border-b border-gray-200">
        <button
          onclick={() => activeTab = 'chains'}
          class={[
            'px-6 py-3 text-sm font-medium transition-all relative',
            activeTab === 'chains'
              ? 'text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          ]}
        >
          Blockchains
          {#if activeTab === 'chains'}
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
          {/if}
        </button>
        <button
          onclick={() => activeTab = 'tools'}
          class={[
            'px-6 py-3 text-sm font-medium transition-all relative',
            activeTab === 'tools'
              ? 'text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          ]}
        >
          Tools & Services
          {#if activeTab === 'tools'}
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
          {/if}
        </button>
      </div>
      
      <!-- Content -->
      {#if activeTab === 'chains'}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {#each chains as chain}
            <div class="group p-6 bg-white rounded border border-gray-200 hover:border-[oklch(0.723_0.23_136)] hover:shadow-sm transition-all">
              <div class="w-12 h-12 rounded-full bg-[oklch(0.723_0.23_136)]/10 flex items-center justify-center mb-4 group-hover:bg-[oklch(0.723_0.23_136)]/20 transition-colors">
                <div class="w-6 h-6 rounded-full bg-[oklch(0.723_0.23_136)]"></div>
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1">{chain.name}</h3>
              <p class="text-xs text-gray-500">{chain.category}</p>
            </div>
          {/each}
          
          <!-- More chains indicator -->
          <div class="p-6 bg-gray-50 rounded border border-gray-200 border-dashed flex flex-col items-center justify-center text-center">
            <div class="text-2xl font-bold text-gray-400 mb-1">+42</div>
            <p class="text-xs text-gray-500">More chains supported</p>
          </div>
        </div>
        
        <!-- Chain stats -->
        <div class="mt-8 p-6 bg-white rounded border border-gray-200">
          <div class="grid grid-cols-3 gap-8">
            <div>
              <div class="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div class="text-sm text-gray-600">Total blockchains</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-gray-900 mb-1">&lt;100ms</div>
              <div class="text-sm text-gray-600">Average latency</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-gray-900 mb-1">99.99%</div>
              <div class="text-sm text-gray-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      {:else}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {#each tools as tool}
            <div class="group p-6 bg-white rounded border border-gray-200 hover:border-[oklch(0.723_0.23_136)] hover:shadow-sm transition-all">
              <div class="w-12 h-12 rounded-full bg-[oklch(0.792_0.22_138)]/10 flex items-center justify-center mb-4 group-hover:bg-[oklch(0.792_0.22_138)]/20 transition-colors">
                <svg class="w-6 h-6 text-[oklch(0.792_0.22_138)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1">{tool.name}</h3>
              <p class="text-xs text-gray-500">{tool.category}</p>
            </div>
          {/each}
        </div>
        
        <!-- Integration features -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded border border-gray-200">
            <h4 class="text-sm font-medium text-gray-900 mb-2">Instant notifications</h4>
            <p class="text-xs text-gray-600">Send alerts via Discord, Telegram, Email, or X when conditions are met</p>
          </div>
          <div class="p-6 bg-white rounded border border-gray-200">
            <h4 class="text-sm font-medium text-gray-900 mb-2">Custom webhooks</h4>
            <p class="text-xs text-gray-600">Trigger external APIs and services with real-time blockchain data</p>
          </div>
          <div class="p-6 bg-white rounded border border-gray-200">
            <h4 class="text-sm font-medium text-gray-900 mb-2">Data persistence</h4>
            <p class="text-xs text-gray-600">Store results in PostgreSQL or your preferred database</p>
          </div>
        </div>
      {/if}
      
      <!-- CTA -->
      <div class="mt-12 p-8 bg-[#2a2418] rounded border border-[#4d4439] text-center">
        <h3 class="text-2xl font-medium text-[#f5f3ef] mb-3">
          Need a custom integration?
        </h3>
        <p class="text-[#ddd7cc] mb-6 max-w-xl mx-auto">
          We're constantly adding new integrations. Let us know what you need and we'll prioritize it.
        </p>
        <button class="border border-[#6b5f52] text-[#faf9f7] px-6 py-3 rounded text-sm font-medium hover:bg-[#faf9f7] hover:text-[#1f1b15] transition-colors">
          Request integration
        </button>
      </div>
    </div>
  </div>
</section>
