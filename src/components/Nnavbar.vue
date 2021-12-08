<template>
  <ul class="nav">
    <li class="logo">DOGALU</li>
    <li ><router-link to="/"><A>Home</A></router-link> </li>
    <li ><router-link to="/about"><a>About</a></router-link></li>
    <li ><router-link to="/lesson"><a>Lessons</a></router-link></li>
  </ul>
</template>

<script>

export default {
  name: 'Nnavbar'
}

</script>

<style scoped>
.A {text-decoration: none ;}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

body {
  background-color: #efeeee; }

.nav {
  width: 100%;
  height: 100px;
  background-color: #ecf0f3;
  box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.07);
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
