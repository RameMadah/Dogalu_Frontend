<template>
  <carosel></carosel>
    <widecard></widecard>
    <accordion></accordion>
</template>

<script>
import Widecard from '@/components/widecard'
import Accordion from '@/components/Accordion'
import Carosel from '@/components/Carosel'

export default {
  name: 'Home',
  components: { Carosel, Accordion, Widecard }
}
</script>
