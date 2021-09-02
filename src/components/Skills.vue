<template>
  <div
    class="
      flex flex-wrap
      relative
      w-full
      h-full
      m-0
      p-0
      border-t border-phoenixYellow
      pt-40
      mt-20
      px-16
      md:px-24
      justify-between
      items-center
    "
    id="skill-container"
  >
    <h1 class="text-5xl font-extralight text-offwhite" id="skills">Skills:</h1>
    <div class="flex font-medium sm:font-semibold text-xl mt-10 sm:mt-0">
      <h3
        class="
          cursor-pointer
          py-1
          px-5
          transition
          duration-250
          no-underline
          hover:underline
        "
        @click="setLevel(0)"
        :style="allSelected"
      >
        All
      </h3>

      <h3
        class="
          cursor-pointer
          py-1
          px-5
          transition
          duration-250
          no-underline
          hover:underline
        "
        @click="setLevel(1)"
        :style="goodSelected"
      >
        Good
      </h3>

      <h3
        class="
          cursor-pointer
          py-1
          px-5
          transition
          duration-250
          no-underline
          hover:underline
        "
        @click="setLevel(2)"
        :style="basicSelected"
      >
        Basic
      </h3>

      <h3
        class="
          cursor-pointer
          py-1
          px-5
          transition
          duration-250
          no-underline
          hover:underline
        "
        @click="setLevel(3)"
        :style="learningSelected"
      >
        Learning
      </h3>
    </div>
    <div class="flex flex-wrap justify-evenly mt-8 w-full">
      <div
        v-for="skill in filterSkills(level)"
        :key="skill.name"
        class="flex flex-row m-5"
      >
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            :viewBox="skill.viewBox"
            height="5vw"
            width="5vh"
            class="fill-current text-offwhite m-3 p-0"
          >
            <path :d="skill.logo" fill="url(#svg-gradient)"></path>
            <linearGradient id="svg-gradient" x2="1" y2="1">
              <stop offset="0%" :stop-color="gradStart" />
              <stop offset="100%" :stop-color="gradStop" />
            </linearGradient>
          </svg>
        </div>

        <span class="font-medium text-center text-offwhite flex self-center">{{
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
    const allSelected = null;
    const goodSelected = null;
    const basicSelected = null;
    const learningSelected = null;
    const gradStart = null;
    const gradStop = null;

    // gradient colors
    const allStart = '#f9d423';
    const allStop = '#fefefe';
    const goodStart = '#f9f047';
    const goodStop = '#0fd850';
    const basicStart = '#f9d423';
    const basicStop = '#f83600';
    const learningStart = '#2af598';
    const learningStop = '#009efd';

    return {
      skills: data.skills,
      level,
      allSelected,
      goodSelected,
      basicSelected,
      learningSelected,
      gradStart,
      gradStop,
      allStart,
      allStop,
      goodStart,
      goodStop,
      basicStart,
      basicStop,
      learningStart,
      learningStop
    };
  },
  methods: {
    setLevel(filterLevel) {
      this.level = filterLevel;
    },
    filterSkills(level) {
      if (level === 0) {
        this.allSelected =
          'background-image: linear-gradient(to bottom right, ' +
          this.allStart +
          ', ' +
          this.allStop +
          '); mix-blend-mode: screen';
        this.goodSelected = 'color: #fefefe';
        this.basicSelected = 'color: #fefefe';
        this.learningSelected = 'color: #fefefe';

        this.gradStart = this.allStart;
        this.gradStop = this.allStop;

        return this.skills;
      } else if (level === 1) {
        this.allSelected = 'color: #fefefe';
        this.goodSelected =
          'background-image: linear-gradient(to bottom right, ' +
          this.goodStart +
          ', ' +
          this.goodStop +
          '); mix-blend-mode: screen';
        this.basicSelected = 'color: #fefefe';
        this.learningSelected = 'color: #fefefe';

        this.gradStart = this.goodStart;
        this.gradStop = this.goodStop;

        return this.skills.filter((skill) => skill.level === 1);
      } else if (level === 2) {
        this.allSelected = 'color: #fefefe';
        this.goodSelected = 'color: #fefefe';
        this.basicSelected =
          'background-image: linear-gradient(to bottom right, ' +
          this.basicStart +
          ', ' +
          this.basicStop +
          '); mix-blend-mode: screen';
        this.learningSelected = 'color: #fefefe';

        this.gradStart = this.basicStart;
        this.gradStop = this.basicStop;

        return this.skills.filter((skill) => skill.level === 2);
      } else {
        this.allSelected = 'color: #fefefe';
        this.goodSelected = 'color: #fefefe';
        this.basicSelected = 'color: #fefefe';
        this.learningSelected =
          'background-image: linear-gradient(to bottom right, ' +
          this.learningStart +
          ', ' +
          this.learningStop +
          '); mix-blend-mode: screen';

        this.gradStart = this.learningStart;
        this.gradStop = this.learningStop;

        return this.skills.filter((skill) => skill.level === 3);
      }
    }
  }
};
</script>

<style>
#skill-container {
  padding-bottom: 750px;
}
</style>
