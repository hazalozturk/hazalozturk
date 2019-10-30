<template>
  <v-container fluid>
    <v-layout
      row
    >
      <v-flex xs12 mb-4>
        <h1 class="display-4 font-weight-bold py-9 mb-12 ml-12 pl-12 float-left">
          Hazal Ozturk
        </h1>
      </v-flex>
    </v-layout>

    <v-layout
      row
    >
      <v-flex xs2>
        <sidebarMenu/>
      </v-flex>

      <v-flex xs8>
        <v-img
          :src="require('../assets/self.png')"
          class="float-right"
          contain
          height="400"
        ></v-img>
      </v-flex>

      <v-flex xs2><socialLink/></v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
import socialLink from './socialLink'
import sidebarMenu from './sidebarMenu'

export default {
  name: 'homePage',
  components: {
    socialLink,
    sidebarMenu
  }, 
  data: () => ({
    //
  }),
};
</script>
