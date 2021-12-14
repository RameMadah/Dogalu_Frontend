<template>
  <div class="home">
    <div></div> <widecard></widecard>  <div></div>
  <coverholder></coverholder>
    <left-card></left-card>
    <right-card></right-card>
  </div>
</template>

<script>

import Coverholder from '@/components/Coverholder'
import LeftCard from '@/components/LeftCard'
import RightCard from '@/components/RightCard'
import Widecard from '@/components/widecard'

export default {
  name: 'Home',
  components: { Widecard, RightCard, LeftCard, Coverholder }
}
</script>
