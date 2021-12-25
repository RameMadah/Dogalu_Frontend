<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Blog</button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Blogalu</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      ...
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Titel :</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Author :</label>
        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label class="form-label">Text :</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBlog'
}
</script>

<style scoped>

</style>
