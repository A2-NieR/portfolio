<template>
  <header class="block">
    <div class="block h-full m-0 p-0" id="hero">
      <div
        class="
          flex flex-wrap
          relative
          h-full
          w-full
          items-end
          justify-center
          m-0
          p-0
          px-16
          md:px-24
        "
        id="hero-canvas"
      >
        <div
          class="block flex-grow-0 flex-shrink-0 m-0 p-0 pt-0 lg:pt-64"
          id="hero-content"
        >
          <h1
            class="
              font-prata font-medium
              text-offwhite
              tracking-normal
              section
              fadeup
            "
            id="headline"
          >
            <span class="fadeup fadeup-delay">Fullstack </span>
            <span class="fadeup fadeup-delay">Web</span>
            <br />
            <span class="fadeup fadeup-delay">Development</span>
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup() {
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
  }
}
</script>

<style scoped>
header {
  height: calc(83vh - 193px);
  min-height: 215px;
}
#headline {
  font-size: 6.94444vw;
  line-height: 6.8vw;
}
#hero-canvas {
  padding-bottom: 9%;
}
#hero-content {
  flex-basis: 100%;
}

.fadeup {
  transform: translateX(-150px);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: 0.5s;
  transition-timing-function: linear;
}

.in-view.fadeup,
.in-view .fadeup {
  transform: none;
  opacity: 1;
}
</style>
