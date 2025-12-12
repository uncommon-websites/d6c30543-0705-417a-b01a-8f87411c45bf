<script>
  import SectionLabel from './SectionLabel.svelte';
</script>

<section class="bg-[#f5f5f5] px-6 py-24">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-3">
      <SectionLabel label="Why Rebar" />
    </div>
    
    <div class="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-16">
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
  </div>
</section>
