<template >
  <img  class ='cover ' src="@/assets/Unbenannt.png">
  <main>
    <section class="results-header">
      <h1 class ="TEXTO"> Möchtest du dein Haustier etwas beibringen? Und das ist mit Spaß ? Dann wir empfehlen dir unsere kleinen Tipps anzuschauen, damit dein Haustier durch Zwinkern versteht.

      </h1>
      <div class="results-header__option">
        <div class="option__button option--grid selected"><span></span><span></span><span></span><span></span><span>Grid</span></div>
        <div class="option__button option--list"><span></span><span></span><span></span><span>List</span></div>
      </div>
    </section>
    <div class="filter-section__wrapper">
      <section class="filter-section">
        <h6></h6>
        <div class="filters">
          <h5 class="filters__title"> Unterrichtsart </h5>
          <div class="filters__item">
            <div class="checkbox"><input id="checkbox-1" type="checkbox" /><label for="checkbox-1"> grundlegende Lektionen <span class="box"></span>
              <div class="tooltip top" data-tooltip="Younger than 18 months."><span><i class="icon-info"></i></span></div>
            </label></div><span class="badge status-primary">3</span>
          </div>
          <div class="filters__item">
            <div class="checkbox"><input id="checkbox-2" type="checkbox" checked="checked" /><label for="checkbox-2">Intellektuell<span class="box"></span></label></div><span class="badge status-primary">1</span>
          </div>
        </div>
        <div class="filters">
          <h5 class="filters__title"> Alle Lektionen </h5>
          <div class="filters__item">
            <div class="checkbox"><input id="checkbox-5" type="checkbox" /><label for="checkbox-5">Bring den Ball<span class="box"></span></label></div><span class="badge status-primary">9</span>
          </div>
          <div class="filters__item">
            <div class="checkbox"><input id="checkbox-6" type="checkbox" checked="checked" /><label for="checkbox-6">Zusammen singen<span class="box"></span></label></div><span class="badge status-primary">1</span>
          </div>
          <div class="filters__item">
            <div class="checkbox"><input id="checkbox-7" type="checkbox" /><label for="checkbox-7">Fötchen<span class="box"></span></label></div><span class="badge status-primary">1</span>
          </div>
          <div class="filters__item">
            <div class="checkbox"><input id="checkbox-8" type="checkbox" /><label for="checkbox-8">Setzen<span class="box"></span></label></div><span class="badge status-primary">3</span>
          </div>
        </div>
      </section>
    </div>
    <section class="results-section results--grid">
      <div class="profile">
        <div class="profile__image"><img src="@/assets/Balu.png" alt="Doggo" /></div>
        <div class="profile__info">
          <h3 class="TEXTOH3">Bring den Ball</h3>
          <p class="profile__info__extra">A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.</p>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Type</p>
          <h5 class="profile__stats__info">Puppy</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Size</p>
          <h5>Medium</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Weight</p>
          <h5 class="profile__stats__info">45 lbs</h5>
        </div>
        <div class="profile__cta"><a class="button">Tip erhalten</a></div>
      </div>
      <div class="profile">
        <div class="profile__image"><img src="https://im0-tub-ru.yandex.net/i?id=709a2b73ca115acdd9613cc28f397ccc-l&ref=rim&n=13&w=1080&h=1350" alt="Doggo" /></div>
        <div class="profile__info">
          <h3 class = 'TEXTOH3' >Fötchen!</h3>
          <p class="profile__info__extra">A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.</p>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Type</p>
          <h5 class="profile__stats__info">Puppy</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Size</p>
          <h5>Medium</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Weight</p>
          <h5 class="profile__stats__info">45 lbs</h5>
        </div>
        <div class="profile__cta"><a class="button">Tip erhalten </a></div>
      </div>
      <div class="profile">
        <div class="profile__image"><img src="https://pbs.twimg.com/media/E4pptxWUYAQcF8h.png" alt="Doggo" /></div>
        <div class="profile__info">
          <h3 class="TEXTOH3" >Einfach setzen</h3>
          <p class="profile__info__extra">A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.</p>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Type</p>
          <h5 class="profile__stats__info">Puppy</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Size</p>
          <h5>Medium</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Weight</p>
          <h5 class="profile__stats__info">45 lbs</h5>
        </div>
        <div class="profile__cta"><a class="button">Tip erhalten</a></div>
      </div>
      <div class="profile">
        <div class="profile__image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png" alt="Doggo" /></div>
        <div class="profile__info">
          <h3 class="TEXTOH3">Hinlegen</h3>
          <p class="profile__info__extra">A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.</p>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Type</p>
          <h5 class="profile__stats__info">Puppy</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Size</p>
          <h5>Medium</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Weight</p>
          <h5 class="profile__stats__info">45 lbs</h5>
        </div>
        <div class="profile__cta"><a class="button">Tip erhalten</a></div>
      </div>
      <div class="profile">
        <div class="profile__image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png" alt="Doggo" /></div>
        <div class="profile__info">
          <h3>Doggo Dogg</h3>
          <p class="profile__info__extra">A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.</p>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Type</p>
          <h5 class="profile__stats__info">Puppy</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Size</p>
          <h5>Medium</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Weight</p>
          <h5 class="profile__stats__info">45 lbs</h5>
        </div>
        <div class="profile__cta"><a class="button">Tip erhalten</a></div>
      </div>
      <div class="profile">
        <div class="profile__image"><img src="https://petfriendsmagazine.files.wordpress.com/2018/08/dog.jpg" alt="Doggo" /></div>
        <div class="profile__info">
          <h3>Doggo Dogg</h3>
          <p class="profile__info__extra">A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.</p>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Type</p>
          <h5 class="profile__stats__info">Puppy</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Size</p>
          <h5>Medium</h5>
        </div>
        <div class="profile__stats">
          <p class="profile__stats__title">Weight</p>
          <h5 class="profile__stats__info">45 lbs</h5>
        </div>
        <div class="profile__cta"><a class="button">Tip erhalten</a></div>
      </div>
    </section>
  </main>
  <img  class ='focover ' src="  https://embarkvet.com/wp-content/uploads/2018/09/embark-dognames-1.jpg">
  <FooterBubbles></FooterBubbles>
