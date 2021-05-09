<template>
 <div>

 <page-header></page-header>

<!--router-view contains components that are swapped out-->
<router-view></router-view>

 <page-footer></page-footer>

 </div>
</template>

<script>

import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import AboutSite from '@/components/AboutSite.vue'
import StateList from '@/components/StateList.vue'
import StatesVisited from '@/components/StateList.vue'
import NotFound from '@/components/NotFound.vue'
//do I have to make sure everything is imported somewhere eventually leading up to App.vue?

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    AboutSite,
    StateList,
    StatesVisited,
    NotFound
  }
}
</script>

<style>
body {
  background: ivory;
}
a:hover {
  color: darkslategray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkslategrey;
}
</style>
