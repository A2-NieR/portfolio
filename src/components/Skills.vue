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
      section
      fadeup
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
    <div class="flex flex-wrap justify-evenly mt-8 w-full fadeup fade-delay">
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
import { ref } from 'vue'
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

    // Fancy animation methods
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -75px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    onMounted(() => {
      window.addEventListener('DOMContentLoaded', (event) => {
        const sections = Array.from(document.getElementsByClassName('section'))

        for (let section of sections) {
          const fadeups = section.getElementsByClassName('fade-delay')
          for (let count = 0; count < fadeups.length; count++) {
            fadeups[count].setAttribute(
              'style',
              'transition-delay: ' + count * 0.5 + 's'
            )
          }
          observer.observe(section)
        }
      })
    })

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

.fadeup {
  transform: translateY(75px);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: 1s;
  transition-timing-function: linear;
}

.in-view.fadeup,
.in-view .fadeup {
  transform: none;
  opacity: 1;
}
</style>
