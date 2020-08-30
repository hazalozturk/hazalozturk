<template>
  <v-flex xs12 sm10 md10 pl-15 pr-9 pt-5>
    <blockquote class="blockquote">
      <h1>My Expertise:</h1>
      <v-row align="center" v-for="(skill, index) in skills" :key="index">
        <v-col md="1" sm="3"
          ><v-progress-circular
            :size="50"
            :value="skill.percent"
            :color="skill.color"
            >%{{ skill.percent }}</v-progress-circular
          ></v-col
        >
        <v-col md="11" sm="9">{{ skill.title }}</v-col>
      </v-row>
    </blockquote>
  </v-flex>
</template>

<script>
export default {
  name: "SkillsInfo",
  data: () => ({
    skills: [
      {
        title: "CSS, HTML, JS, Responsive Web Design, Mobile App Development",
        color: "#2e8540",
        percent: 95,
      },
      {
        title: "Git, NodeJS, Webpack, React, React Native, Vue, Wordpress, Figma",
        color: "#004bad",
        percent: 75,
      },
      {
        title: "Docker, Laravel, Sentry, Github Actions, UI/UX Design",
        color: "#DB6434",
        percent: 35,
      },
      {
        title: "Animejs, SVG Animations",
        color: "#5b616b",
        percent: 15,
      },
    ],
  }),
};
</script>

<style></style>
