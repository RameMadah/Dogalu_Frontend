<template>
  <div class="container">
    <div class="row justify-content-start" v-for="lesson in lessons" :key="lesson.lid">
      <div class="col-4">
        {{ lesson.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidenav',

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
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8010/api/v1/lessons', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(lesson => {
        this.lessons.push(lesson)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
.container{
  width: 20%;
}
</style>
