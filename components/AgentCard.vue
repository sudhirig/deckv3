<template>
  <div :class="cardClass" class="relative overflow-hidden rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
    <div class="absolute inset-0 opacity-5" :class="bgGradient"></div>
    
    <div class="relative z-10 flex-1">
      <div class="text-5xl mb-4">{{ icon }}</div>
      <div class="text-xl font-bold mb-3" :class="titleClass">{{ title }}</div>
      
      <div class="space-y-3 text-sm">
        <div class="bg-black/30 rounded-lg p-3">
          <div class="text-red-300 font-semibold mb-1">❌ Problem</div>
          <div class="text-gray-300 text-xs">{{ problem }}</div>
        </div>
        
        <div class="bg-black/30 rounded-lg p-3">
          <div class="text-green-300 font-semibold mb-1">✅ Solution</div>
          <div class="text-gray-300 text-xs">{{ solution }}</div>
        </div>
      </div>
      
      <div class="mt-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  color: String,
  problem: String,
  solution: String
})

const cardClass = computed(() => {
  const colors = {
    orange: 'border-2 border-orange-500/40 bg-orange-900/20',
    green: 'border-2 border-green-500/40 bg-green-900/20',
    teal: 'border-2 border-teal-500/40 bg-teal-900/20'
  }
  return colors[props.color] || colors.teal
})

const titleClass = computed(() => {
  const colors = {
    orange: 'text-orange-300',
    green: 'text-green-300',
    teal: 'text-teal-300'
  }
  return colors[props.color] || colors.teal
})

const bgGradient = computed(() => {
  const colors = {
    orange: 'bg-gradient-to-br from-orange-400 to-amber-400',
    green: 'bg-gradient-to-br from-green-400 to-emerald-400',
    teal: 'bg-gradient-to-br from-teal-400 to-cyan-400'
  }
  return colors[props.color] || colors.teal
})
</script>
