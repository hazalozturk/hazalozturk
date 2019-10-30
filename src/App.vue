<template>
  <v-app>
    <v-content>
      <homePage/>
    </v-content>
  </v-app>
</template>

<script>
import homePage from './components/homePage'

export default {
  name: 'App',
  components: {
    homePage,
  },
  data: () => ({
    //
  }),
};
</script>
