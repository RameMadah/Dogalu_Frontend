<template>
  <div class="blog">
    <h2>This is an about page</h2>
  </div>
  <add-blog></add-blog>
  <sleepy-dog></sleepy-dog>
</template>
<script>
import SleepyDog from '@/components/SleepyDog'
import AddBlog from '@/components/AddBlog'
export default {
  components: { AddBlog, SleepyDog }
}
</script>
