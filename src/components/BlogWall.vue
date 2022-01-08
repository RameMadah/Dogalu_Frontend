<template>
  <button class="btn frstbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Beiträge Weltweit</button>
  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="bolgtitle" id="offcanvasScrollingLabel">Weltweit Beiträge</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Hier werden Blogs und Beiträge gesammelt und veröffentlicht, die Sie sich ansehen können.</p>
      <div class="container overflow-hidden"  v-for= " blog in blogs" v-bind:key= "blog.id" >
        <div class="row gy-5">
          <div class="col-lg-12">
            <p class="aut"> {{ blog.author }}</p>
            <div class="p-3 border bg-light">
              <p class="tit"> {{ blog.title }}</p>
              <p class="tex"> {{ blog.description }}</p></div>
          </div>
        </div>
        <br>
      </div>
      <br>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BlogWall',
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    const base = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/blogs'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(base, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(blog => {
        this.blogs.push(blog)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>
.tit{
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
.aut{
  text-align: left;
  margin-right: auto;
  margin-left: auto;
}

.frstbtn{
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
  box-shadow: 9px 9px 16px #2c3e50, -9px -9px 16px #1f7976;
}

.frstbtn:hover{
  color: black;
  background-color: white;
  box-shadow: 9px 9px 16px #2c3e50, -9px -9px 16px #1f7976;
  transition-duration: 0.4s;
  border-color:  #1f7976;
  border-radius: 8px;
  transform: scale(1.05)
}
.tex{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 300% ;
  font-size: 18px;
}
.bg-light{
  height: fit-content;
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
.btn-primary {
  color: dimgray;
  font-weight: 300;
  margin: 15px;
  padding: 0.5rem 1.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  transition-duration: 0.4s;
  background-color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%), -4px -4px 6px white;
}
.btn-primary:hover{
  background-color: white;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  transition-duration: 0.4s;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
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
</style>
