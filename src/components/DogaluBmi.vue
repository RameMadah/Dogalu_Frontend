<template>
  <body class="all">
  <div>
    <fieldset>
    </fieldset>
  </div>
  <form class="content">
      <div id="height1" class="question">
        <p class="maini"> Hunde Gesundheits Rechner </p>
        <p> Geben Sie den Körpergröße in cm ein: </p>
        <input class="questionr" type="number" id="height" v-model = "this.h">
      </div>
      <br>

      <div id="weight1" class="question">
        <p> Geben Sie den Gewichtswert in kg an:</p>
        <input class="questionr" type="number" id="weight" v-model="this.w">
      </div>
      <br>
      <div id="buttons">
        <div>
        <button class="calculate me-3" type="button" @click="calculatebmi();"> Calculate </button>
        <button class="calculate me-3" type="reset" value="Reset" @click="clearBox();">Reset</button>
        </div>
        <br>
        <p class="question">  Dogalu Diagnostik  : </p>
        <output class="num-totals tex" data-default=" "> <p class="answer1"> {{ this.answer }}</p></output>
        <br>
        <output class="num-totals tex" data-default=" "><p class="answer1">{{ this.bmi }}</p></output>
      </div>
  </form>
  <br>
  </body>
  <div class="space">
  </div>
</template>

<script>
export default {
  name: 'DogaluBmi',
  data () {
    return {
      bmi: '',
      answer: '',
      h: '',
      w: '',
      t: ''
    }
  },
  methods: {
    calculatebmi () {
      this.bmi = (this.w / 0.45) / (this.h / 2.54)
      var num = Number(this.bmi)
      var roundedString = num.toFixed(2)
      this.bmi = Number(roundedString)
      this.t = this.bmi
      if (this.bmi < 5) {
        this.answer = 'Ihr Hund ist untergewichtig '
      } if (this.bmi > 10 && this.bmi < 15) {
        this.answer = ' Ihr Hund ist gesund '
      } if (this.bmi > 15 && this.bmi < 30) {
        this.answer = 'Ihr Hund ist Übergewicht '
      } if (this.bmi > 30) {
        this.answer = ' Ihr Hund ist  furchtbar '
      }
    },
    clearBox () {
      this.bmi = ' '
      this.answer = ''
      this.w = ''
      this.h = ''
      this.t = ''
    }
  }
}
</script>

<style scoped>
.me-3{
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

.space{
  height: 100px;
  background-color: white;
}

.maini{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  font-size: 28px;
}
.question{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  font-size: 18px;
}
.questionr{
  position: relative;
  left: 0px;
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
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
h1 {
  font-family: Palatino Linotype;
  text-align: center;
}
.all{
  width: 100%;
  background-image: linear-gradient( #F5F7F8 , white);
}

form,
.answer {
  text-align: center;
}
.answer1{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  font-size: 28px;
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
.calculate:hover {
  background-color: white;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.me-3:hover{
  background-color: white;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.calculate {
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

.reset {
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 700%;
  /*  color: #fff;*/
  background-color: #e4ecf4;
  border-color: rgba(163, 177, 198, 0.6);
  border-radius: 10px;
}

.reset:hover {
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  transition-duration: 0.4s;
  border-color: rgba(163, 177, 198, 0.6);
  color: black;
  border-radius: 10px;
}
.mmm{
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
}
</style>
