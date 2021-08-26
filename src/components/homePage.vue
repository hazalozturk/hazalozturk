<template>
  <v-container fluid>
    <v-row class="px-10">
      <v-col cols="10">
        <v-row>
          <v-col cols="10" class="name-title text-left ml-12">
            Hi. I'm Hazal Ozturk.
          </v-col>
        </v-row>
        <v-row class="mt-10">
          <v-col cols="4">
            <div id="rotate-container">
              I am a(n)
              <div id="rotate-wrapper">
                <div><div class="artist">Artist.</div></div>
                <div><div>UI Designer.</div></div>
                <div><div>Front End Developer.</div></div>
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
        <v-col cols="12" class="text-left ml-10">
          <aboutInfo />
        </v-col>
        <v-col cols="12" class="text-left ml-10">
          <skills-info />
        </v-col>
      </v-col>
      <v-col class="social-link-list" cols="2"><socialLink /></v-col>
    </v-row>
  </v-container>
</template>

<style>
@media only screen and (max-width: 600px) {
  .social-link-list {
    padding-top: 30%;
  }
}
</style>

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
