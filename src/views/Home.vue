<template>
  <div id="home">
    <div v-if="!this.$root.authenticated">
      <div class="greeting">
      <p class="writeq">Willkomen bei Dogalu</p>
      </div>
    </div>
    <div v-if="this.$root.authenticated">
      <div class="greeting">
      <p class="write" >Willkommen zurück, {{claims.name}}!</p>
      <p class="write">Sie haben sich erfolgreich eingeloggt und können nun die Dogalu-Funktionen entdecken
      </p>
      </div>
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
export default {
  name: 'Home',
  components: { ProgressBar, Carosel, Accordion, Widecard },
  data: function () {
    return {
      claims: ''
    }
  },
  created () { this.setup() },
  methods: {
    async setup () {
      if (this.$root.authenticated) { this.claims = ((await this.$auth.getUser())) }
    }
  }
}
</script>

<style scoped>
.write{
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: white;
  font-weight: 500;
}

.writeq{
  color: whitesmoke;
  text-shadow: #1c3130 1px 1px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  margin-right: auto;
  font-size: 48px;
}

.greeting{
  border-color: #2a313b;
  z-index: 5;
  width: 50%;
  backdrop-filter: blur(7px);
  background: linear-gradient(270deg, rgba(34,193,195,0.8) 0%, rgba(30,79,85,0.9) 100%);
  box-shadow: #2a313b;
  text-shadow: #1c3130 1px 1px;
  padding: 10px;
  transition-property: background-color;
  position: relative;
  border-radius: 10px;
  bottom: -110px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
</style>
