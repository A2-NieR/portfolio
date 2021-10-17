<script setup>
import data from '../assets/data.json'

import IconGithub from '~icons/mdi/github'

const projects = data.projects
</script>

<template>
  <div
    display="flex"
    flex="wrap"
    justify="items-center"
    pos="static"
    w="full"
    m="0"
    p="0 t-40 x-16 md:x-24"
    border="1 transparent t-phoenixYellow"
    id="project-container"
  >
    <div flex="col" w="full" class="section">
      <h1 p="b-20" text="5xl offwhite" font="extralight" id="projects">
        Projects
      </h1>
      <div flex="col">
        <h4
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-duration="500"
          p="b-10"
          text="lg offwhite"
          font="light tracking-wide"
        >
          An excerpt of my most recent projects, clicking a tile opens the
          project's website in a new browser tab. <br />
          For more details and source code feel free to visit my
          <a
            href="https://github.com/BunnyTheLifeguard"
            target="_blank"
            class="text-phoenixYellow no-underline hover:underline"
            >GitHub Page</a
          >.
        </h4>
        <h4
          data-aos="fade-left"
          data-aos-easing="ease"
          data-aos-duration="500"
          p="b-10"
          font="light tracking-wide"
          class="text-md italic text-offwhite"
        >
          This site is optimized for desktop PCs. If you are displaying it on a
          device with a touchscreen you will miss out on some animations.
        </h4>
      </div>
    </div>

    <div
      data-aos="zoom-in"
      m="0"
      p="0"
      display="flex"
      flex="col grow-0 shrink-0"
      align="items-center"
      v-for="project in projects"
      :key="project.name"
      id="project-canvas"
    >
      <a
        :href="project.url"
        target="_blank"
        pos="relative"
        h="full"
        w="full"
        display="flex"
        justify="items-center"
        align="items-center"
        cursor="pointer"
        transform="scale-95"
      >
        <img
          :src="project.img[0]"
          :alt="project.name + '_screenshot'"
          display="block"
          w="full max-full"
          border="rounded"
        />
        <section
          pos="absolute top-0 left-0"
          display="flex"
          flex="wrap"
          justify="center"
          align="items-center"
          h="full"
          w="full"
          m="x-0"
          bg="carbon"
          opacity="90 hover:0"
          text="offwhite hover:transparent"
          class="transition duration-250"
        >
          <div
            pos="relative top-0 left-0"
            h="full"
            w="full max-xs"
            m="0"
            p="0"
            display="flex"
            flex="grow-0 shrink-0"
            justify="items-center"
            align="items-center"
            id="project-title"
          >
            <div
              display="flex"
              flex="col"
              justify="items-center"
              align="items-center"
              id="project-description"
            >
              <h2
                display="inline-block"
                h="auto"
                p="b-2 md:b-10"
                font="bold"
                text="center xl md:4xl"
              >
                {{ project.name }}
              </h2>
              <h4
                display="hidden md:inline-block"
                h="auto"
                text="center md:xl"
                font="tracking-wide"
              >
                {{ project.description }}
              </h4>
            </div>
          </div>
        </section>
      </a>
      <div display="flex" justify="items-center" align="items-center">
        <a
          :href="project.git"
          target="_blank"
          p="x-1 y-5"
          class="text-center text-phoenixYellow no-underline hover:underline"
        >
          View Source Code
        </a>
        <IconGithub text="offwhite" m="l-1" h="5" w="5" />
      </div>
    </div>
  </div>
</template>

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
