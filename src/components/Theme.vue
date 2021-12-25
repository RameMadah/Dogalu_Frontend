<template>
  <div>
  <img src = "src/assets/moon-fill.svg" class="bi bi-brightness-high-fill" id="theme-button">
  </div>
</template>

<script >
export default {
  name: 'Theme'
}
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const icontheme = 'bi-moon-fill'

const selectedTheme = localStorage.getItem('selectedTheme')
const selectedIcon = localStorage.getItem('selectedIcon')

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
  themeButton.classList[selectedIcon === 'bi-moon-fill' ? 'add' : 'remove'](icontheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darktheme)
  themeButton.classList.toggle(icontheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(icontheme) ? 'bi-moon-fill' : 'bi-brightness-high-fill'
</script >

<style scoped>
:root {
  --text-color: black;
  --body-color:white;
}
body.dark-theme {
  --text-color: white;
  --body-color: black;
}
.change-theme{
  position: absolute;
  right: 1.5rem;
  top: 2.2rem;
  font-size: 2rem;
  cursor: pointer;
}
body{
  background-color: var(--body-color);
  color: var(--text-color);
  line-height: 1.6;
}
</style>
