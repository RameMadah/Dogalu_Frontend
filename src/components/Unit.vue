<template>
  <div class="profile">
    <div class="profile__image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png" alt="Doggo" /></div>
    <div class="profile__info">
      <h3>Doggo Dogg</h3>
      <p class="profile__info__extra">A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.</p>
    </div>
    <div class="profile__stats">
      <p class="profile__stats__title">Type</p>
      <h5 class="profile__stats__info">Puppy</h5>
    </div>
    <div class="profile__stats">
      <p class="profile__stats__title">Size</p>
      <h5>Medium</h5>
    </div>
    <div class="profile__stats">
      <p class="profile__stats__title">Weight</p>
      <h5 class="profile__stats__info">45 lbs</h5>
    </div>
    <div class="profile__cta"><a class="button">Adopt Doggo!</a></div>
  </div>
</template>
<script>
export default {
  name: 'Unit'
}
</script>

<style scoped>

.profile {
  position: relative;
  background: var(--backgroundColor);
  color: var(--foregroundColor);
  box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s ease;
  display: grid;
  grid: 200px repeat(5, auto)/100%;
}

.profile__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 7px solid var(--secondaryColor);
}

.profile__info {
  padding: 20px 25px 0;
}

.profile__stats {
  padding: 5px 25px;
}

.profile__stats__title {
  color: var(--primaryShade3);
  text-transform: uppercase;
  font-size: 16px;
}

.profile__cta {
  padding: 0 25px 25px;
}

.profile a:hover {
  top: 0;
  box-shadow: none;
  background: var(--primaryShade4);
}

.profile a:active, .profile a:focus {
  top: 0;
  box-shadow: none;
  background: var(--primaryShade5);
}
</style>
