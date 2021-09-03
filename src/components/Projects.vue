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
    <div class="flex-col w-full section fadeup">
      <h1 class="text-5xl font-extralight text-offwhite pb-10" id="projects">
        Projects
      </h1>
      <h4
        class="
          text-lg
          font-light
          text-offwhite
          tracking-wide
          pb-32
          fadeup
          fade-delay
        "
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
        <br />
        <br />
        <i
          class="
            text-md
            font-light
            text-offwhite
            tracking-wide
            fadeup
            fade-delay
          "
          >This site is optimized for desktop PCs. If you are using it on a
          device with a touchscreen you will miss out on some animations.</i
        >
      </h4>
    </div>

    <div
      class="
        flex-col flex-grow-0 flex-shrink-0
        items-center
        justify-center justify-items-center
        m-0
        p-0
      "
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
      <div class="flex justify-center items-center">
        <a
          :href="project.git"
          target="_blank"
          class="
            text-center text-phoenixYellow
            py-5
            px-1
            no-underline
            hover:underline
          "
        >
          View Source Code </a
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--mdi p-1 ml-2"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
            fill="#fefefe"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json'

export default {
  setup() {
    const projects = data.projects

    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -50px 0px'
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

    return { projects }
  }
}
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

.fadeup {
  transform: translateY(50px);
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