</template>

<script>
import FooterBubbles from '@/components/FooterBubbles'
export default {
  name: 'Lessoncon',
  components: { FooterBubbles }
}
</script>

<style scoped>

.cover {/*
  vertical-align: bottom;
  background-position: -100px -100px;
  display: revert;
  display: grid;
  width: 60%;
  margin: 19px;
  height: 430px;*/
  vertical-align: middle;
  background-position: -100px -100px;
  display: flex;
  width: 100%;
  height: 530px;
}
.focover {
  vertical-align: middle;
  background-position: -100px -100px;
  display: flex;
  width: 100%;
  height: 530px;
}
:root {
  --canvasColor: #f9f9f9;
}

.TEXTOH3{
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  font-size: 24px ;
  color: black;
  font-weight: 600;
}
.TEXTO{
margin-right: auto;
font-family: "Roboto", sans-serif;
  font-size: 24px ;
align-content: center;
color: black;
font-weight: 400;
/*text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px white;*/
}
body {
  background: var(--canvasColor);
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 1.5;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

* {
  box-sizing: border-box;
}

main {
  --canvasColor: #f9f9f9;
  --backgroundColor: #fff;
  --foregroundColor: #111;
  --primaryColor: #ff9557;
  --primaryShade1: #ffe2d1;
  --primaryShade2: #ffceb2;
  --primaryShade3: #ffb184;
  --primaryShade4: #e88850;
  --primaryShade5: #d17a48;
  --secondaryColor: #ffcc67;
  --secondaryShade1: #fff1d5;
  --secondaryShade2: #ffde9e;
  --secondaryShade3: #ffd074;
  --secondaryShade4: #e8ba5e;
  --secondaryShade5: #ba954b;
  --accentColor: #4e5166;
  --accentShade1: #cecfd5;
  --accentShade2: #aeafb9;
  --accentShade3: #8e909d;
  --accentShade4: #6e7081;
  --accentShade5: #404354;
  --accent2Color: #588b8b;
  --accent2Shade1: #c2d4d4;
  --accent2Shade2: #a3bfbf;
  --accent2Shade3: #85aaaa;
  --accent2Shade4: #507f7f;
  --accent2Shade5: #497272;
  --accent3Color: #fe5f55;
  --accent3Shade1: #fec4c1;
  --accent3Shade2: #fea7a2;
  --accent3Shade3: #fe7c73;
  --accent3Shade4: #e7574e;
  --accent3Shade5: #b9463e;
}

/*overall layout*/
main {
  width: 90%;
  margin: 3em auto 0;
  max-width: 1500px;
  color: var(--foregroundColor);
  text-align: left;
}
+ label {
  background: linear-gradient(to right, #ff9557 50%, #ffcc67 50%);
}
:checked ~ main {
   --canvasColor: #f9f9f9;
   --backgroundColor: #fff;
   --foregroundColor: #111;
   --primaryColor: #ff9557;
   --primaryShade1: #ffe2d1;
   --primaryShade2: #ffceb2;
   --primaryShade3: #ffb184;
   --primaryShade4: #e88850;
   --primaryShade5: #d17a48;
   --secondaryColor: #ffcc67;
   --secondaryShade1: #fff1d5;
   --secondaryShade2: #ffde9e;
   --secondaryShade3: #ffd074;
   --secondaryShade4: #e8ba5e;
   --secondaryShade5: #ba954b;
   --accentColor: #4e5166;
   --accentShade1: #cecfd5;
   --accentShade2: #aeafb9;
   --accentShade3: #8e909d;
   --accentShade4: #6e7081;
   --accentShade5: #404354;
   --accent2Color: #588b8b;
   --accent2Shade1: #c2d4d4;
   --accent2Shade2: #a3bfbf;
   --accent2Shade3: #85aaaa;
   --accent2Shade4: #507f7f;
   --accent2Shade5: #497272;
   --accent3Color: #fe5f55;
   --accent3Shade1: #fec4c1;
   --accent3Shade2: #fea7a2;
   --accent3Shade3: #fe7c73;
   --accent3Shade4: #e7574e;
   --accent3Shade5: #b9463e;
 }

main section {
  position: relative;
}

/*typography*/
strong {
  font-weight: 500;
}

em {
  font-style: italic;
}

h1 {
  font: 700 48px/1.2 "Poppins", sans-serif;
  margin-bottom: 10px;
}

h2 {
  font: 700 32px/1.2 "Poppins", sans-serif;
  margin-bottom: 10px;
}

h3 {
  font: 700 24px/1.2 "Poppins", sans-serif;
  margin-bottom: 10px;
}

h4 {
  font: 700 20px/1.2 "Poppins", sans-serif;
  margin-bottom: 10px;
}

h5 {
  font: 500 18px/1.2 "Poppins", sans-serif;
  margin-bottom: 10px;
}

h6 {
  font: 500 16px/1.2 "Poppins", sans-serif;
  text-transform: uppercase;
}

/*checkboxes*/
input:disabled ~ * {
  opacity: 0.3;
  user-select: none;
  pointer-events: none;
}

.checkbox {
  position: relative;
  user-select: none;
  margin-bottom: 10px;
}

.checkbox input {
  display: none;
}

.checkbox label {
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  font-weight: 500;
  padding-left: 35px;
}

.checkbox span.box:before, .checkbox span.box:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 16px;
  border-radius: 40px;
  background: var(--accent3Shade4);
  transition: all 0.3s ease;
}

.checkbox span.box:before {
  transform: rotate(45deg) translateY(-5px) translateX(10px) scale(0);
}

.checkbox span.box:after {
  height: 8px;
  transform: rotate(-45deg) translateY(10px) translateX(-4px) scale(0);
}

.checkbox input:checked + label span.box {
  background: var(--accent3Shade2);
  border-color: var(--accent2Color);
}

.checkbox input:checked + label span.box:before {
  transform: rotate(45deg) translateY(-5px) translateX(10px) scale(1);
}

.checkbox input:checked + label span.box:after {
  height: 8px;
  transform: rotate(-45deg) translateY(10px) translateX(-4px) scale(1);
}

.checkbox input:disabled:checked + span.box {
  background: var(--accent3Shade3);
  border: var(--secondaryColor);
}

.checkbox input:disabled:checked ~ label:before, .checkbox input:disabled:checked ~ label:after {
  background: var(--accent3Shade3);
}

/*buttons & links*/
.button {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--accent3Shade3);
  border-radius: 10px;
}

