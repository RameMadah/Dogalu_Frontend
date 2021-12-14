<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col"  v-for= " lesson in lessons" v-bind:key= "lesson.lid" >
      <div class="card h-100">
        <img :src="getAvatar(lesson)" class="card-img-top" alt="lesson.title">
        <div class="card-body">
          <h5 class="card-title">{{ lesson.title }}</h5>
          <p class="card-text">{{lesson.description}}</p>
        </div>
           <a href="#" class="btn btn-primary">Tip erhalten</a>
        <div class="card-footer">
          <small class="text-muted">letzte Woche</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gridcard',
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
.row-cols-md-3>* {
  flex: 0 0 auto;
  width: 29.3333333333%;
  padding: 50px;
}
</style>
