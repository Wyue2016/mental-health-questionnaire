<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  current: Number,
  total: Number,
});

const progress = ref(0);

watch(
  () => props.current,
  (current) => {
    progress.value = (current / props.total) * 100;
  }
);
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #409eff;
  transition: width 0.3s ease;
}
</style>
