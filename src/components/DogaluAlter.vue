<template>
      <div class="rechner">
        <div class="content center">
          <h2 class="tex">Wie alt ist Ihr Hund in menschlichen Jahren?</h2>
          <div class="input-container">
            <input type="number" class="form-control" id="year" placeholder=" " v-model = "this.year">
            <br>
            <br>
          </div>
          <div class="calc-results">
            <br>
            <div class="num-result center">
              <div class="imgg">
                <img   src="@/assets/se.png" alt="Kleine Hunde">
              </div>
              <output class="num-totals tex" data-default="total-small-dog">{{ this.small }}</output>
              <h3 class="tex">Klein</h3>
            </div>
            <div class="num-result center">
              <div class="imgg">
                <img   src="@/assets/me.png" alt="Normale Hunde">
              </div>
              <output class="num-totals tex" data-default=" " >{{ this.medium }}</output>
              <h3 class="tex">Normal </h3>
            </div>
            <div class="num-result center">
              <div class="imgg">
                <img   src="@/assets/bb.png" alt="Größe Hunde">
              </div>
              <output class="num-totals tex" data-default="49">{{ this.big }}</output>
              <h3 class="tex1">Groß </h3>
            </div>
            <br>
            <br>
            <button class="btn btn-primary me-3" type="submit" @click="calc()">Berechnen</button>
            <button class="btn btn-primary me-3" type="submit" @click="clear()">Reset</button>
          </div>
          <br>
          <p class="disclaimer">*Bei der Erstellung dieses Rechners wurden keine Hunde verletzt.</p>
        </div>
      </div>
      <div class="space">
        </div>
</template>

<script>
export default {
  name: 'DogaluAlter',
  data () {
    return {

      small: ' ',
      medium: ' ',
      big: ' ',

      year: ' '
    }
  },
  methods: {
    calc () {
      this.small = (this.year * 4) + 20
      this.big = this.year * 9 + 4
      this.medium = this.year * 6 + 15
    },
    clear () {
      this.small = ''
      this.big = ''
      this.medium = ' '
    }
  }
}
</script>

<style scoped>
.space{
  height: 100px;
}
.form-control{
  position: relative;
  left: 320px;
  vertical-align: center;
  min-height: calc(1.5em + 0.75rem + 2px);
  width: 100px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  background-color: white;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
.center{
  visibility: visible;
  background-color: #ecf0f3;
}
img{
  height: 90px;
}
.rechner{
  position:relative;

}
.tex{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 700%;
}
.tex1{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 700%;
  size: 24px;
}
.disclaimer{
  color: #aeafb9;
  font-weight: 200;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 200%;
  size: 24px;
}

.btn-primary {
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
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%)/*, -4px -4px 6px white;*/
}
.btn-primary:hover{
  background-color: white;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
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
  font-size: 98px;
}
.offcanvas-body{
}

body {
  background: #f0f0f3;
  margin: 0;
  padding: 4em;
  font-family: 'Abel', sans-serif;
}
.offcanvas {
  visibility: visible;
  width: 100%;
  background-color: #ecf0f3;
}

.content {
  border-radius: 8px;
  background-color: #ecf0f3;
  font-family: "Roboto", sans-serif;
  padding: 20px;

  max-width: 800px;
  margin: auto;
  box-shadow: 0px 10px 10px  rgba(0, 0, 0, 0.07);
}
.center {
  text-align: center;
}

h2 {
  color: #03363d;
  font-size: 32px;
  line-height: 1.2;
}

.num-age {
  appearance: none;
  -webkit-appearance: none;
  border-radius: 12px;
  background-color: #fafafa;
  box-shadow: 0 14px 14px 0 rgba(23,23,23,0.07);
  border: solid 2px #f3f3f3;
  color: #03363d;
  font: 28px/1.16 Arial,sans-serif;
  outline: 0;
  margin: 10px 0;
  max-width: 200px;
  padding: 10px;
}

.num-result {
  display: inline-block;
  width: 32%;
  vertical-align: top;
}

.disclaimer {
  color: #03363d;
  font-size: 14px;
}
.image-dog {
  max-width: 100%;
  max-height: 100px;
}
</style>
