<script setup lang="ts">
import { useTitle } from '@vueuse/core'

const route = useRoute()
const title = computed(() => {
  const title = route.meta?.title || route.matched[0].meta?.title || ''
  return title ? `${title} | electron` : 'electron'
})

useTitle(title)
</script>

<template>
  <VApp>
    <VMain>
      <slot />
    </VMain>
  </VApp>
</template>