.buttons > * {
  flex: 1 1 calc(50% - 20px);
  margin-top: 20px;
}

.buttons > *:nth-child(odd) {
  margin-right: 20px;
}
/*here is the buttons options */
a.button,
input.button,
button {
  font-weight: 500;
  border-radius: 10px;
  outline: none;
  width: 100%;
  text-align: center;
  display: inline-block;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-decoration: none;
  padding: 20px;
  cursor: pointer;
  background: var(--primaryColor);
  color: -- var(--accent3Shade3);
  position: relative;
  top: 0;
  transition: 0.2s ease;
}

a.button:hover, a.button.hover,
input.button:hover,
input.button.hover,
button:hover,
button.hover {
  top: -3px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

a.button:active, a.button.active,
input.button:active,
input.button.active,
button:active,
button.active {
  background: var(--secondaryShade2);
  outline: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  top: 0;
  border-radius: 10px;
}

a.button.disabled,
input.button.disabled,
button.disabled {
  opacity: 0.4;
  user-select: none;
  pointer-events: none;
  border-radius: 10px;
}

a.button.medium,
input.button.medium,
button.medium {
  padding: 15px 18px;
  width: auto;
  border-radius: 10px;
}

a.button.small,
input.button.small,
button.small {
  padding: 10px 12px;
  border-radius: 10px;
  width: auto;
  font-size: 14px;
  font-weight: 500;
}

a.button.secondary,
input.button.secondary,
button.secondary {
  background: var(--secondaryColor);
}

a.button.secondary:active, a.button.secondary:focus, a.button.secondary.active,
input.button.secondary:active,
input.button.secondary:focus,
input.button.secondary.active,
button.secondary:active,
button.secondary:focus,
button.secondary.active {
  background: var(--secondaryShade4);
  outline: none;
}

a.button.accent,
input.button.accent,
button.accent {
  background: var(--accentColor);
}

a.button.accent:active, a.button.accent:focus, a.button.accent.active,
input.button.accent:active,
input.button.accent:focus,
input.button.accent.active,
button.accent:active,
button.accent:focus,
button.accent.active {
  background: var(--accentShade4);
}

a.button.accent2,
input.button.accent2,
button.accent2 {
  background: var(--accent2Color);
}

a.button.accent2:active, a.button.accent2:focus, a.button.accent2.active,
input.button.accent2:active,
input.button.accent2:focus,
input.button.accent2.active,
button.accent2:active,
button.accent2:focus,
button.accent2.active {
  background: var(--accent2Shade4);
}

a.button.accent3,
input.button.accent3,
button.accent3 {
  background: var(--accent3Color);
}

a.button.accent3:active, a.button.accent3:focus, a.button.accent3.active,
input.button.accent3:active,
input.button.accent3:focus,
input.button.accent3.active,
button.accent3:active,
button.accent3:focus,
button.accent3.active {
  background: var(--accent3Shade4);
}

/*badges*/
.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 50px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
}

