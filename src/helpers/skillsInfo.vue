<template>
  <v-row>
    <blockquote>
      <h2 class="pb-4">My Expertise:</h2>
      <v-row align="center" v-for="(skill, index) in skills" :key="index">
        <v-col cols="1"
          ><v-progress-circular
            class="progress-circle"
            :size="50"
            :value="skill.percent"
            :color="skill.color"
            >%{{ skill.percent }}</v-progress-circular
          ></v-col
        >
        <v-col cols="11" class="pl-sm-7 pl-12">{{ skill.title }}</v-col>
      </v-row>
    </blockquote>
  </v-row>
</template>

<script>
export default {
  name: "SkillsInfo",
  data: () => ({
    skills: [
      {
        title:
          "CSS, HTML, JS, Responsive Web Design, Mobile App Development, Art",
        color: "#8BC6C6",
        percent: 95,
      },
      {
        title: "Git, Webpack, React, React Native, Vue, Figma",
        color: "#EC7480",
        percent: 75,
      },
      {
        title: "Sentry, Github Actions, NodeJS, UI/UX Design, Adobe Suite",
        color: "#F3AC79",
        percent: 35,
      },
      {
        title: "Animejs, SVG Animations, cypress",
        color: "#AFBCD0",
        percent: 15,
      },
    ],
  }),
};
</script>
