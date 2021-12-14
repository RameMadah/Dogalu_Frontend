<template>
  <div class="list-group" v-for="lesson in lessons" :key="lesson.lid">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      {{lesson.title}}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Sidenav',

  data () {
    return {
      lessons: [
        {
          lid: 1,
          title: 'Fpötschen',
          description: 'Halten Sie Ihre Faust mit der Handfläche nach oben etwa auf' +
            ' Brusthöhe Ihres Hundes. Ihr Hund sollte ganz natürlich nach Ihrer Faust greifen,' +
            ' um an das Leckerli zu gelangen. Wenn er das tut, öffnen Sie Ihre Hand und geben Sie ihm ' +
            'das Leckerli und loben Sie ihn ausgiebig. Wiederholen Sie diese Schritte mehrmals, bis Ihr Hund' +
            ' es verstanden hat.',
          punkte: 25
        },
        {
          lid: 2,
          title: 'Fpötschen',
          description: 'Halten Sie Ihre Faust mit der Handfläche nach oben etwa auf' +
            ' Brusthöhe Ihres Hundes. Ihr Hund sollte ganz natürlich nach Ihrer Faust greifen,' +
            ' um an das Leckerli zu gelangen. Wenn er das tut, öffnen Sie Ihre Hand und geben Sie ihm ' +
            'das Leckerli und loben Sie ihn ausgiebig. Wiederholen Sie diese Schritte mehrmals, bis Ihr Hund' +
            ' es verstanden hat.',
          punkte: 25
        }
      ]
    }
  },
  methods: {
    getAvatar (lesson) {
      if (lesson.lid > 0) {
        return require('../assets/Balu.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
