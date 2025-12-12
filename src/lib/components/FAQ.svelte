<script lang="ts">
  import { slide } from 'svelte/transition';
  
  interface FAQItem {
    question: string;
    answer: string;
  }

  const faqs: FAQItem[] = [
    { question: "How does Rebar differ from running my own node?", answer: "Rebar provides pre-indexed data from 50+ blockchains with sub-second latency, eliminating the need to run nodes, manage RPCs, or build data pipelines. You get instant access to live blockchain data through type-safe APIs." },
    { question: "What blockchains does Rebar support?", answer: "Rebar supports 50+ blockchains including Ethereum, Solana, Cosmos, Polygon, Arbitrum, and many more. All chains have consistent interfaces with the same API structure." },
    { question: "Can I build custom calculations on top of existing data?", answer: "Yes! Rebar's composable network allows you to build on top of existing data streams and calculations published by others. Write logic in Python or simple formulas, and your calculations automatically update with live data." },
    { question: "How does the reward system work?", answer: "When you publish data streams, calculations, or actions to the network, you earn rewards when other developers use your work. This creates network effects and incentivizes high-quality contributions." },
    { question: "What's the pricing model?", answer: "Rebar uses a pay-per-compute serverless execution model. You only pay for what you use, with no infrastructure overhead. A free tier is available for developers getting started." },
    { question: "Can I trigger automated actions based on blockchain events?", answer: "Yes! Rebar Actions allow you to trigger automated responses to on-chain events with sub-second latency. Execute transactions, send alerts via Discord/Telegram/Email, or call custom webhooks." },
    { question: "Do I need to manage wallets and keys for on-chain actions?", answer: "No. Rebar includes built-in wallet and key management for blockchain interactions, so you can focus on building your application logic without worrying about secure key storage." }
  ];

  let openIndex: number | null = null;

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section class="bg-[#f5f5f5] px-6 py-24">
  <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-4">
      <h2 class="font-serif text-4xl text-gray-900 mb-6">
        Frequently asked questions
      </h2>
      <a href="/" class="text-sm text-gray-900 border-b border-gray-300 pb-0.5 hover:border-black transition-colors">See all support</a>
    </div>
    
    <div class="lg:col-span-8">
      <div class="border-t border-gray-200">
        {#each faqs as faq, i}
          <div class="border-b border-gray-200">
            <button 
              class="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              on:click={() => toggle(i)}
            >
              <span class="text-lg text-gray-800">{faq.question}</span>
              <span class="text-2xl font-light text-gray-400 ml-4">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            {#if openIndex === i}
              <div transition:slide class="pb-6 text-gray-500 leading-relaxed">
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
