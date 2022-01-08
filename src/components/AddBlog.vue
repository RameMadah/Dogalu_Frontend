<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
    Blog hinzufügen</button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel"><p class="bolgtitle">Blogalu ..</p></h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <form class="offcanvas-body">
      <div class="mb-3">
        <label for="title" class="form-label"><strong>Titel :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
        <input type="text" class="form-control" id="title"  v-model ="this.title">
      </div>
      <div class="mb-3">
        <label for="title" class="form-label"><strong>author :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
        <input type="text" class="form-control" id="author" v-model ="this.author" >  <br>
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>Text :</strong></label>
        <textarea class="form-control" id="description"   v-model = "this.description"  ></textarea>
      </div>
      <div class="mt-5">
        <button class="btn btn-danger me-3" id="create" type="submit" @click="createBlog()">hinzufügen</button>
        <button class="btn btn-danger  mmm" type="reset" @click="reset()">Reset</button>
        <div class="low">
          <sleepy-dog class ='sleepyy'></sleepy-dog>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import SleepyDog from '@/components/SleepyDog'
export default {
  name: 'AddBlog',
  components: { SleepyDog },
  data () {
    return {
      title: '',
      description: '',
      author: ''
    }
  },
  methods: {
    createBlog () {
      var myHead = new Headers()
      myHead.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        title: this.title,
        description: this.author,
        author: this.description
      })

      var requestOptions = {
        method: 'POST',
        headers: myHead,
        body: raw,
        redirect: 'follow'
      }
      const base = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/blogs'

      fetch(base, requestOptions)
        .catch(error => console.log('error', error))
    },
    reset () {
      this.title = ''
      this.author = ''
      this.description = ''
    }
  }
}
</script>

<style scoped>

.btn-check:focus+.btn-primary, .btn-primary:focus, .btn-primary:focus {
  color: black;
  background-color: whitesmoke!important;
  border-color: whitesmoke;
  box-shadow: 0px 10px 10px rgb(0 0 0 / 7%);
}
.btn-check:active+.btn-primary, .btn-check:checked+.btn-primary, .btn-primary.active, .btn-primary:active, .show>.btn-primary.dropdown-toggle {
  color: black;
  background-color: whitesmoke!important;
  border-color: whitesmoke;
  box-shadow: 0px 10px 10px rgb(0 0 0 / 7%);
}
button:focus:not(:focus-visible) {
  color: black;
  background-color: whitesmoke!important;
  border-color: whitesmoke;
  box-shadow: 0px 10px 10px rgb(0 0 0 / 7%);
}

.btn-primary:hover{
  color: black;
  background-color: white;
  box-shadow: 9px 9px 16px #2c3e50, -9px -9px 16px #1f7976;
  transition-duration: 0.4s;
  border-color:  #1f7976;
  border-radius: 8px;
  transform: scale(1.05)
}

.btn-check:active+.btn-primary, .btn-check:checked+.btn-primary, .btn-primary:active, .btn-primary:active {
  color:#1f7976;
  background-color: whitesmoke;
  border-color: #1f7976;}

.bolgtitle{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  position: absolute;
  left: 590px;
  bottom: 600px;
  font-size: 98px;
}
.low {
  position: absolute;
  bottom: 561px;
  left: 103px;
  size: 30px;
  height: 13.5vmax;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-left: 900px;
  width: 20%;
  z-index: 10;
}

.sleepyy{

}
body {
  background: #f0f0f3;
  margin: 0;
  padding: 4em;
  font-family: 'Abel', sans-serif;
}
#title {
  width: 22%;
  text-align: center;
  margin-bottom: 3em;
  letter-spacing: 5px;
  color: #444;
  font-size: 26px;
}
.circles {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.circles p, .circles h2 {
  text-align: center;
}
.circles .bg-color h2, .circles .box-shadow h2 {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: normal;
  color: #333;
}
.circles .bg-color p, .circles .box-shadow p {
  color: #666;
}
.flat {
  margin: auto;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background: #f0f0f3;
  box-shadow: -10px -10px 30px #fff, 10px 10px 30px #aeaec0/* 40*/;
}
.convex {
  margin: auto;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background: #f0f0f3;
  box-shadow: -10px -10px 30px #fff, 10px 10px 30px #aeaec0/* 40, inset -10px -10px 10px #aeaec0 25, inset 10px 10px 10px #fff*/;
}
.concave {
  margin: auto;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background: #f0f0f3;
  box-shadow: inset -10px -10px 10px #fff;
  margin: auto;
  height: 160px;
  /*width: 160px;
  border-radius: 50%;
  background: #f0f0f3;
  box-shadow: inset -10px -10px 10px #fff 70, inset 10px 10px 10px #aeaec0 20;*/
}
/* variables */
body {
  background: #e0e5ec;
  min-height: 100vh;
}
.wrapper {
  margin: 60px auto;
}
.neumorphism {
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
}
.card-w {
  display: flex;
  margin-bottom: 20px;
}
.card-w .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 30px;
  border-radius: 30px;
  position: relative;
  background: transparent;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.card-w .card .card__text {
  text-align: center;
}
/* inset */
.card.inset {
  box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #fff;
}
.card.inset i {
  text-shadow: 1px 1px 1px #d6e1ef/* 99, 0 0 0 #000, 1px 1px 1px #d6e1ef 0;*/
}
.card.active {
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #fff;
  background: linear-gradient(318.32deg, rgba(163, 177, 198, 0.1) 0%, rgba(163, 177, 198, 0.1) 55%, rgba(163, 177, 198, 0.25) 100%);
}

.me-3{
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.me-3:hover{
  color: black;
}

/*.btn-check:active+.btn-primary:focus, .btn-check:checked+.btn-primary:focus, .btn-primary.active:focus, .btn-primary:active:focus, .show>.btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgb(163 177 198 / 50%);
}*/

.mmm{
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
}
.mmm:hover{
  color: black;
}

.btn-primary {
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
  transition-duration: 0.4s;
  background-color: white ;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 9px 9px 16px #2c3e50, -9px -9px 16px #1f7976;
}
.btn-check:active+.btn-danger:focus, .btn-check:checked+.btn-danger:focus, .btn-danger.active:focus, .btn-danger:active:focus, .show>.btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgb(163 177 198 / 50%);
}

.btn-danger {
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
  transition-duration: 0.4s;
  background-color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%), -4px -4px 6px white;
}

.btn-danger:hover{
  background-color: white;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  transition-duration: 0.4s;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}
/*
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 30px;
color: #1f2022;
  position: relative;
  background: transparent;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}*/

.offcanvas {
  visibility: visible;
  width: 100%;
  background-color: #ecf0f3;
}

textarea.form-control {
  min-height: calc(20.5em + 0.75rem + 2px);
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

fieldset{
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  text-align: center;
}
input#author.form-control{
  width: 200px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  text-align: center;
}
input#title.form-control{

  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
label {
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 400% ;
  display: flex;
  float: left;
}

</style>
