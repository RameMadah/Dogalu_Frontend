<template>
  <div class="progress">
    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
      <span class="sr-only">100% Complete</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar'
}
</script>

<style scoped>
.progress {
  width: 400px;
  position: absolute;
  left: 600px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
