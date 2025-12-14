<script lang="ts">
  import { onMount } from 'svelte';
  
  type DataPoint = {
    chain: string;
    price: number;
    change: number;
    volume: string;
  };
  
  let dataPoints = $state<DataPoint[]>([
    { chain: 'ETH', price: 2847.32, change: 2.4, volume: '$12.4B' },
    { chain: 'SOL', price: 142.18, change: -1.2, volume: '$3.2B' },
    { chain: 'ATOM', price: 9.84, change: 5.7, volume: '$842M' },
    { chain: 'AVAX', price: 34.21, change: 1.8, volume: '$1.1B' }
  ]);
  
  let lastUpdate = $state(new Date());
  let isLive = $state(true);
  
  function updateData() {
    if (!isLive) return;
    
    dataPoints = dataPoints.map(point => ({
      ...point,
      price: point.price + (Math.random() - 0.5) * 2,
      change: point.change + (Math.random() - 0.5) * 0.5
    }));
    
    lastUpdate = new Date();
  }
  
  onMount(() => {
    const interval = setInterval(updateData, 2000);
    return () => clearInterval(interval);
  });
  
  // Code example
  const codeExample = `# Real-time ETH price stream
eth_price = rebar.stream("ethereum.price")

# Calculate when to alert
should_alert = eth_price > 3000

# Send Discord notification
if should_alert:
  rebar.action.discord(
    message=f"ETH crossed $3000: {eth_price}"
  )`;
</script>

<section class="bg-[#f5f5f5] px-6 py-24 border-t border-gray-200">
  <div class="max-w-[1400px] mx-auto">
    <div class="text-center mb-12">
      <div class="text-xs text-gray-400 mb-4 uppercase tracking-wider">Live demonstration</div>
      <h2 class="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
        Real-time data streams in action
      </h2>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Watch live blockchain data update in real-time. No polling, no webhooks, no batch jobs.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Live Data Panel -->
      <div class="bg-[#2a2418] rounded border border-[#4d4439] p-8">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="relative">
              <div class="w-2 h-2 rounded-full bg-[oklch(0.723_0.23_136)]"></div>
              <div class="absolute inset-0 w-2 h-2 rounded-full bg-[oklch(0.723_0.23_136)] animate-ping"></div>
            </div>
            <span class="text-sm text-[#f5f3ef] font-medium">Live data stream</span>
          </div>
          <button
            onclick={() => isLive = !isLive}
            class={[
              'text-xs px-3 py-1 rounded transition-colors',
              isLive
                ? 'bg-[oklch(0.723_0.23_136)] text-[#1f1b15]'
                : 'bg-[#4d4439] text-[#f5f3ef]/60'
            ]}
          >
            {isLive ? 'Pause' : 'Resume'}
          </button>
        </div>
        
        <div class="space-y-4">
          {#each dataPoints as point (point.chain)}
            <div class="p-4 bg-[#1f1b15] rounded border border-[#4d4439] transition-all duration-300 hover:border-[oklch(0.723_0.23_136)]">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[oklch(0.723_0.23_136)]/10 flex items-center justify-center">
                    <span class="text-xs font-bold text-[oklch(0.723_0.23_136)]">{point.chain}</span>
                  </div>
                  <span class="text-sm text-[#f5f3ef]/60">{point.chain}/USD</span>
                </div>
                <div class={[
                  'text-xs px-2 py-1 rounded',
                  point.change >= 0
                    ? 'bg-[oklch(0.723_0.23_136)]/20 text-[oklch(0.723_0.23_136)]'
                    : 'bg-red-500/20 text-red-400'
                ]}>
                  {point.change >= 0 ? '+' : ''}{point.change.toFixed(2)}%
                </div>
              </div>
              <div class="flex items-baseline justify-between">
                <div class="text-2xl font-bold text-[#f5f3ef] font-mono">
                  ${point.price.toFixed(2)}
                </div>
                <div class="text-xs text-[#f5f3ef]/40">
                  Vol: {point.volume}
                </div>
              </div>
            </div>
          {/each}
        </div>
        
        <div class="mt-6 pt-4 border-t border-[#4d4439] flex items-center justify-between">
          <span class="text-xs text-[#f5f3ef]/40">
            Last update: {lastUpdate.toLocaleTimeString()}
          </span>
          <span class="text-xs text-[#f5f3ef]/60">
            Updates every 2s
          </span>
        </div>
      </div>
      
      <!-- Code Example -->
      <div class="bg-white rounded border border-gray-200 p-8 flex flex-col">
        <div class="mb-4">
          <div class="text-xs text-gray-400 mb-2 uppercase tracking-wider">Python example</div>
          <h3 class="text-xl font-medium text-gray-900">
            Build this in minutes
          </h3>
        </div>
        
        <div class="flex-1 bg-[#1f1b15] rounded p-6 font-mono text-sm overflow-x-auto">
          <pre class="text-[#f5f3ef]">{codeExample}</pre>
        </div>
        
        <div class="mt-6 flex items-center gap-4">
          <button class="bg-gray-900 text-white px-6 py-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors flex-1">
            Try it yourself
          </button>
          <button class="border border-gray-200 text-gray-900 px-6 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
            View docs
          </button>
        </div>
      </div>
    </div>
    
    <!-- Feature highlights -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div class="p-6 bg-white rounded border border-gray-200">
        <div class="w-10 h-10 rounded-full bg-[oklch(0.723_0.23_136)]/10 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-[oklch(0.723_0.23_136)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h4 class="text-lg font-medium text-gray-900 mb-2">No polling required</h4>
        <p class="text-sm text-gray-600">Data updates automatically when blockchain state changes</p>
      </div>
      
      <div class="p-6 bg-white rounded border border-gray-200">
        <div class="w-10 h-10 rounded-full bg-[oklch(0.723_0.23_136)]/10 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-[oklch(0.723_0.23_136)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h4 class="text-lg font-medium text-gray-900 mb-2">Sub-second latency</h4>
        <p class="text-sm text-gray-600">Get blockchain data faster than running your own node</p>
      </div>
      
      <div class="p-6 bg-white rounded border border-gray-200">
        <div class="w-10 h-10 rounded-full bg-[oklch(0.723_0.23_136)]/10 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-[oklch(0.723_0.23_136)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
          </svg>
        </div>
        <h4 class="text-lg font-medium text-gray-900 mb-2">Composable streams</h4>
        <p class="text-sm text-gray-600">Build on existing data streams or create your own</p>
      </div>
    </div>
  </div>
</section>
