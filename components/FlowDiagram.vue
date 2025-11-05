<template>
  <div class="w-full h-64">
    <div v-if="type === 'old'" class="flex flex-col items-center justify-center h-full space-y-4">
      <div class="bg-red-900/40 border-2 border-red-500 rounded-xl p-4 w-48 text-center">
        <div class="text-3xl mb-2">👤</div>
        <div class="font-bold text-red-300">Single Advisor</div>
      </div>
      <div class="text-2xl text-red-400">↓</div>
      <div class="grid grid-cols-3 gap-2">
        <div class="bg-gray-800 rounded p-2 text-xs text-center text-gray-400">
          Limited<br/>Time
        </div>
        <div class="bg-gray-800 rounded p-2 text-xs text-center text-gray-400">
          Generalist<br/>Approach
        </div>
        <div class="bg-gray-800 rounded p-2 text-xs text-center text-gray-400">
          Human<br/>Bias
        </div>
      </div>
    </div>
    
    <div v-else class="flex flex-col items-center justify-center h-full space-y-4">
      <div class="bg-teal-900/40 border-2 border-teal-500 rounded-xl p-4 w-48 text-center">
        <div class="text-3xl mb-2">🤖</div>
        <div class="font-bold text-teal-300">AI Committee</div>
      </div>
      <div class="text-2xl text-teal-400">↓</div>
      <div class="grid grid-cols-5 gap-2">
        <div class="bg-gradient-to-br from-teal-900/60 to-teal-800/40 border border-teal-500/50 rounded p-2 text-xs text-center text-teal-300">
          CIO<br/>Agent
        </div>
        <div class="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border border-purple-500/50 rounded p-2 text-xs text-center text-purple-300">
          Tax<br/>Agent
        </div>
        <div class="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border border-blue-500/50 rounded p-2 text-xs text-center text-blue-300">
          Research<br/>Agent
        </div>
        <div class="bg-gradient-to-br from-orange-900/60 to-orange-800/40 border border-orange-500/50 rounded p-2 text-xs text-center text-orange-300">
          Alt<br/>Agent
        </div>
        <div class="bg-gradient-to-br from-green-900/60 to-green-800/40 border border-green-500/50 rounded p-2 text-xs text-center text-green-300">
          Risk<br/>Agent
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>
