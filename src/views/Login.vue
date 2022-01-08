<template>
  <div class="body">
  <div class="here">
    <p class="pa">Auf Dogalu bleibst du mit Menschen in Verbindung und teilst Lektionen, <br>Blogs und vieles mehr mit ihnen.</p>
  <img src="@/assets/whund.png" class="pic" alt="here">
  </div>
    <div>
  <div  class="login">
    <div id="okta-signin-container"></div>
  </div>
  </div>
  </div>
</template>

<script>
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import { oktaSignIn } from '@/okta'

export default {
  name: 'Login',
  components: { },
  mounted: function () {
    this.$nextTick(function () {
      oktaSignIn.showSignInAndRedirect(
        { el: '#okta-signin-container' }
      )
    })
  },
  unmounted () {
    // Remove the widget from the DOM on path change
    oktaSignIn.remove()
  }
}
</script>
<style scoped>
img{
  z-index: -90;
  width: 100%;
}
 #okta-sign-in {
   padding-top: 20px;
   background-color: #F7F7F7;
   backdrop-filter: blur(7px);
   background: linear-gradient(270deg, rgba(34,193,195,0.8) 0%, rgba(30,79,85,0.9) 100%);
   box-shadow: #2a313b;
 }
.here{
}

.pa{
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  color: #404354;
  font-weight: 600;
  text-decoration-thickness: 400% ;
  position: absolute;
  bottom: 55%;
  left: 45%;
  border-color: #2a313b;
  z-index: 5;
  width: 40%;
  font-size: 34px;
  backdrop-filter: blur(5px);
  background: linear-gradient(270deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
  box-shadow: #2a313b;
  text-shadow: whitesmoke 1px 1px;
  padding: 10px;
  transition-property: background-color;
  border-radius: 10px;
}
.login{
  left: 15%;
  bottom: 8% ;
  position: absolute;
}
</style>
