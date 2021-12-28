<template>
  <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar'
}
</script>

<style scoped>
.progress{
  background: linear-gradient(270deg, rgba(34,193,195,1) 0%, rgba(30,79,85,1) 100%);
}
</style>
