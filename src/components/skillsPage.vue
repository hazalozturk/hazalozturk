<template>
  <v-container fluid pt-0>
    <v-layout row>
      <v-flex xs10>
        <v-layout row>
          <v-flex xs10 mx-9 pl-sm-5>
            <v-img
              :src="require('../assets/name.png?lazy')"
              class="float-left name-image"
              contain
              width="650"
              alt="Hazal Ozturk name with a irregular shaped background"
            ></v-img>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs5 sm2 md2 pl-9>
            <sidebarMenu />
          </v-flex>

          <v-flex xs12 sm10 md10 pr-9>
            <v-layout row justify-center>
              <skillsInfo></skillsInfo>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs2 align-self-sm-end class="social-link-list"
        ><socialLink
      /></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import socialLink from "./socialLink";
import sidebarMenu from "./sidebarMenu";
import skillsInfo from "../helpers/skillsInfo";

export default {
  name: "SkillsPage",
  components: {
    socialLink,
    sidebarMenu,
    skillsInfo,
  },
  data: () => ({}),
};
</script>
