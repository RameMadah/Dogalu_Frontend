<template>
  <space></space>
  <div class="login">
    <div id="okta-signin-container"></div>
  </div>
  <space></space>
</template>

<script>
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import { oktaSignIn } from '@/okta'
import Space from '@/components/space'

export default {
  name: 'Login',
  components: { Space },
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

</style>
