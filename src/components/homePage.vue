<template>
  <v-container fluid pt-0>
    <v-layout row>
      <v-flex xs10>
        <v-layout
          row
        >
          <v-flex xs10 mx-9>
            <v-img
              :src="require('../assets/name.png')"
              class="float-left"
              contain
              width="800"
            ></v-img>
          </v-flex>
        </v-layout>

        <v-layout
          row
        >
          <v-flex xs2 pl-9>
            <sidebarMenu/>
          </v-flex>

          <v-flex xs10>
            <v-img
              :src="require('../assets/art-dev-design.png')"
              class="float-right"
              contain
              height="400"
            ></v-img>
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex xs2 align-self-end><socialLink/></v-flex>
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
