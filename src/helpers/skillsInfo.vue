<template>
  <v-row>
    <blockquote>
      <h2>My Expertise:</h2>
      <v-row align="center" v-for="(skill, index) in skills" :key="index">
        <v-col cols="1"
          ><v-progress-circular
            class="foo"
            :size="50"
            :value="skill.percent"
            :color="skill.color"
            >%{{ skill.percent }}</v-progress-circular
          ></v-col
        >
        <v-col cols="11" class="pl-7">{{ skill.title }}</v-col>
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
        color: "#008073",
        percent: 95,
      },
      {
        title: "Git, Webpack, React, React Native, Vue, Figma",
        color: "#9C27B0",
        percent: 75,
      },
      {
        title: "Sentry, Github Actions, NodeJS, UI/UX Design, Adobe Suite",
        color: "#0D47A1",
        percent: 35,
      },
      {
        title: "Animejs, SVG Animations, cypress",
        color: "#2E7D32",
        percent: 15,
      },
    ],
  }),
};
</script>
