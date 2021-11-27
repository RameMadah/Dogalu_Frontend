<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dogalu</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="container-fluid">
      <router-link to="/lessons">Lessons</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/">home</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}

</script>

<style scoped>
.navbar-brand{
  left: 30px;
}
</style>
