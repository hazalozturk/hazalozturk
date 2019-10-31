<template>
  <v-container fluid pt-0>
    <v-layout row>
      <v-flex xs10>
        <v-layout row>
          <v-flex xs10 mx-9>
            <v-img
              :src="require('../assets/name.png?lazy')"
              class="float-left"
              contain
              width="800"
              alt="Hazal Ozturk name with a irregular shaped background"
            ></v-img>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs5 sm2 md2 pl-9>
            <sidebarMenu />
          </v-flex>

          <v-flex xs12 sm10 md10>
            <v-img
              :src="require('../assets/art-dev-design.png')"
              class="float-right home-image"
              contain
              height="400"
              alt="female illustration"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs2 align-self-sm-end><socialLink /></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import socialLink from "./socialLink";
import sidebarMenu from "./sidebarMenu";

export default {
  name: "homePage",
  components: {
    socialLink,
    sidebarMenu
  },
  data: () => ({
    //
  })
};
</script>