.alert {
  margin-bottom: 15px;
  display: block;
  padding: 10px 15px;
  border-radius: var(--accent3Shade4);
  font-weight: 500;
  position: relative;
  cursor: pointer;
}

.alert.non-collapsible:before, .alert.non-collapsible:after {
  content: none;
}

.alert:before, .alert:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 16px;
  border-radius: 40px;
  right: 30px;
  top: 8px;
}

.alert:before {
  transform: rotate(45deg) translateY(-5.5px) translateX(13.5px);
}

.alert:after {
  transform: rotate(-45deg) translateY(13.5px) translateX(5.5px);
}

.status-primary {
  background: var(--primaryShade1);
  color: var(--primaryShade5);
}

.status-primary:before, .status-primary:after {
  background: var(--primaryShade5);
}

/*tooltips*/
.tooltip {
  cursor: pointer;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  z-index: 10;
}

.tooltip span {
  border-bottom: 1px dotted;
}

.tooltip:after {
  content: attr(data-tooltip);
  background: var(--accent3Shade4);
  max-width: 90%;
  width: auto;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0;
  height: auto;
  font-size: 14px;
  padding: 10px;
  border-radius: var(--accent3Shade4);
  color: var(--foregroundColor);
  text-align: center;
}

.tooltip.dark:after {
  background: var(--accent3Shade4);
  color: var(--backgroundColor);
}

.tooltip.top:after {
  bottom: 80%;
  transition: opacity 0.3s ease 0.3s, bottom 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
}

.tooltip.top:hover:after, .tooltip.top.hovered:after {
  bottom: 130%;
  opacity: 1;
}

.tooltip.bottom:after {
  top: 80%;
  transition: opacity 0.3s ease 0.3s, top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
}

.tooltip.bottom:hover:after, .tooltip.bottom.hovered:after {
  top: 130%;
  opacity: 1;
}

/*variations*/
input.variation {
  display: none;
}

input.variation + label {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 30px 20px 0;
  border-radius: 50%;
  cursor: pointer;
  border: 6px solid #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
}

#bluepurple + label {
  background: linear-gradient(to left, #673ab7 50%, #03a9f4 50%);
}

