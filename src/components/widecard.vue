<template>
  <div class="card">
    <div class="card-header">
      Präsentiert
    </div>
    <div class="card-body">
      <h5 class="card-title">Was Ist Dogalu ?</h5>
      <p class="card-text">Plattform, auf der Sie kostenlose Lektionen
        zur Erziehung Ihres Hundes erhalten können</p>
      <a href="#" class="btn btn-primary"><router-link to="/lesson"><a>Überblick</a></router-link></a>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'widecard'
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #2a313b;
}
.btn-primary{
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
  transition-duration: 0.4s;
  background-color: white ;
  border: 0px solid #1f7976;
  border-radius: 10px;
  box-shadow: 9px 9px 16px #8e909d, -9px -9px 16px ghostwhite;

}

.btn-primary:hover{
  text-decoration: none;
  color: black;
  background-color: white;
  box-shadow: 9px 9px 16px #8e909d, -9px -9px 16px floralwhite;
  transition-duration: 0.4s;
  border-color:  #1f7976;
  border-radius: 8px;
  transform: scale(1.05)
}
.card-body{
  width: 50%;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
</style>
