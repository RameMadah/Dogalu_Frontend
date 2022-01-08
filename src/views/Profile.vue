<template>
  <space></space>
  <div id="profile">
    <h1 class="tex">Mein Konto</h1>
    <p class="text">
      Below is the information <br> from your ID token.
    </p>
    <br>
  </div>

  <div><img src="@/assets/ssssss.png" height="595" width="691" alt="profiledog">
  </div>
  <div class="row">
    <div class="column">
      <div class="keys">
        <p>Name</p>
        <p>Email-Adresse</p>
        <p>Ort</p>
        <p>verifizierte Email</p>
    </div>
    </div>
    <div class="column">
      <div class="values">
        <p>{{claim.name}}</p>
        <p>{{claim.email}}</p>
        <p>{{claim.zoneinfo}}</p>
        <p>{{claim.email_verified}}</p>
      </div>
    </div>
    <div class="column"></div>
    <div class="column"></div>
  </div>
  <space></space>
</template>

<script>
import Space from '@/components/space'
export default {
  name: 'Profile',
  components: { Space },
  data () {
    return {
      claims: [],
      claim: ''
    }
  },
  async created () {
    this.claims = await Object.entries(await this.$auth.getUser()).map(entry => ({ claim: entry[0], value: entry[1] }))
    this.claim = (await this.$auth.getUser())
  }
}
</script>

<style scoped>
.column {
  float: left;
  width: 25%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.values{
  border-color: #2a313b;
  z-index: 5;
  width: 100%;
  backdrop-filter: blur(7px);
  background: linear-gradient(270deg, rgba(34,193,195,0.8) 0%, rgba(30,79,85,0.9) 100%);
  box-shadow: #2a313b;
  text-shadow: #1f7976 1px 1px;
  font-size: 16px;
  color: whitesmoke;
  text-decoration-thickness: 600%;
  padding: 10px;
  transition-property: background-color;
  position: relative;
  border-radius: 10px;
  text-align: left;
  margin-right: auto;
  margin-left: auto;
}
.keys{
  border-color: #2a313b;
  z-index: 5;
  width: 100%;
  backdrop-filter: blur(7px);
  box-shadow: #2a313b;

  font-size: 16px;
  color: black;
  text-decoration-thickness: 600%;
  padding: 10px;
  transition-property: background-color;
  position: relative;
  border-radius: 10px;
  text-align: right;
  margin-right: auto;
  margin-left: auto;
}

img{
  position: absolute;
  bottom: 5%;
}
.tex{
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  color: dimgray;
  font-weight: 700;
}
.text{
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: dimgray;
  font-weight: 700;
}
</style>
