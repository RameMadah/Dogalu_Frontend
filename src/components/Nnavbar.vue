<template>
  <html>
  <div>
  <ul class="nav">
    <li  class="logo" >DOGALU</li>
    <li  class ="list" ><router-link to="/"><a>Home</a></router-link> </li>
    <li v-if ="authenticated" class ="list" ><router-link to="/blog"><a>Blog</a></router-link></li>
    <li v-if ="authenticated" class ="list" ><router-link to="/lesson"><a>Lessons</a></router-link></li>
    <li v-if ="!authenticated" class ="list" ><router-link  to="/login">login</router-link></li>
    <li v-if="authenticated" class ="list" ><router-link to="/profile"  >Profile</router-link></li>
    <li v-if="authenticated" class ="list" ><a v-if="authenticated" v-on:click="logout()">Logout</a></li>
  </ul>
  </div>
  </html>
</template>

<script>
export default {
  name: 'Nnavbar',
  data: function () {
    return { authenticated: false }
  },
  async created () {
    await this.isAuthenticated()
    this.$auth.authStateManager.subscribe(this.isAuthenticated)
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style scoped>
.logo { ;
  color: orangered;
   }

a {text-decoration: none ;
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
text-decoration-thickness: 700% ;}

#a a.router-link-exact-active {
  color: orangered;
}
a:hover {
  color: rgba(34,193,195,1);
}
.a li:not(.logo):hover, .a li:not(.logo):focus {
  color: orangered;}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

/*body {
  background-color: #efeeee; }*/

.nav {
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 0px 10px 10px  rgba(0, 0, 0, 0.07);
  border-radius: 0 0 0px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15rem;
  list-style-type: none; }
.nav li.logo {
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: dimgray;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px white; }
.nav li:not(.logo) {
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px white;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray; }
.nav li:not(.logo):hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1), -4px -4px 10px white; }
.nav li:not(.logo):focus {
  outline: none;
  transform: scale(0.95);
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1), -4px -4px 10px white, 4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset, -4px -4px 10px white inset; }
.nav li:not(.logo):hover, .nav li:not(.logo):focus {
  color: orangered; }

</style>
