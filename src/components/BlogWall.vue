<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Beiträge Weltweit</button>
  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="bolgtitle" id="offcanvasScrollingLabel">Weltweit Beiträge</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BlogWall'
}
</script>

<style scoped>
.btn-primary {
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 700%;
  /*  color: #fff;*/
  background-color: #e4ecf4;
  border-color: rgba(163, 177, 198, 0.6);
}

label {
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 400% ;
  display: flex;
  float: left;
}

.bolgtitle{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  font-size: 98px;
}
.offcanvas-body{
}

body {
  background: #f0f0f3;
  margin: 0;
  padding: 4em;
  font-family: 'Abel', sans-serif;
}
.offcanvas {
  visibility: visible;
  width: 100%;
  background-color: #ecf0f3;
}
</style>