#bluepurple:checked ~ main {
  --backgroundColor: #fff;
  --foregroundColor: #111;
  --primaryColor: #03a9f4;
  --primaryShade1: #e1f5fe;
  --primaryShade2: #b3e5fc;
  --primaryShade3: #4fc3f7;
  --primaryShade4: #0288d1;
  --primaryShade5: #0277bd;
  --secondaryColor: #673ab7;
  --secondaryShade1: #ede7f6;
  --secondaryShade2: #d1c4e9;
  --secondaryShade3: #9575cd;
  --secondaryShade4: #512da8;
  --secondaryShade5: #311b92;
  --accentColor: #009688;
  --accentShade1: #e0f2f1;
  --accentShade2: #b2dfdb;
  --accentShade3: #4db6ac;
  --accentShade4: #00796b;
  --accentShade5: #004d40;
  --accent2Color: #8bc34a;
  --accent2Shade1: #e7f6d5;
  --accent2Shade2: #c5e1a5;
  --accent2Shade3: #aed581;
  --accent2Shade4: #689f38;
  --accent2Shade5: #558b2f;
  --accent3Color: #f44336;
  --accent3Shade1: #ffdde0;
  --accent3Shade2: #ffcdd2;
  --accent3Shade3: #ef9a9a;
  --accent3Shade4: #d32f2f;
  --accent3Shade5: #b71c1c;
}

#sunset + label {
  background: linear-gradient(to right, #ff9557 50%, #ffcc67 50%);
}

#sunset:checked ~ main {
  --canvasColor: #f9f9f9;
  --backgroundColor: #fff;
  --foregroundColor: #111;
  --primaryColor: #ff9557;
  --primaryShade1: #ffe2d1;
  --primaryShade2: #ffceb2;
  --primaryShade3: #ffb184;
  --primaryShade4: #e88850;
  --primaryShade5: #d17a48;
  --secondaryColor: #ffcc67;
  --secondaryShade1: #fff1d5;
  --secondaryShade2: #ffde9e;
  --secondaryShade3: #ffd074;
  --secondaryShade4: #e8ba5e;
  --secondaryShade5: #ba954b;
  --accentColor: #4e5166;
  --accentShade1: #cecfd5;
  --accentShade2: #aeafb9;
  --accentShade3: #8e909d;
  --accentShade4: #6e7081;
  --accentShade5: #404354;
  --accent2Color: #588b8b;
  --accent2Shade1: #c2d4d4;
  --accent2Shade2: #a3bfbf;
  --accent2Shade3: #85aaaa;
  --accent2Shade4: #507f7f;
  --accent2Shade5: #497272;
  --accent3Color: #fe5f55;
  --accent3Shade1: #fec4c1;
  --accent3Shade2: #fea7a2;
  --accent3Shade3: #fe7c73;
  --accent3Shade4: #e7574e;
  --accent3Shade5: #b9463e;
}

#godiva + label {
  background: linear-gradient(to right, #a05793 50%, #a3d858 50%);
}

#godiva:checked ~ main {
  --canvasColor: #f9f9f9;
  --backgroundColor: #fff;
  --foregroundColor: #111;
  --primaryColor: #a05793;
  --primaryShade1: #e5d1e1;
  --primaryShade2: #d3b2cd;
  --primaryShade3: #b984b0;
  --primaryShade4: #925086;
  --primaryShade5: #834879;
  --secondaryColor: #a3d858;
  --secondaryShade1: #e5f4d1;
  --secondaryShade2: #cce9a3;
  --secondaryShade3: #bce285;
  --secondaryShade4: #95c550;
  --secondaryShade5: #779e41;
  --accentColor: #245e71;
  --accentShade1: #d7e1e5;
  --accentShade2: #afc4cb;
  --accentShade3: #7398a4;
  --accentShade4: #4b7b8a;
  --accentShade5: #1e4d5d;
  --accent2Color: #2aa5a1;
  --accent2Shade1: #d8eeed;
  --accent2Shade2: #9ed6d4;
  --accent2Shade3: #64bdba;
  --accent2Shade4: #279693;
  --accent2Shade5: #1f7976;
  --accent3Color: #92374d;
  --accent3Shade1: #ebdad3;
  --accent3Shade2: #cda4ae;
  --accent3Shade3: #af6d7d;
  --accent3Shade4: #853246;
  --accent3Shade5: #6b2939;
}

#dark + label {
  background: linear-gradient(to right, #367bc3 50%, #38bfa7 50%);
}

.profile__stats__title[data-v-41686c4a] {
  color: #8e909d ;
  text-transform: uppercase;
  font-size: 16px;
}

