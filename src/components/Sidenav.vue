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
.col-4 {
  flex: auto;
  width: 90.33333333%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px white;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
}
.container{
  width: 50%;
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px white;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
}
</style>
