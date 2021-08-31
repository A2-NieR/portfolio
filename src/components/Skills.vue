<template>
  <div class="container static bg-blue-900 text-white max-w-none">
    <div class="flex" id="skills">
      <h1>Skills:</h1>
      <h3>Good</h3>
      <h3>Basic</h3>
      <h3>Learning</h3>
    </div>
    <div class="grid grid-cols-4 gap-5 m-20 mb-0">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="
          border-solid border-2 border-white
          flex flex-col
          justify-center
          col-3
        "
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

        <span class="text-center mb-5">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import skills from '../assets/data.json';

export default {
  data() {
    return {
      skills: skills
    };
  }
};
</script>

<style></style>