#dark:checked ~ main {
  --canvasColor: #2a313b;
  --backgroundColor: #2a313b;
  --foregroundColor: #ebe8d8;
  --primaryColor: #367bc3;
  --primaryShade5: #b5cfe9;
  --primaryShade4: #91b7de;
  --primaryShade3: #5a93cd;
  --primaryShade2: #3270b2;
  --primaryShade1: #285a8e;
  --secondaryColor: #38bfa7;
  --secondaryShade5: #c8ede7;
  --secondaryShade4: #92dccf;
  --secondaryShade3: #6ed0be;
  --secondaryShade2: #33ae98;
  --secondaryShade1: #2e9d89;
  --accentColor: #586994;
  --accentShade5: #d1d6e1;
  --accentShade4: #a3adc4;
  --accentShade3: #7684a7;
  --accentShade2: #49567a;
  --accentShade1: #39435f;
  --accent2Color: #8fe1a2;
  --accent2Shade5: #d6f4dd;
  --accent2Shade4: #c1eecc;
  --accent2Shade3: #a3e6b2;
  --accent2Shade2: #82cd94;
  --accent2Shade1: #76b985;
  --accent3Color: #fe938c;
  --accent3Shade5: #fee1df;
  --accent3Shade4: #fec4c0;
  --accent3Shade3: #fea6a0;
  --accent3Shade2: #e78680;
  --accent3Shade1: #b96b66;
  color: #f1f2eb;
  border-color: #f1f2eb;
}

#dark:checked ~ main > section {
  border-color: #f1f2eb;
}

#dark:checked ~ main > section > h6 {
  color: #f1f2eb;
}

#pinkaru + label {
  background: linear-gradient(to right, #f95794 50%, #323da5 50%);
}

#pinkaru:checked ~ main {
  border-color: #fff;
  --canvasColor: #2a313b;
  --backgroundColor: #2a313b;
  --foregroundColor: #e3f2fd;
  --primaryColor: #f95794;
  --primaryShade5: #fdd1e1;
  --primaryShade4: #fba3c4;
  --primaryShade3: #fa75a7;
  --primaryShade2: #e35087;
  --primaryShade1: #b6406c;
  --secondaryColor: #323da5;
  --secondaryShade5: #c7cae6;
  --secondaryShade4: #8f95cd;
  --secondaryShade3: #6971bd;
  --secondaryShade2: #2e3896;
  --secondaryShade1: #293288;
  --accentColor: #ffc729;
  --accentShade5: #ffefc4;
  --accentShade4: #ffe08a;
  --accentShade3: #ffd14f;
  --accentShade2: #e8b526;
  --accentShade1: #d1a322;
  --accent2Color: #53dd6c;
  --accent2Shade5: #d0f5d6;
  --accent2Shade4: #a1ecae;
  --accent2Shade3: #72e386;
  --accent2Shade2: #4cc963;
  --accent2Shade1: #3da14f;
  --accent3Color: #f52f57;
  --accent3Shade5: #fcc6d1;
  --accent3Shade4: #f98da3;
  --accent3Shade3: #f65475;
  --accent3Shade2: #df2b50;
  --accent3Shade1: #b32340;
}

#pinkaru:checked ~ main > section {
  border-color: #fff;
}

#pinkaru:checked ~ main > section > h6 {
  color: #fff;
}

#dark:checked ~ main h6.subheader,
#dark:checked ~ main .feedback-form,
#pinkaru:checked ~ main h6.subheader,
#pinkaru:checked ~ main .feedback-form {
  color: var( --primaryShade3 );
}

#dark:checked ~ main ::placeholder,
#pinkaru:checked ~ main ::placeholder {
  color: var(--primaryShade3);
  opacity: 1;
}

#dark:checked ~ main :-ms-input-placeholder,
#pinkaru:checked ~ main :-ms-input-placeholder {
  color: var(--primaryShade3);
}

#dark:checked ~ main ::-ms-input-placeholder,
#pinkaru:checked ~ main ::-ms-input-placeholder {
  color: var(--primaryShade3);
}

#dark:checked ~ main .tooltip:after,
#pinkaru:checked ~ main .tooltip:after {
  color: var(--accent3Shade5);
}

#dark:checked ~ main a.button,
#dark:checked ~ main input.button,
#dark:checked ~ main button,
#dark:checked ~ main .tooltip.dark:after,
#pinkaru:checked ~ main a.button,
#pinkaru:checked ~ main input.button,
#pinkaru:checked ~ main button,
#pinkaru:checked ~ main .tooltip.dark:after {
  color: var(--accent3Shade3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

#dark:checked ~ main .button:active,
#dark:checked ~ main .button.active,
#pinkaru:checked ~ main .button:active,
#pinkaru:checked ~ main .button.active {
  background: var(--primaryColor);
}

#dark:checked ~ main .button.secondary:active,
#dark:checked ~ main .button.secondary.active,
#pinkaru:checked ~ main .button.secondary:active,
#pinkaru:checked ~ main .button.secondary.active {
  background: var(--secondaryShade1);
}

