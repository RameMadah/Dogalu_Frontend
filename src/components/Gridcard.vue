<template>
  <section>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <sidenav></sidenav>
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
  </section>
</template>

<script>
import Sidenav from '@/components/Sidenav'
export default {
  name: 'Gridcard',
  components: { Sidenav },
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
