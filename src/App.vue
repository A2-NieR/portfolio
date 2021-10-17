<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<template>
  <div bg="carbon" font="titillium">
    <Navbar />

    <section display="block">
      <Title />
      <Projects />
      <Skills />
    </section>

    <transition name="fade">
      <div
        id="pagetop"
        pos="fixed right-7 bottom-7"
        cursor="pointer"
        class="transform transition duration-250 hover:scale-125"
        v-show="scY > 750"
        @click="toTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f9d423"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>
    </transition>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
section {
  padding-top: 193px;
}
</style>