#dark:checked ~ main .button.accent,
#pinkaru:checked ~ main .button.accent {
  background: var(--accentShade2);
}

#dark:checked ~ main .button.accent:active,
#pinkaru:checked ~ main .button.accent:active {
  background: var(--accentShade1);
}

#dark:checked ~ main .button.accent2,
#pinkaru:checked ~ main .button.accent2 {
  background: var(--accent2Shade2);
}

#dark:checked ~ main .button.accent2:active,
#pinkaru:checked ~ main .button.accent2:active {
  background: var(--accent2Shade1);
}

#dark:checked ~ main .button.accent3,
#pinkaru:checked ~ main .button.accent3 {
  background: var(--accent3Shade2);
}

#dark:checked ~ main .button.accent3:active,
#pinkaru:checked ~ main .button.accent3:active {
  background: var(--accent3Shade1);
}

#dark:checked ~ main a.link,
#pinkaru:checked ~ main a.link {
  color: var(--primaryShade3);
}

#dark:checked ~ main a.link:hover, #dark:checked ~ main a.link.hover,
#pinkaru:checked ~ main a.link:hover,
#pinkaru:checked ~ main a.link.hover {
  color: var(--primaryShade3);
  border-bottom: 2px solid;
}

#dark:checked ~ main a.link.primary,
#pinkaru:checked ~ main a.link.primary {
  color: var(--primaryShade4);
}

#dark:checked ~ main a.link.primary:hover, #dark:checked ~ main a.link.primary.hover,
#pinkaru:checked ~ main a.link.primary:hover,
#pinkaru:checked ~ main a.link.primary.hover {
  color: var(--primaryShade5);
}

#dark:checked ~ main a.link.secondary,
#pinkaru:checked ~ main a.link.secondary {
  color: var(--secondaryShade4);
}

#dark:checked ~ main a.link.secondary:hover, #dark:checked ~ main a.link.secondary.hover,
#pinkaru:checked ~ main a.link.secondary:hover,
#pinkaru:checked ~ main a.link.secondary.hover {
  color: var(--secondaryShade5);
}

#dark:checked ~ main .profile-default img,
#pinkaru:checked ~ main .profile-default img {
  border-bottom: 7px solid var(--secondaryShade5);
}

/* PROFILE CARDS */
.results-header {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr max-content;
}

.results-header__option {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  cursor: pointer;
}

.results-header .option__button {
  display: grid;
  grid-gap: 5px;
  width: 55px;
  height: 75px;
  border-radius: var(--primaryShade3);
  padding: 10px;
  overflow: hidden;
  transition: 0.2s ease;
}

.results-header .option__button > span {
  background: var(--foregroundColor);
  transition: 0.2s ease;
}

.results-header .option__button > span:last-child {
  background: none !important;
  text-align: center;
  text-transform: uppercase;
  font: 500 14px/1 "Poppins", sans-serif;
  display: block;
  margin-top: 2px;
}

.results-header .option__button:hover > span {
  color: var(--primaryShade5);
  background: var(--primaryShade5);
}

.results-header .option__button.selected > span {
  color: var(--primaryColor);
  background: var(--primaryColor);
}

.results-header .option--grid {
  grid: repeat(2, 1fr) min-content/repeat(2, 1fr);
}

.results-header .option--grid span:last-child {
  grid-column: span 2;
}

.results-header .option--list {
  grid: repeat(3, 1fr) min-content/100%;
}

.results-section {
  display: grid;
  grid-gap: 35px;
}

.results--grid {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.results--list {
  grid-template-columns: 100%;
}

.profile {
  position: relative;
  background: var(--backgroundColor);
  color: var(--foregroundColor);
  box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s ease;
  display: grid;
  grid: 200px repeat(5, auto)/100%;
}

.profile__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 7px solid var(--secondaryColor);
}

.profile__info {
  padding: 20px 25px 0;
}

.profile__stats {
  padding: 5px 25px;
}

.profile__stats__title {
  color: var(--primaryShade3);
  text-transform: uppercase;
  font-size: 16px;
}

.profile__cta {
  padding: 0 25px 25px;
  border-radius: 10px;
}

.profile a:hover {
  top: 0;
  box-shadow: none;
  background: var(--primaryShade4);
}

.profile a:active, .profile a:focus {
  top: 0;
  box-shadow: none;
  background: var(--primaryShade5);
}

#dark:checked ~ main a.button,
#pinkaru:checked ~ main a.button {
  color: var(--foregroundColor);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

#dark:checked ~ main .button:hover,
#pinkaru:checked ~ main .button:hover {
  background: var(--primaryShade2);
}

