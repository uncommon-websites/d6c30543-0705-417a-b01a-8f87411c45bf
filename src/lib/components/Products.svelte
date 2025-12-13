<script>
  import SectionLabel from './SectionLabel.svelte';
</script>

<section class="bg-[#f5f5f5] px-6 py-24 border-t border-gray-200">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-3">
      <SectionLabel label="Core Features" />
    </div>
    
    <div class="lg:col-span-9">
      <div class="mb-16">
        <h2 class="font-serif text-4xl md:text-5xl text-gray-900 mb-2">
          Data streams, calculations,
        </h2>
        <h2 class="font-serif text-4xl md:text-5xl text-gray-400">
          and automated actions
        </h2>
      </div>

      <!-- Visual Flow Diagram -->
      <div class="mb-16 relative">
        <div class="grid grid-cols-3 gap-8 relative">
          <!-- Data Streams -->
          <div class="relative p-6 bg-white rounded border border-gray-200">
            <div class="w-10 h-10 rounded-full bg-[oklch(0.723_0.23_136)]/10 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-[oklch(0.723_0.23_136)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="text-xs text-gray-400 mb-1">01</div>
            <div class="text-lg font-medium text-gray-900 mb-2">Data Streams</div>
            <div class="text-xs text-gray-500">Real-time blockchain data from 50+ chains</div>
          </div>

          <!-- Calculations -->
          <div class="relative p-6 bg-white rounded border border-gray-200">
            <div class="w-10 h-10 rounded-full bg-[oklch(0.723_0.23_136)]/10 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-[oklch(0.723_0.23_136)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="text-xs text-gray-400 mb-1">02</div>
            <div class="text-lg font-medium text-gray-900 mb-2">Calculations</div>
            <div class="text-xs text-gray-500">Serverless logic execution</div>
          </div>

          <!-- Actions -->
          <div class="relative p-6 bg-white rounded border border-gray-200">
            <div class="w-10 h-10 rounded-full bg-[oklch(0.723_0.23_136)]/10 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-[oklch(0.723_0.23_136)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="text-xs text-gray-400 mb-1">03</div>
            <div class="text-lg font-medium text-gray-900 mb-2">Actions</div>
            <div class="text-xs text-gray-500">Automated cross-chain responses</div>
          </div>

          <!-- Connection arrows with animation -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 200" fill="none" preserveAspectRatio="none">
            <!-- Animated dashed line -->
            <path d="M260,100 L540,100" stroke="oklch(0.723 0.23 136)" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M535,95 L545,100 L535,105" stroke="oklch(0.723 0.23 136)" stroke-width="1.5" stroke-opacity="0.3" fill="none" />
            
            <!-- Animated data pulse -->
            <circle cx="260" cy="100" r="3" fill="oklch(0.723 0.23 136)" opacity="0.6">
              <animate attributeName="cx" from="260" to="540" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.8;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        
        <div class="mt-6 text-center">
          <div class="text-xs text-gray-400 uppercase tracking-wider">Composable architecture</div>
          <div class="text-sm text-gray-500 mt-1">Each component builds on the others, creating network effects</div>
        </div>
      </div>

      <div class="grid gap-0 border-t border-gray-200">
        <!-- Item 1 -->
        <a href="/" class="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-gray-200 hover:bg-white transition-colors px-4 -mx-4">
          <div class="md:col-span-4">
            <div class="text-xs text-gray-400 mb-1">Real-time blockchain data</div>
            <h3 class="text-2xl font-medium text-gray-900">Data Streams</h3>
          </div>
          <div class="md:col-span-7">
            <p class="text-gray-500 leading-relaxed">
              Pre-indexed data from 50+ blockchains with sub-second latency. Access token prices, gas fees, protocol metrics, and on-chain events without running nodes or managing RPCs.
            </p>
          </div>
          <div class="md:col-span-1 flex justify-end items-start pt-2">
            <svg class="w-6 h-6 text-gray-400 group-hover:text-black transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </a>

        <!-- Item 2 -->
        <a href="/" class="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-gray-200 hover:bg-white transition-colors px-4 -mx-4">
          <div class="md:col-span-4">
            <div class="text-xs text-gray-400 mb-1">Serverless execution</div>
            <h3 class="text-2xl font-medium text-gray-900">Calculations</h3>
          </div>
          <div class="md:col-span-7">
            <p class="text-gray-500 leading-relaxed">
              Write logic in Python or simple formulas. Build composable calculations that automatically update with live data. From RSI indicators to complex liquidation models.
            </p>
          </div>
          <div class="md:col-span-1 flex justify-end items-start pt-2">
            <svg class="w-6 h-6 text-gray-400 group-hover:text-black transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </a>

        <!-- Item 3 -->
        <a href="/" class="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-gray-200 hover:bg-white transition-colors px-4 -mx-4">
          <div class="md:col-span-4">
            <div class="text-xs text-gray-400 mb-1">Cross-chain automation</div>
            <h3 class="text-2xl font-medium text-gray-900">Actions</h3>
          </div>
          <div class="md:col-span-7">
            <p class="text-gray-500 leading-relaxed">
              Trigger automated responses to on-chain events. Execute transactions, send alerts via Discord/Telegram, or call webhooks. Built-in wallet and key management included.
            </p>
          </div>
          <div class="md:col-span-1 flex justify-end items-start pt-2">
            <svg class="w-6 h-6 text-gray-400 group-hover:text-black transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
