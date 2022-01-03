<template>
  <div class="b-example-divider"></div>

  <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Dogalu bietet folgendes an</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
            <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
          </svg>
        </div>
        <div>
          <h2>Unterhaltsam</h2>
          <p>Man Kann einen Blog schreiben und anschauen bzw lesen
            jede Nutzer hat die Möglichkeit Blogs zu teilen.(dieser Funktion ist im BLOG-bereich)
            "[Weltweit beiträge] für den Blogs zu lesen & [Blog] um einem Blog zu teilen"</p>
          <a href="#" class="btn btn-primary">
            <router-link to="/blog"><a>Beiträge</a></router-link>
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-easel2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
          </svg>
        </div>
        <div>
          <h2>Bildungswesen</h2>
          <p>Lektion absolvieren und eine Lektion mitteilen (Bereich Lesson )
            "Durch einem Klick auf [Lektion hizufügen] erlänt man zu einem Formular zu Ausfüllen.</p>
          <a href="#" class="btn btn-primary">
            <router-link to="/lesson"><a>Lektion hinzufügen</a></router-link>
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
            <path fill-rule="nonzero" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
          </svg>
        </div>
        <div>
          <h2>Gesundheit</h2>
          <p> Man kann Den BMI eines Hundes prüfen um zu wissen, ob der hund Gesund ist oder
            ob er ein Daiet braucht  oder den Hund Alter vermenschlichen, um zu wissen, wie alt Dein Hund  ist, wenn er ein Mensch wäre.</p>
          <a href="#" class="btn btn-primary">
            <router-link to="/blog"><a>Überprüfen</a></router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion'
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #2a313b;
}
.btn-primary{
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;
  transition-duration: 0.4s;
  background-color: white ;
  border: 0px solid #1f7976;
  border-radius: 10px;
  box-shadow: 9px 9px 16px #8e909d, -9px -9px 16px ghostwhite;

}

.btn-primary:hover{
  text-decoration: none;
  color: black;
  background-color: white;
  box-shadow: 9px 9px 16px #8e909d, -9px -9px 16px floralwhite;
  transition-duration: 0.4s;
  border-color:  #1f7976;
  border-radius: 8px;
  transform: scale(1.05)
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
