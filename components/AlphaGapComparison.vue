<template>
  <div class="w-full space-y-6 px-8">
    <div v-for="(item, index) in gaps" :key="index" class="grid grid-cols-2 gap-6">
      <!-- What HNWIs Want -->
      <div class="bg-gradient-to-r from-green-900/30 to-teal-900/30 border-2 border-green-500/40 rounded-xl p-6">
        <div class="flex items-start gap-4">
          <div class="text-4xl">{{ item.icon }}</div>
          <div class="flex-1">
            <div class="text-lg font-bold text-green-300 mb-2">{{ item.title }}</div>
            <div class="text-sm text-gray-300">{{ item.want }}</div>
            <div class="mt-3 text-2xl font-bold text-teal-400">{{ item.metric }}</div>
          </div>
        </div>
      </div>
      
      <!-- What They Get -->
      <div class="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-500/40 rounded-xl p-6">
        <div class="flex items-start gap-4">
          <div class="text-4xl">❌</div>
          <div class="flex-1">
            <div class="text-lg font-bold text-red-300 mb-2">Current Reality</div>
            <div class="text-sm text-gray-300">{{ item.get }}</div>
            <div class="mt-3 text-2xl font-bold text-red-400">{{ item.gap }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const gaps = [
  {
    icon: '📊',
    title: 'Digital Experience',
    want: 'Real-time dashboards, AI insights, 24/7 access',
    get: 'Quarterly PDFs, scheduled calls, offline reports',
    metric: 'Want: Real-time',
    gap: 'Get: Quarterly'
  },
  {
    icon: '💼',
    title: 'Product Access',
    want: 'Private equity, hedge funds, alternatives (15% target)',
    get: 'Stocks and bonds only, alternative access blocked',
    metric: '+300-500bps',
    gap: 'Alpha missed'
  },
  {
    icon: '💰',
    title: 'Tax Optimization',
    want: 'Daily tax-loss harvesting, proactive strategies',
    get: 'Yearly tax review, reactive planning',
    metric: '+1.8% annual',
    gap: 'Alpha lost'
  }
]
</script>
