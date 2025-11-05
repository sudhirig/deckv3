<template>
  <div class="flex items-center justify-center py-8">
    <div :class="cardClass" class="relative overflow-hidden rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
      <div class="absolute inset-0 bg-gradient-to-br opacity-10" :class="gradientClass"></div>
      <div class="relative z-10 text-center">
        <div :class="valueClass" class="text-7xl font-black mb-4">
          {{ displayValue }}<span v-if="suffix">{{ suffix }}</span>
        </div>
        <div class="text-xl text-gray-200 leading-relaxed" v-html="label"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  value: Number,
  suffix: String,
  label: String,
  color: {
    type: String,
    default: 'teal'
  },
  animate: {
    type: Boolean,
    default: false
  }
})

const displayValue = ref(0)

const cardClass = computed(() => {
  const colors = {
    teal: 'border-2 border-teal-500/40 bg-teal-900/20',
    orange: 'border-2 border-orange-500/40 bg-orange-900/20',
    blue: 'border-2 border-blue-500/40 bg-blue-900/20'
  }
  return colors[props.color] || colors.teal
})

const valueClass = computed(() => {
  const colors = {
    teal: 'text-teal-400',
    orange: 'text-orange-400',
    blue: 'text-blue-400'
  }
  return colors[props.color] || colors.teal
})

const gradientClass = computed(() => {
  const colors = {
    teal: 'from-teal-400 to-green-400',
    orange: 'from-orange-400 to-amber-400',
    blue: 'from-blue-400 to-cyan-400'
  }
  return colors[props.color] || colors.teal
})

onMounted(() => {
  if (props.animate) {
    const duration = 1500
    const steps = 60
    const increment = props.value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= props.value) {
        displayValue.value = props.value
        clearInterval(timer)
      } else {
        displayValue.value = Math.floor(current)
      }
    }, duration / steps)
  } else {
    displayValue.value = props.value
  }
})
</script>
