<template>
  <div>
    <div class="slider">
      <div class="controls">
        <div class="left"><i class="lni lni-chevron-left-circle"></i></div>
        <div class="right"><i class="lni lni-chevron-right-circle"></i></div>
      </div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
    </div>
  </div>
</template>

<script >

export default {
  name: 'SliderCover'
}
</script>

<style scoped>
*,
*::before,
*::after{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

html,
body{
  height:100%;
}

body{
  overflow-x:hidden;
}

.slider{
  width:100%;
  height:100%;
  display:flex;
  justify-content:stretch;
  overflow-x:hidden;
  scroll-snap-type:x mandatory;
  scroll-behavior:smooth;
  position:relative;
}

.slide{
  min-width:100vw;
  scroll-snap-align:start;
  background-size:cover;
  background-repeat:no-repeat;
}

.controls{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:95%;
}

.left,
.right{
  width:40px;
  height:40px;
  background:white;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  box-shadow:0 0 5px gray;
  border-radius:50%;
  display:grid;
  place-items:center;
  font-size:2rem;
  color:hsl(0, 0%, 30%);
}

.left:hover, .right:hover{
  cursor:pointer;
}

.right{
  right:0;
}
</style>
