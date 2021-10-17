<template>
  <div
    pos="relative"
    h="full"
    w="full"
    m="0 t-20"
    p="0 t-40 x-16 md:x-24"
    display="flex"
    flex="wrap"
    justify="between"
    align="items-center"
    border="1 transparent t-phoenixYellow"
    class="section"
    id="skill-container"
  >
    <h1 font="extralight" text="5xl offwhite" id="skills">Skills:</h1>
    <div display="flex" m="t-10 sm:t-0" font="medium sm:semibold" text="xl">
      <h3
        p="y-1 x-5"
        cursor="pointer"
        class="transition duration-250 no-underline hover:underline"
        @click="setLevel(0)"
        :style="allSelected"
      >
        All
      </h3>

      <h3
        p="y-1 x-5"
        cursor="pointer"
        class="transition duration-250 no-underline hover:underline"
        @click="setLevel(1)"
        :style="goodSelected"
      >
        Good
      </h3>

      <h3
        p="y-1 x-5"
        cursor="pointer"
        class="transition duration-250 no-underline hover:underline"
        @click="setLevel(2)"
        :style="basicSelected"
      >
        Basic
      </h3>

      <h3
        p="y-1 x-5"
        cursor="pointer"
        class="transition duration-250 no-underline hover:underline"
        @click="setLevel(3)"
        :style="learningSelected"
      >
        Learning
      </h3>
    </div>
    <div m="t-8" w="full" display="flex" flex="wrap" justify="evenly">
      <div
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="750"
        v-for="skill in filterSkills(level)"
        :key="skill.name + level"
        display="flex"
        flex="row"
        m="5"
      >
        <div display="flex">
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

        <span
          display="flex"
          align="self-center"
          font="medium"
          text="center offwhite"
          >{{ skill.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import AOS from 'aos'
import data from '../assets/data.json'

export default {
  setup() {
    const skills = data.skills
    const level = ref(0)
    const allSelected = ref(null)
    const goodSelected = ref(null)
    const basicSelected = ref(null)
    const learningSelected = ref(null)
    const gradStart = ref(null)
    const gradStop = ref(null)

    // gradient colors
    const allStart = '#f9d423'
    const allStop = '#fefefe'
    const goodStart = '#f9f047'
    const goodStop = '#0fd850'
    const basicStart = '#f9d423'
    const basicStop = '#f83600'
    const learningStart = '#2af598'
    const learningStop = '#009efd'

    // Filter & colorize skills
    const setLevel = (filterLevel) => {
      level.value = filterLevel
      AOS.refresh()
    }

    const filterSkills = (level) => {
      if (level === 0) {
        allSelected.value =
          'background-image: linear-gradient(to bottom right, ' +
          allStart +
          ', ' +
          allStop +
          '); mix-blend-mode: screen'
        goodSelected.value = 'color: #fefefe'
        basicSelected.value = 'color: #fefefe'
        learningSelected.value = 'color: #fefefe'

        gradStart.value = allStart
        gradStop.value = allStop

        return skills
      } else if (level === 1) {
        allSelected.value = 'color: #fefefe'
        goodSelected.value =
          'background-image: linear-gradient(to bottom right, ' +
          goodStart +
          ', ' +
          goodStop +
          '); mix-blend-mode: screen'
        basicSelected.value = 'color: #fefefe'
        learningSelected.value = 'color: #fefefe'

        gradStart.value = goodStart
        gradStop.value = goodStop

        return skills.filter((skill) => skill.level === 1)
      } else if (level === 2) {
        allSelected.value = 'color: #fefefe'
        goodSelected.value = 'color: #fefefe'
        basicSelected.value =
          'background-image: linear-gradient(to bottom right, ' +
          basicStart +
          ', ' +
          basicStop +
          '); mix-blend-mode: screen'
        learningSelected.value = 'color: #fefefe'

        gradStart.value = basicStart
        gradStop.value = basicStop

        return skills.filter((skill) => skill.level === 2)
      } else {
        allSelected.value = 'color: #fefefe'
        goodSelected.value = 'color: #fefefe'
        basicSelected.value = 'color: #fefefe'
        learningSelected.value =
          'background-image: linear-gradient(to bottom right, ' +
          learningStart +
          ', ' +
          learningStop +
          '); mix-blend-mode: screen'

        gradStart.value = learningStart
        gradStop.value = learningStop

        return skills.filter((skill) => skill.level === 3)
      }
    }

    return {
      skills,
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
      learningStop,
      setLevel,
      filterSkills
    }
  }
}
</script>

<style>
#skill-container {
  padding-bottom: 750px;
}
</style>
