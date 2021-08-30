<template>
  <v-container fluid>
    <v-row class="px-md-10 px-2">
      <v-col cols="10">
        <v-row>
          <v-col cols="10" sm="12" class="name-title text-left ml-md-12">
            Hi. I'm Hazal Ozturk.
          </v-col>
        </v-row>
        <v-row class="mt-md-10">
          <v-col cols="4">
            <div id="rotate-container">
              I am a(n)
              <div id="rotate-wrapper">
                <div><div class="artist">Artist.</div></div>
                <div><div>UI Designer.</div></div>
                <div><div>Front-End Developer.</div></div>
              </div>
            </div>
          </v-col>
          <v-col cols="8">
            <v-img
              :src="require('../assets/art-dev-design.png?lazy')"
              contain
              height="300"
              alt="female illustration"
            ></v-img>
          </v-col>
        </v-row>
        <v-col cols="12" class="text-left ml-md-10">
          <aboutInfo />
        </v-col>
        <v-col cols="12" class="text-left ml-md-10">
          <skills-info />
        </v-col>
      </v-col>
      <v-col class="social-link-list" cols="2"><socialLink /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import socialLink from "./socialLink";
import aboutInfo from "../helpers/aboutInfo";
import skillsInfo from "../helpers/skillsInfo";

export default {
  name: "homePage",
  components: {
    socialLink,
    aboutInfo,
    skillsInfo,
  },
  data: () => ({
    //
  }),
};
</script>
