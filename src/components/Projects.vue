<template>
  <div
    class="
      flex flex-wrap
      static
      w-full
      m-0
      p-0
      pt-40
      border-t border-phoenixYellow
      px-16
      md:px-24
    "
    id="project-container"
  >
    <div class="flex-col w-full">
      <h1 class="text-5xl font-extralight text-offwhite pb-10" id="projects">
        Projects
      </h1>
      <h4 class="text-lg font-light text-offwhite tracking-wide pb-32">
        An excerpt of my last and current projects, clicking a tile opens the
        project's website in a new browser tab. <br />
        For the source code feel free to visit my
        <a
          href="https://github.com/BunnyTheLifeguard"
          target="_blank"
          class="text-phoenixYellow no-underline hover:underline"
          >GitHub Page</a
        >.
      </h4>
    </div>

    <div
      class="flex flex-grow-0 flex-shrink-0 items-center justify-center m-0 p-0"
      v-for="project in projects"
      :key="project.name"
      id="project-canvas"
    >
      <a
        :href="project.url"
        target="_blank"
        class="
          relative
          flex
          items-center
          justify-center
          w-full
          h-full
          cursor-pointer
          scale-95
          transform
          transition
          duration-500
          hover:scale-100
        "
      >
        <img
          :src="project.img[0]"
          :alt="project.name + '_screenshot'"
          class="block w-full max-w-full rounded"
        />
        <section
          class="
            flex flex-wrap
            absolute
            top-0
            left-0
            w-full
            h-full
            ml-0
            mr-0
            items-center
            justify-center
            bg-carbon
            opacity-85
            transition
            duration-250
            hover:bg-opacity-0
            text-offwhite
            hover:text-transparent
          "
        >
          <div
            class="
              relative
              top-0
              left-0
              w-full
              h-full
              flex
              justify-center
              items-center
              flex-grow-0 flex-shrink-0
              m-0
              p-0
              max-w-xs
            "
            id="project-title"
          >
            <div
              class="flex-col justify-items-center items-center"
              id="project-description"
            >
              <h2
                class="
                  inline-block
                  h-auto
                  font-bold
                  text-center text-xl
                  md:text-4xl
                  pb-2
                  md:pb-10
                "
              >
                {{ project.name }}
              </h2>
              <h4
                class="
                  hidden
                  md:inline-block
                  h-auto
                  text-center
                  md:text-xl
                  tracking-wide
                "
              >
                {{ project.description }}
              </h4>
            </div>
          </div>
        </section>
      </a>
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

<style scoped>
#project-canvas {
  flex-basis: 100%;
  margin-bottom: 50px;
}
#project-title {
  flex-basis: 83.3333%;
}
section {
  padding: 20px 32px;
}
</style>
