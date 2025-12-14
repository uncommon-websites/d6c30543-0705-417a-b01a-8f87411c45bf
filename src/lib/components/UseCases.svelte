<script lang="ts">
  import SectionLabel from './SectionLabel.svelte';
  
  type UseCase = {
    title: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
    tags: string[];
  };
  
  const useCases: UseCase[] = [
    {
      title: 'DeFi liquidation monitor',
      description: 'Tracks 10k+ positions across 3 protocols with <100ms alerts, 24/7 monitoring',
      metrics: [
        { label: 'Positions tracked', value: '10,000+' },
        { label: 'Alert latency', value: '<100ms' },
        { label: 'Protocols', value: '3' }
      ],
      tags: ['Real-time', 'DeFi', 'Monitoring']
    },
    {
      title: 'Cross-chain MEV bot',
      description: '5.2% average daily return, operates across 12 chains and 50+ DEXs with sub-block execution',
      metrics: [
        { label: 'Daily return', value: '5.2%' },
        { label: 'Chains', value: '12' },
        { label: 'DEXs', value: '50+' }
      ],
      tags: ['MEV', 'Cross-chain', 'Trading']
    },
    {
      title: 'Whale movement tracker',
      description: 'Monitors 500k+ wallets, sent 2M alerts with <5s detection time and 99.8% accuracy',
      metrics: [
        { label: 'Wallets', value: '500K+' },
        { label: 'Alerts sent', value: '2M' },
        { label: 'Accuracy', value: '99.8%' }
      ],
      tags: ['Analytics', 'Monitoring', 'Alerts']
    },
    {
      title: 'Portfolio rebalancer',
      description: 'Manages $2.3M in assets with real-time pricing, auto-rebalancing, and tax optimization',
      metrics: [
        { label: 'Assets managed', value: '$2.3M' },
        { label: 'Rebalancing', value: 'Auto' },
        { label: 'Tax optimization', value: 'Yes' }
      ],
      tags: ['DeFi', 'Portfolio', 'Automation']
    },
    {
      title: 'Oracle price feed network',
      description: 'Secures $500M TVL across 20 protocols with 99.99% uptime and <50ms latency',
      metrics: [
        { label: 'TVL secured', value: '$500M' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Latency', value: '<50ms' }
      ],
      tags: ['Oracle', 'Infrastructure', 'Real-time']
    },
    {
      title: 'Governance analytics',
      description: 'Tracks 50+ DAOs with live voting, treasury alerts, and participation rates',
      metrics: [
        { label: 'DAOs tracked', value: '50+' },
        { label: 'Live voting', value: 'Yes' },
        { label: 'Treasury alerts', value: 'Real-time' }
      ],
      tags: ['Governance', 'Analytics', 'DAO']
    }
  ];
  
  let expandedIndex = $state<number | null>(null);
  
  function toggleCard(index: number) {
    expandedIndex = expandedIndex === index ? null : index;
  }
</script>

<section class="bg-[#faf9f7] px-6 py-24">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-3">
      <SectionLabel label="Use Cases" />
    </div>
    
    <div class="lg:col-span-9">
      <div class="mb-12">
        <h2 class="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
          Production applications built by our community
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl">
          Real developers building real applications with measurable results. From DeFi monitoring to cross-chain automation.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each useCases as useCase, index}
          <button
            onclick={() => toggleCard(index)}
            class={[
              'group relative p-6 rounded border text-left transition-all duration-300',
              expandedIndex === index
                ? 'bg-[#2a2418] border-[#4d4439] md:col-span-2'
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
            ]}
          >
            <!-- Card header -->
            <div class="flex items-start justify-between gap-4 mb-3">
              <h3 class={[
                'text-xl font-medium transition-colors',
                expandedIndex === index ? 'text-[#f5f3ef]' : 'text-gray-900'
              ]}>
                {useCase.title}
              </h3>
              <div class={[
                'w-6 h-6 rounded-full flex items-center justify-center transition-all flex-shrink-0',
                expandedIndex === index
                  ? 'bg-[oklch(0.723_0.23_136)] rotate-45'
                  : 'bg-gray-100 group-hover:bg-gray-200'
              ]}>
                <svg class={[
                  'w-4 h-4 transition-colors',
                  expandedIndex === index ? 'text-[#1f1b15]' : 'text-gray-600'
                ]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
            </div>
            
            <!-- Description -->
            <p class={[
              'text-sm leading-relaxed mb-4',
              expandedIndex === index ? 'text-[#ddd7cc]' : 'text-gray-600'
            ]}>
              {useCase.description}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              {#each useCase.tags as tag}
                <span class={[
                  'text-xs px-2 py-1 rounded',
                  expandedIndex === index
                    ? 'bg-[#1f1b15] text-[#f5f3ef]/70'
                    : 'bg-gray-100 text-gray-600'
                ]}>
                  {tag}
                </span>
              {/each}
            </div>
            
            <!-- Expanded metrics -->
            {#if expandedIndex === index}
              <div class="grid grid-cols-3 gap-4 pt-4 border-t border-[#4d4439] animate-in fade-in duration-300">
                {#each useCase.metrics as metric}
                  <div>
                    <div class="text-2xl font-bold text-[#f5f3ef] mb-1 font-mono">
                      {metric.value}
                    </div>
                    <div class="text-xs text-[#f5f3ef]/60">
                      {metric.label}
                    </div>
                  </div>
                {/each}
              </div>
            {/if}
          </button>
        {/each}
      </div>
      
      <!-- CTA -->
      <div class="mt-12 p-8 bg-white rounded border border-gray-200 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-medium text-gray-900 mb-2">
            Build your own production application
          </h3>
          <p class="text-gray-600 text-sm">
            Join developers building the next generation of blockchain applications
          </p>
        </div>
        <button class="bg-gray-900 text-white px-6 py-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
          Get started
        </button>
      </div>
    </div>
  </div>
</section>
