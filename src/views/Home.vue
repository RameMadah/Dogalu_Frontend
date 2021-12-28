<template>
  <carosel></carosel>

    <widecard></widecard>
  <progress-bar></progress-bar>
    <accordion></accordion>
</template>

<script>
import Widecard from '@/components/widecard'
import Accordion from '@/components/Accordion'
import Carosel from '@/components/Carosel'
import ProgressBar from '@/components/ProgressBar'

export default {
  name: 'Home',
  components: { ProgressBar, Carosel, Accordion, Widecard }
}
</script>
