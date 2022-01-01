<template>
  <div class="sp"></div>
  <div class="headui">
  <space></space>
    <div >
      <h1 class="text" > Lektionen </h1>
      <p class="texts">Hier können Sie an Lektionen teilnehmen,<br>
        um Ihrem Hund gutes Benehmen beizubringen, und Sie können auch Ihre einzigartige Unterrichtserfahrung weitergeben.</p>
    </div>
    <add-lesson></add-lesson>
  <space></space>
  </div>
  <gridcard :lessons="this.lessons"> </gridcard>
</template>

<script>
import Gridcard from '@/components/Gridcard'
import Space from '@/components/space'
import AddLesson from '@/components/AddLesson'
export default {
  name: 'Lessons',
  components: {
    AddLesson,
    Space,
    Gridcard
  },
  methods: {
    addLesson (lessonLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + lessonLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(person => this.persons.push(person))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/lessons'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(lesson => {
        this.lessons.push(lesson)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
.sp{
  margin: 10px 0px 0px 0px;
  height: 50px;
}
.text{
  color: whitesmoke;
  text-shadow: #1c3130 1px 1px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  position: relative;
  padding: 5px;
  background: rgb(34,193,195);
  background: linear-gradient(270deg, rgba(34,193,195,1) 0%, rgba(30,79,85,1) 100%);
  left: 0px;
  bottom: 0px;
  font-size: 68px;
  margin-right: auto;
  /*text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px black; */}

.texts{
  color: whitesmoke;
  text-shadow: #1c3130 1px 1px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 600% ;
  position: relative;
  padding: 5px;
  left: 0px;
  bottom: 0px;
  font-size: 18px;
  margin-right: auto;
}

.box{
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px #1c3130;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: black;
  size: 49px;
}
.headui{
  margin: 20px 0px 0px 0px;
  background: rgb(34,193,195);
  background: linear-gradient(270deg, rgba(34,193,195,1) 0%, rgba(30,79,85,1) 100%);
}
</style>
