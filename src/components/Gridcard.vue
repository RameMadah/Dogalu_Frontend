<template>
  <div class="avatar"><AvatarDog></AvatarDog></div>
  <div class="level"> <p class="xp">EXP : {{this.exp}}</p></div>
      <section>
        <div class="progress">
          <div class="progress-bar" id="prog" role="progressbar" style="{{getbar() }}" aria-valuenow="50" aria-valuemin="50" aria-valuemax="100"  aria-valuetext="50"></div>
        </div>
        <div class="row row-cols-3 row-cols-md-3 g-3">
            <div class="col"  v-for= " lesson in lessons" v-bind:key= "lesson.lid" >
              <div class="card h-100">
                <img :src="getAvatar(lesson)" class="card-img-top" alt="lesson.title">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ lesson.title }}</h5>
                  <p class="card-text" >{{lesson.description.substring(0,250) + '... Weiter lesen'}} </p>
                </div>
                <div class="btnprdiv">
                <button type="button" class="btn btnpr" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Lektion erhalten</button>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog ">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel" data-test="w">{{ lesson.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        {{ lesson.description }}
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Abbrechen</button>
                        <button type="button" class="btn btn-primary" @click="getexp(lesson.punkte)" data-bs-dismiss="modal">Akzeptieren</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted"> EP : {{lesson.punkte}} </small>
                </div>
              </div>
            </div>
         </div>
      </section>
</template>

<script>

import AvatarDog from '@/components/AvatarDog'

export default {
  name: 'Gridcard',
  props: {
    title: String
  },
  components: { AvatarDog },
  data () {
    return {
      lessons: [],
      exp: 0
    }
  },
  methods: {
    getexp (e) {
      this.exp += parseInt(e)
      return this.exp
    },
    getbar () {
      var bar
      bar.value = toString(this.exp) + '%'
      return bar
    },
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
.avatar{
  z-index: 7;
  position: relative;
  left: 20%;
  bottom: 109px;
  width: 10%;
}
.progress{
  color: #1f7976;
  z-index: 6;
}

.xp{
  position: absolute;
  bottom: -25px;
  padding: -30px 10px;
}
.level{
  /*font-family:impact;*/
  font-size:50px;
  font-style:italic;
  text-shadow:#FFFFFF 3px 3px 0px, #FFFFFF 3px -3px 0px, #FFFFFF -3px -3px 0px, #FFFFFF -3px 3px 0px, #FFFFFF 3px 2px 0px, #FFFFFF 3px -2px 0px, #FFFFFF -3px -2px 0px, #FFFFFF -3px 2px 0px, #FFFFFF 3px 1px 0px, #FFFFFF 3px -1px 0px, #FFFFFF -3px -1px 0px, #FFFFFF -3px 1px 0px, #FFFFFF 3px 0 0px, #FFFFFF 3px 0 0px, #FFFFFF -3px 0 0px, #FFFFFF -3px 0 0px, #FFFFFF 2px 3px 0px, #FFFFFF 2px -3px 0px, #FFFFFF -2px -3px 0px, #FFFFFF -2px 3px 0px, #FFFFFF 2px 2px 0px, #FFFFFF 2px -2px 0px, #FFFFFF -2px -2px 0px, #FFFFFF -2px 2px 0px, #FFFFFF 2px 1px 0px, #FFFFFF 2px -1px 0px, #FFFFFF -2px -1px 0px, #FFFFFF -2px 1px 0px, #FFFFFF 2px 0 0px, #FFFFFF 2px 0 0px, #FFFFFF -2px 0 0px, #FFFFFF -2px 0 0px, #FFFFFF 1px 3px 0px, #FFFFFF 1px -3px 0px, #FFFFFF -1px -3px 0px, #FFFFFF -1px 3px 0px, #FFFFFF 1px 2px 0px, #FFFFFF 1px -2px 0px, #FFFFFF -1px -2px 0px, #FFFFFF -1px 2px 0px, #FFFFFF 1px 1px 0px, #FFFFFF 1px -1px 0px, #FFFFFF -1px -1px 0px, #FFFFFF -1px 1px 0px, #FFFFFF 1px 0 0px, #FFFFFF 1px 0 0px, #FFFFFF -1px 0 0px, #FFFFFF -1px 0 0px, #FFFFFF 0 3px 0px, #FFFFFF 0 -3px 0px, #FFFFFF 0 -3px 0px, #FFFFFF 0 3px 0px, #FFFFFF 0 2px 0px, #FFFFFF 0 -2px 0px, #FFFFFF 0 -2px 0px, #FFFFFF 0 2px 0px, #FFFFFF 0 1px 0px, #FFFFFF 0 -1px 0px, #FFFFFF 0 -1px 0px, #FFFFFF 0 1px 0px, #FFFFFF 0 0 0px, #FFFFFF 0 0 0px, #FFFFFF 0 0 0px, #FFFFFF 0 0 0px, #FFFFFF 0 0 0px, #717171 3px 3px 7px;
  height: 60px;
  align-content: center;
  position: relative;
  align-self: center;
  align-items: center;
  display: block;
  bottom:390px;
  left: 60px;
  width: 50%;
  z-index: 4;
  border-radius: 10px;
  background-color: #ecf0f3;
  font-family: "Roboto", sans-serif;
  padding: 20px 20px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0px 10px 10px rgb(0 0 0 / 7%);
}

.btnpr{
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
  transition-duration: 0.4s;
  background-color: white ;
  border: transparent ;
  border-radius: 10px;
  box-shadow: 9px 9px 16px gray, -9px -9px 16px white;
}
.btnpr:hover{
  color: black;
  background-color: white;
  box-shadow: 9px 9px 16px gray, -9px -9px 16px white;
  transition-duration: 0.4s;
  border-color:  #1f7976;
  border-radius: 8px;
  transform: scale(1.05)
}
.g-3{
  --bs-gutter-y: -5rem;
}
.g-3{
  --bs-gutter-x: 0rem;
  margin: 0px 0px 0px 140px;
}
.row-cols-md-3>* {
  flex: 0 0 auto;
  width: 29.3333333333%;
  padding: 50px;
}
.card-img, .card-img-top {
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 10%), -4px -1px 15px darkslategrey;
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
.card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0,0,0,0);
  border-top: 0px solid rgba(0,0,0,.125);
}
div.sider{
width: 0px;
}
</style>
