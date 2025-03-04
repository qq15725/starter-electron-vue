<script setup lang="ts">
const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div class="p-5 bg-warning">
    <Versions />
  </div>
</template>
