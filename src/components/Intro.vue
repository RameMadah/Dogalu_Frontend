<template>
    <div class="container">
        <div class="cir"></div>
        <div class="cir"></div>
        <div class="cir"></div>
        <div class="cir"></div>
        <div class="cir"></div>

      <svg id="logo" width="100%" height="100%" viewBox="0 0 800 800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" >
    <g id="lo" >
        <path d="M290.981,227.184L290.981,281.964C279.965,281.964 269.357,283.508 259.269,286.288C219.623,297.306 188.321,328.61 177.305,368.253C174.421,378.345 172.875,388.951 172.875,399.969L118.097,399.969C118.097,304.72 195.631,227.184 290.981,227.184" />
        <path d="M290.981,399.968C290.981,495.318 213.445,572.854 118.097,572.854L118.097,518.074C129.113,518.074 139.719,516.53 149.811,513.75C189.453,502.732 220.757,471.428 231.877,431.682C234.659,421.592 236.201,410.986 236.201,399.968L290.981,399.968Z" />
        <path d="M572.294,518.074L572.294,572.854C476.944,572.854 399.41,495.318 399.41,399.967L454.188,399.967C454.188,410.987 455.734,421.695 458.618,431.785C469.634,471.428 500.836,502.628 540.48,513.648C550.57,516.532 561.278,518.074 572.294,518.074" />
        <path d="M572.294,236.143L572.294,295.351C543.772,310.281 522.046,336.643 513.19,368.254C510.41,378.344 508.866,388.95 508.866,399.968L453.984,399.968C453.984,323.771 503.614,259.003 572.294,236.143" />
        <rect x="345.638" y="227.146" width="53.756" height="345.709" />
        <rect x="627.123" y="518.074" width="54.78" height="54.78" />
    </g>

            <def>
<filter id="dropshadow">
  <feGaussianBlur in="SourceAlpha" stdDeviation="12"/> <!-- stdDeviation is how much to blur -->
    <feOffset dx="10" dy="10" result="offsetblur"/> <!-- how much to offset -->
    <feComponentTransfer>
    <feFuncA type="linear" slope="0.1"/> <!-- slope is the opacity of the shadow -->
  </feComponentTransfer>

    <feMerge><feMergeNode/> <!-- this contains the offset blurred image -->
        <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
  </feMerge>
</filter>
  </def>
</svg>
    </div>
</template>

<script>
export default {
  name: 'Intro'
}
// eslint-disable-next-line no-undef
$('#logo').on('click', function () {
  tl.restart()
})

const gsap = Animation
const tl = gsap.timeline()

tl
  .set('.cir', {
    scale: 0,
    transformOrigin: 'center'
  })
  .set('#logo', {
    scale: 0.27,
    transformOrigin: 'center',
    opacity: 0
  })
  .to('.cir', {
    ease: 'back.out(3)',
    duration: 4,
    scale: gsap.utils.distribute({
      base: 1,
      amount: 3,
      from: 'end'
    }),
    stagger: {
      each: 0.4
    }
  })
  .to(
    '#logo',
    {
      scale: 0.3,
      transformOrigin: 'center',
      opacity: 1,
      duration: 3
    },
    '-=1.5'
  )

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, html {
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  background: #f1f2f6;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo {
  opacity: 0;
}
#lo {
  fill: #8395a7;
  filter: drop-shadow( 10px 10px 10px rgba(136, 165, 191, 0.1));
  cursor: pointer;
}
.cir {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 10px 10px 10px 10px rgba(136, 165, 191, 0.1) inset, inset -10px -10px 10px #FFFFFF;
}

</style>
