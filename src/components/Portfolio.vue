<template>
  <div
    class="
      container
      bg-gradient-to-b
      from-white
      to-glass
      max-w-none
      pb-10
      mb-0
      mt-10
    "
    id="projects"
  >
    <h1 class="text-5xl ml-5">Projects</h1>
    <div class="flex flex-col sm:flex-row mb-24">
      <div
        v-for="project in projects"
        :key="project.name"
        class="sm:flex-col justify-start sm:justify-center col-3 m-5 border-2"
      >
        <span class="font-medium text-centere flex self-center xl:text-xl">{{
          project.name
        }}</span>
        <span class="font-medium text-center flex self-center xl:text-xl">{{
          project.url
        }}</span>
        <a :href="project.git"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              fill="url(#svg-gradient2)"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
            <linearGradient id="svg-gradient2" x2="1" y2="1">
              <stop offset="0%" stop-color="#447799" />
              <stop offset="50%" stop-color="#224488" />
              <stop offset="100%" stop-color="#112266" />
            </linearGradient></svg
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json';

export default {
  data() {
    return {
      projects: data.projects
    };
  }
};
</script>

<style></style>
