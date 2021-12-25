<template>
  <div class="container">
    <div class="row">
      <div class="col">col</div>
      <div class="col"  v-for= " lesson in lessons" v-bind:key= "lesson.lid" >
        <div class="card h-100">
          <img :src="getAvatar(lesson)" class="card-img-top" alt="lesson.title">
          <div class="card-body">
            <h5 class="card-title">{{ lesson.title }}</h5>
            <p class="card-text">{{lesson.description.substring(0,250) + '... Weiter lesen'}} </p>
          </div>
          <a href="#" class="btn btn-primary">Tip erhalten</a>
          <div class="card-footer">
            <small class="text-muted">letzte Woche</small>
          </div>
        </div>
      </div>
      <div class="col">col</div>
      <div class="col">col</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridV2',
  components: { },
  data () {
    return {
      lessons: []
    }
  },
  methods: {
    getAvatar (lesson) {
      if (lesson.lid > 0) {
        return require('../assets/Balu.png')
      }
    }
  },
  mounted () {
    const base = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/lessons'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(base, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(lesson => {
        this.lessons.push(lesson)
      }))
      .catch(error => console.log('error', error))
  },
  getLesson (lesson) {
    if (lesson.description.length > 50) return lesson.description.substring(0, 50) + ' ...'
  }
}
</script>

<style scoped>

</style>
