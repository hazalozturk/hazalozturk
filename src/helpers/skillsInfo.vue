<template>
  <v-flex xs12 sm10 md10 pl-15 pr-9 pt-5>
    <blockquote class="blockquote">
      <h1>My Expertise:</h1>
      <v-row align="center" v-for="(skill, index) in skills" :key="index">
        <v-col lg="1" md="2" sm="3"
          ><v-progress-circular
            :size="50"
            :value="skill.percent"
            :color="skill.color"
            >%{{ skill.percent }}</v-progress-circular
          ></v-col
        >
        <v-col lg="11" md="10" sm="9">{{ skill.title }}</v-col>
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
        color: "#095c43",
        percent: 95,
      },
      {
        title: "Git, NodeJS, Webpack, React, React Native, Vue, Wordpress, Figma",
        color: "#8a390d",
        percent: 75,
      },
      {
        title: "Docker, Laravel, Sentry, Github Actions, UI/UX Design",
        color: "#375d87",
        percent: 35,
      },
      {
        title: "Animejs, SVG Animations",
        color: "#5c626d",
        percent: 15,
      },
    ],
  }),
};
</script>
