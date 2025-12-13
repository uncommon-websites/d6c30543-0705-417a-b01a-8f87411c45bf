<script>
  import SectionLabel from './SectionLabel.svelte';
</script>

<section class="bg-[#f5f5f5] px-6 py-24">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-3">
      <SectionLabel label="Why Rebar" />
    </div>
    
    <div class="lg:col-span-9 space-y-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 class="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-6">
            Build blockchain apps without managing infrastructure
          </h2>
          <p class="text-gray-500 leading-relaxed">
            Pre-indexed data from 50+ blockchains with sub-second latency. No nodes, no RPCs, no data pipelines. Just build.
          </p>
        </div>
        
        <div class="flex gap-12 items-end pb-2">
          <div class="flex flex-col gap-1">
              <span class="text-4xl font-bold text-gray-900">50+</span>
              <span class="text-xs text-gray-400">blockchains supported</span>
          </div>
          <div class="flex flex-col gap-1">
              <span class="text-4xl font-bold text-gray-900">&lt;100ms</span>
              <span class="text-xs text-gray-400">average latency</span>
          </div>
        </div>
      </div>

      <!-- Visual Comparison -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
        <!-- Traditional Approach -->
        <div class="relative p-8 bg-white rounded border border-gray-200">
          <div class="text-xs text-gray-400 mb-4 uppercase tracking-wider">Traditional approach</div>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 mt-2 rounded-full bg-gray-300"></div>
              <div class="flex-1">
                <div class="text-sm font-medium text-gray-900 mb-1">Run blockchain nodes</div>
                <div class="text-xs text-gray-500">Manage infrastructure, sync state</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 mt-2 rounded-full bg-gray-300"></div>
              <div class="flex-1">
                <div class="text-sm font-medium text-gray-900 mb-1">Build data pipelines</div>
                <div class="text-xs text-gray-500">ETL, indexing, storage</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 mt-2 rounded-full bg-gray-300"></div>
              <div class="flex-1">
                <div class="text-sm font-medium text-gray-900 mb-1">Manage RPCs</div>
                <div class="text-xs text-gray-500">Rate limits, reliability issues</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 mt-2 rounded-full bg-gray-300"></div>
              <div class="flex-1">
                <div class="text-sm font-medium text-gray-900 mb-1">Write business logic</div>
                <div class="text-xs text-gray-500">Finally build your app</div>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-gray-200">
            <div class="text-xs text-gray-400">Time to production: <span class="text-gray-900 font-medium">Weeks to months</span></div>
          </div>
        </div>

        <!-- Rebar Approach -->
        <div class="relative p-8 bg-[#2a2418] rounded border border-[#4d4439]">
          <div class="text-xs text-[#f5f3ef]/60 mb-4 uppercase tracking-wider">With Rebar</div>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 mt-2 rounded-full bg-[oklch(0.723_0.23_136)]"></div>
              <div class="flex-1">
                <div class="text-sm font-medium text-[#f5f3ef] mb-1">Write business logic</div>
                <div class="text-xs text-[#f5f3ef]/60">Start building immediately</div>
              </div>
            </div>
            <div class="opacity-30 space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 mt-2 rounded-full bg-gray-500 line-through"></div>
                <div class="flex-1">
                  <div class="text-sm font-medium text-[#f5f3ef] line-through">Run blockchain nodes</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 mt-2 rounded-full bg-gray-500 line-through"></div>
                <div class="flex-1">
                  <div class="text-sm font-medium text-[#f5f3ef] line-through">Build data pipelines</div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 mt-2 rounded-full bg-gray-500 line-through"></div>
                <div class="flex-1">
                  <div class="text-sm font-medium text-[#f5f3ef] line-through">Manage RPCs</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#4d4439]">
            <div class="text-xs text-[#f5f3ef]/60">Time to production: <span class="text-[#f5f3ef] font-medium">Minutes</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
