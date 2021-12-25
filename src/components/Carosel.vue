<template>
  <div id="carouselExampleControlsNoTouching" class="carouselslide" data-bs-touch="false" data-bs-interval="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.squarespace-cdn.com/content/v1/5e88a5d026b2a81425a06cdd/1586102468872-NQZSP8F93PTA2DLLUXLC/Pet%2BLineup.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://images.squarespace-cdn.com/content/v1/5e88a5d026b2a81425a06cdd/1586102468872-NQZSP8F93PTA2DLLUXLC/Pet%2BLineup.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://images.squarespace-cdn.com/content/v1/5e88a5d026b2a81425a06cdd/1586102468872-NQZSP8F93PTA2DLLUXLC/Pet%2BLineup.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carosel'
}
</script>

<style scoped>
.carouselslide {
  padding: 20px 0px 0px 0px;
}
</style>