#dark:checked ~ main .button:active,
#pinkaru:checked ~ main .button:active {
  background: var(--primaryShade1);
}

#dark:checked ~ main .profile-default img,
#pinkaru:checked ~ main .profile-default img {
  border-bottom: 7px solid var(--secondaryShade5);
}

#dark:checked ~ main .results-header .option__button.selected > span,
#pinkaru:checked ~ main .results-header .option__button.selected > span {
  color: var(--primaryShade3);
  background: var(--primaryShade3);
}

/*FILTERS*/
.filter-section {
  margin: 2em 0;
}

.filters__title {
  font-size: 18px;
  color: var(--primaryShade3);
  margin: 25px 0;
}

.filters__item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 10px;
}

.filters__item .checkbox {
  position: relative;
  margin: 0;
}

.filters__item .checkbox .tooltip {
  display: inline-block;
  margin-left: 10px;
  width: auto;
  vertical-align: middle;
}

.filters__item .checkbox .tooltip span {
  border: none;
}

.filters__item .checkbox .tooltip:after {
  min-width: 100px;
  margin-left: -50px;
}

.filters:not(:first-of-type) {
  border-top: 0.5px solid var(--primaryShade3);
  margin-top: 25px;
}

@media (min-width: 500px) and (max-width: 992px) {
  .filter-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .filter-section h6 {
    grid-column: span 2;
  }

  .filters:nth-child(2) {
    margin-right: 25px;
  }

  .filters:nth-child(3) {
    border-top: none;
    border-left: 0.5px solid var(--primaryShade3);
    margin-top: 0;
    padding-left: 25px;
  }
}

@media (min-width: 500px) {
  input.variation + label {
    margin: 70px 20px 20px;
  }

  .results-section.results--grid .profile {
    width: 100%;
    margin: auto;
    overflow: hidden;
    grid: 340px auto auto/repeat(3, minmax(80px, 1fr));
    grid-gap: 10px;
  }

  .results-section.results--grid .profile__image {
    grid-column: span 3;
  }

  .results-section.results--grid .profile__info {
    grid-column: span 3;
  }

  .results-section.results--grid .profile__stats {
    padding: 5px 25px;
  }

  .results-section.results--grid .profile__cta {
    grid-column: span 3;
  }
}

@media (min-width: 768px) {
  .results-section.results--list .profile {
    grid-template-columns: 150px repeat(3, 1fr) auto;
    grid-template-rows: auto auto;
    width: 100%;
    padding-right: 20px;
  }

  .results-section.results--list .profile__image {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin-right: 20px;
  }

  .results-section.results--list .profile__image img {
    border-radius: 10px 0 0 10px;
    border: none;
  }

  .results-section.results--list .profile__info {
    grid-column: 2 / 6;
    grid-row: 1;
    padding: 20px 20px 15px 0;
  }

  .results-section.results--list .profile__stats {
    min-width: 100px;
    padding: 15px 0;
    border-top: 0.5px solid var(--primaryShade3);
    grid-row: 2 / 3;
  }

  .results-section.results--list .profile__stats:nth-child(3) {
    grid-column: 2 / 3;
  }

  .results-section.results--list .profile__stats:nth-child(4) {
    grid-column: 3 / 4;
  }

  .results-section.results--list .profile__stats:nth-child(5) {
    grid-column: 4 / 5;
  }

  .results-section.results--list .profile__cta {
    grid-row: 2 / 3;
    grid-column: 5 / 6;
    border-top: 0.5px solid var(--primaryShade3);
    padding: 15px 0 0;
  }
}

@media (max-width: 768px) {
  .results-header__option {
    display: none;
  }
}

@media (min-width: 992px) {
  main {
    display: grid;
    grid: min-content auto/minmax(250px, 18%) 1fr;
    grid-gap: 40px;
  }

  .filter-section__wrapper {
    position: relative;
  }

  .filter-section {
    position: sticky;
    top: 30px;
  }

  .results-section {
    margin-left: 2em;
  }
}

footer {
  display: grid;
  grid: min-content / 1fr max-content;
  text-align: left;
  width: 90%;
  margin: 5em auto 4em;
  max-width: 1500px;
  align-items: center;
}

footer a {
  text-decoration: none;
  color: #333;
  padding: 3px 0;
  border-bottom: 1px dashed;
}

footer a:hover {
  border-bottom: 1px solid;
}

footer .social a {
  text-decoration: none;
  margin-left: 10px;
}

footer .social a .icons {
  display: inline-block;
  font-size: 20px;
}

footer.dark,
footer.dark a {
  color: #f9f9f9;
}

</style>
