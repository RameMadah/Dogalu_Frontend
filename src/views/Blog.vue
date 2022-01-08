<template>
  <div class = "section">
    <div class ="dog">
      <space></space>
      <activedog></activedog>
    </div>
    <div class="blog">
      <p>Bock auf der Blogalu!</p>
      <p class="p">Hier kannst du einen <br> Blog erstellen &  Beiträge lesen</p>
    </div>
    <div class = "btnbackg">
    <div class ="btn2">
      <blog-wall></blog-wall>
    </div>
      <br>
    <div class ="btn">
      <add-blog></add-blog>
    </div>
      <br>
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
.btnbackg{
  background: linear-gradient(270deg, rgba(34,193,195,1) 0%, rgba(30,79,85,1) 100%);
}

.headui{
  background: rgb(15,138,137);
  background: linear-gradient(90deg, rgba(15,138,137,0.8519782913165266) 0%, rgba(9,118,121,1) 100%, rgba(0,6,36,0.9136029411764706) 100%);
}

.btn2:hover{
  border-color:rgba(255, 255, 255, 0.5) ;
}

.btn2{
  position: relative;
  bottom: 0px;
}
.p{
  color: whitesmoke;
  text-shadow: #2c3e50 1px 1px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  font-size: 18px;
}
.blog{
  color: whitesmoke;
  text-shadow: #1c3130 1px 1px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-decoration-thickness: 900% ;
  position: relative;
  padding: 20px;
  background: rgb(34,193,195);
  background: linear-gradient(270deg, rgba(34,193,195,1) 0%, rgba(30,79,85,1) 100%);
  left: 0px;
  bottom: 0px;
  font-size: 68px;
}
.dog{
  position: relative;
  width: 5%;
  left:280px;
  bottom: -199px;
  z-index: 1;
  transform: rotate(-45deg);
}

.dog2{
  position: absolute;
  width: 5%;
  left:850px;
  bottom: -1110px;
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
  padding: 0px 0px 0px 0px;
  margin: 50px 0px 0px 0px;
}
</style>
