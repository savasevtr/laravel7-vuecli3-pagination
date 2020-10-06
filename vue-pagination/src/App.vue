<template>
  <Navbar />

  <div class="container-fluid my-5">
    <router-view />
  </div>
  
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
