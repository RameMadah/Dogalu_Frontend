<template>
  <div class="home">
  <coverholder></coverholder>
    <left-card></left-card>
    <right-card></right-card>
  </div>
</template>

<script>

import Coverholder from '@/components/Coverholder'
import LeftCard from '@/components/LeftCard'
import RightCard from '@/components/RightCard'

export default {
  name: 'Home',
  components: { RightCard, LeftCard, Coverholder }
}
</script>
