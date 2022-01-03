<template>
  <space></space>
  <signIn></signIn>
</template>

<script>
import SignIn from '@/components/SignIn'
import Space from '@/components/space'
export default {
  name: 'Login',
  components: { Space, SignIn }
}
</script>

<style scoped>
</style>
