<template>
  <div class = "section">
  <div class ="dog">
  <activedog></activedog>
  </div>
  <space></space>
  <div class="blog">
    <p>Willkomen in Blogalu</p>
    <p class="p">Hier kannst Einen <br> Blog Erstellen & die Beiträge lesen</p>
  </div>
    <div class ="btn">
      <add-blog></add-blog>
    </div>
    <div class ="btn2">
    <blog-wall></blog-wall>
    </div>
    <div class ="btn3">
      <dogalu-alter></dogalu-alter>
    </div>
  </div>
</template>
<script>
import AddBlog from '@/components/AddBlog'
import Activedog from '@/components/Activedog'
import Space from '@/components/space'
import BlogWall from '@/components/BlogWall'
import DogaluAlter from '@/components/DogaluAlter'
export default {
  components: { DogaluAlter, BlogWall, Space, Activedog, AddBlog }
}
</script>

<style scoped>
.btn{
  position: absolute;
  bottom: 350px;
  left: 750px;
}
.btn2{
  position: absolute;
  bottom: 310px;
  left: 714px;
}
.p{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  font-size: 18px;
}
.blog{
  color: dimgray;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  position: absolute;
  left: 470px;
  bottom: 420px;
  font-size: 68px;
}
.dog{
  position: absolute;
  left: 510px;
  bottom: 450px;
}
.cat{
  position: absolute;
  left: 560px;
  bottom: 600px;
  height: 1px;
  width: 10px;
  size: 40px;
}
.section{
  background-image: linear-gradient(white, #ecf0f3);
  background-color:#ecf0f3;
  padding: 40px 0px 0px 0px;
  margin: 20px 0px 0px 0px;
}
</style>
