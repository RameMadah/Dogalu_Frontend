<template>
  <div id="home">
    <div v-if="!this.$root.authenticated">
      <space></space>
      <p>Willkomen bei Dogalu</p>
    </div>
    <div v-if="this.$root.authenticated">
      <p>Welcome back, {{claims.name}}!</p>
      <p>
        You have successfully authenticated with Okta!
        Visit the <a href="/profile">My Profile</a> page to take a look inside the ID token.
      </p>
    </div>
    <carosel></carosel>
    <widecard></widecard>
    <progress-bar></progress-bar>
    <accordion></accordion>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
import Carosel from '@/components/Carosel'
import Accordion from '@/components/Accordion'
import Widecard from '@/components/widecard'
import Space from '@/components/space'

export default {
  name: 'Home',
  components: { Space, ProgressBar, Carosel, Accordion, Widecard },
  data: function () {
    return {
      claims: ''
    }
  },
  created () { this.setup() },
  methods: {
    async setup () {
      if (this.$root.authenticated) { this.claims = ((await this.$auth.getUser()).email) }
    }
  }
}
</script>

<style scoped>
p{
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  color: dimgray;
  font-weight: 900;
}
</style>
