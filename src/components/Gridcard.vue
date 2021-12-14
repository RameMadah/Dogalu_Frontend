<template>
  <section>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="sider"> <sidenav></sidenav></div>
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
  },
  getLesson (lesson) {
    if (lesson.description.length > 50) return lesson.description.substring(0, 50) + ' ...'
  }
}
</script>

<style scoped>
.row-cols-md-3>* {
  flex: 0 0 auto;
  width: 29.3333333333%;
  padding: 50px;
}
.card-img, .card-img-top {
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px white;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
div.sider{
width: 30px;
}
</style>
