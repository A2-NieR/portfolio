<template>
  <div
    class="container static bg-gradient-to-b from-black to-blue-900 max-w-none"
  >
    <div
      class="flex px-5 pt-20 items-center uppercase justify-evenly"
      id="skills"
    >
      <h1 class="font-bold text-5xl text-white">Skills:</h1>

      <h3
        class="font-bold text-3xl cursor-pointer px-3"
        @click="setLevel(0)"
        :style="allSelected"
      >
        All
      </h3>

      <h3
        class="font-bold text-3xl cursor-pointer px-3"
        @click="setLevel(1)"
        :style="goodSelected"
      >
        Good
      </h3>

      <h3
        class="font-bold text-3xl cursor-pointer px-3"
        @click="setLevel(2)"
        :style="basicSelected"
      >
        Basic
      </h3>

      <h3
        class="font-bold text-3xl cursor-pointer px-3"
        @click="setLevel(3)"
        :style="learningSelected"
      >
        Learning
      </h3>
    </div>
    <div class="grid grid-cols-3 gap-5 m-20 mb-0 pb-40">
      <div
        v-for="skill in filterSkills(level)"
        :key="skill.name"
        class="flex flex-col justify-center col-3"
      >
        <div class="flex justify-center align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            :viewBox="skill.viewBox"
            height="12vw"
            width="12vh"
            class="fill-current text-white m-2 p-0"
          >
            <path :d="skill.logo"></path>
          </svg>
        </div>

        <span class="font-medium text-center text-white mb-5">{{
          skill.name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json';

export default {
  data() {
    const level = 0;
    const allSelected = 'background-color: white; mix-blend-mode: screen';
    const goodSelected = 'color: white';
    const basicSelected = 'color: white';
    const learningSelected = 'color: white';

    return {
      skills: data.skills,
      level,
      allSelected,
      goodSelected,
      basicSelected,
      learningSelected
    };
  },
  methods: {
    setLevel(filterLevel) {
      this.level = filterLevel;
    },
    filterSkills(level) {
      if (level === 0) {
        this.allSelected = 'background-color: white; mix-blend-mode: screen';
        this.goodSelected = 'color: white';
        this.basicSelected = 'color: white';
        this.learningSelected = 'color: white';
        return this.skills;
      } else if (level === 1) {
        this.allSelected = 'color: white';
        this.goodSelected = 'background-color: white; mix-blend-mode: screen';
        this.basicSelected = 'color: white';
        this.learningSelected = 'color: white';
        return this.skills.filter((skill) => skill.level === 1);
      } else if (level === 2) {
        this.allSelected = 'color: white';
        this.goodSelected = 'color: white';
        this.basicSelected = 'background-color: white; mix-blend-mode: screen';
        this.learningSelected = 'color: white';
        return this.skills.filter((skill) => skill.level === 2);
      } else {
        this.allSelected = 'color: white';
        this.goodSelected = 'color: white';
        this.basicSelected = 'color: white';
        this.learningSelected =
          'background-color: white; mix-blend-mode: screen';
        return this.skills.filter((skill) => skill.level === 3);
      }
    }
  }
};
</script>

<style></style>
