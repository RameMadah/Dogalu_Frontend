<template>
        <div class="card-neumorphic p-8">
          <img class="img-neumorphic block" src="https://images.unsplash.com/photo-1503079789711-148472409b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=400" alt="">
          <div class="mt-6">
            <div class="font-semibold text-gray-700">
              The coldest mountain
            </div>
            <div class="text-xs text-gray-600 font-medium border-b border-gray-400 py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </div>
            <div class="mt-6">
              <span class="tag-neumorphic inline-block p-2 rounded-full text-xs text-gray-600 mb-1 mr-4">#photography</span>
              <span class="tag-neumorphic inline-block p-2 rounded-full text-xs text-gray-600">#travel</span>
            </div>
          </div>
        </div>
</template>
<script>
export default {
  name: 'Unit'
}
</script>

<style scoped>
body {
  background-color: #eaeef3;
}

.card-neumorphic {
  border-radius: 20px;
  background-color: #eaeef3;
  box-shadow: 20px 20px 40px #c7cacf, -20px -20px 40px #ffffff;
}

.img-neumorphic {
  border-radius: 10px;
  background-color: #eaeef3;
  box-shadow: 10px 10px 20px #c7cacf, -10px -10px 20px #ffffff;
}

.user-neumorphic {
  border-radius: 9999px;
  background-color: #eaeef3;
  box-shadow: 10px 10px 20px #c7cacf, -10px -10px 20px #ffffff;
}

.tag-neumorphic {
  border-radius: 10px;
  background-color: #eaeef3;
  box-shadow: 5px 5px 20px #c7cacf, -5px -5px 20px #ffffff;
}
</style>
