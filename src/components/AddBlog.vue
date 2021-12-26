<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Blog</button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel"><p class="bolgtitle">Blogalu ...</p></h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">

      <div class="mb-3">
        <label for="title" class="form-label"><strong>Titel :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
        <input type="text" class="form-control" id="title"  placeholder=" "  v-model ="title">
      </div>
      <div class="mb-3">
        <label for="author" class="form-label"><strong>Author :&nbsp;&nbsp;</strong></label>
        <input type="text" class="form-control" id="author" placeholder=" " v-model ="author">
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>Text :</strong></label>
        <textarea class="form-control" id="description"  rows="3" v-model = "description" ></textarea>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click.prevent="createBlog()">hinzufügen</button>
        <button class="btn btn-danger  mmm" type="reset">Reset</button>
        <div class="low">
        <sleepy-dog class ='sleepy'></sleepy-dog>
        </div>
      </div>
    </div>
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
      author: '',
      description: ''
    }
  },
  methods: {
    createBlog () {
      console.log(this.title)
      console.log(this.author)
      console.log(this.description)
    }
  }
}
</script>

<style scoped>
  .low {
  position: absolute;
  bottom: 549px;
  left: -53px;
    size: 30px;
  width: 27.5vmax;
  height: 13.5vmax;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-left: 900px;
}

.sleepy{
  position: absolute;
}
body {
  background: #f0f0f3;
  margin: 0;
  padding: 4em;
  font-family: 'Abel', sans-serif;
}
#title {
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

.btn-check:active+.btn-primary:focus, .btn-check:checked+.btn-primary:focus, .btn-primary.active:focus, .btn-primary:active:focus, .show>.btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgb(163 177 198 / 50%);
}

.mmm{
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.btn-primary {
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 700%;
/*  color: #fff;*/
  background-color: #e4ecf4;
  border-color: rgba(163, 177, 198, 0.6);
}
.btn-check:active+.btn-danger:focus, .btn-check:checked+.btn-danger:focus, .btn-danger.active:focus, .btn-danger:active:focus, .show>.btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgb(163 177 198 / 50%);
}

.btn-danger {
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 700%;
/*  color: #fff;*/
  background-color:#e4ecf4;
  border-color: rgba(163, 177, 198, 0.6);
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

input#author.form-control{
  width: 200px;
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
input#title.form-control{
  width: 200px;
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
}
label {
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 400% ;
  display: flex;
  float: left;
}

.bolgtitle{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  position: absolute;
  left: 590px;
  bottom: 590px;
  font-size: 98px;
}
</style>
