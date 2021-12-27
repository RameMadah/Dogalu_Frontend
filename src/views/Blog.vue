<template>
  <div class = "section">
    <div class ="dog">
      <space></space>
      <activedog></activedog>
    </div>
    <div class="blog">
      <p>Willkomen in Blogalu</p>
      <p class="p">Hier kannst Einen <br> Blog Erstellen & die Beiträge lesen</p>
    </div>
    <div class ="btn2">
      <blog-wall></blog-wall>
    </div>
    <div class ="btn">
      <add-blog></add-blog>
    </div>
    <space></space>
    <div class ="btn3">
      <dogalu-alter></dogalu-alter>
    </div>
    <div class ="dog2">
    <activedogb></activedogb>
    </div>
    <div class ="btn4">
      <dogalu-bmi></dogalu-bmi>
    </div>
  </div>
</template>

<script>
import AddBlog from '@/components/AddBlog'
import Activedog from '@/components/Activedog'
import BlogWall from '@/components/BlogWall'
import DogaluAlter from '@/components/DogaluAlter'
import DogaluBmi from '@/components/DogaluBmi'
import Space from '@/components/space'
import Activedogb from '@/components/Activedogb'
export default {
  components: { Activedogb, Space, DogaluBmi, DogaluAlter, BlogWall, Activedog, AddBlog }
}
</script>

<style scoped>
.btn{
  position: relative;
  bottom: 0px;
  left: 0px;
}
.btn2:hover{
  border-color:rgba(255, 255, 255, 0.5) ;
}
.btn:hover{
  border-color:rgba(255, 255, 255, 0.5) ;
}

.btn2{
  position: relative;
  bottom: 0px;
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
  position: relative;
  left: 0px;
  bottom: 0px;
  font-size: 68px;
}
.dog{
  position: relative;
  width: 5%;
  left:310px;
  bottom: -199px;
  z-index: 1;
  transform: rotate(-45deg);
}

.dog2{
  position: absolute;
  width: 5%;
  left:850px;
  bottom: -710px;
  z-index: 1;
  transform: rotate(40deg);
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
  padding: 24px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}
</style>
