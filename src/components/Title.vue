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
        "
        id="hero-canvas"
      >
        <div class="block flex-grow-0 flex-shrink-0 m-0 p-0" id="hero-content">
          <h1
            class="font-prata font-medium text-offwhite tracking-normal"
            id="headline"
          >
            <span>Fullstack </span>
            <span>Web</span>
            <br />
            <span>Development</span>
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
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
  padding-right: 50px;
  padding-left: 50px;
}
#hero-content {
  flex-basis: 83.33333%;
}
/* @keyframes highlightFirst {
  0% {
    color: transparent;
  }
  20% {
    color: transparent;
  }
  40% {
    color: white;
  }
  60% {
    color: white;
  }
  80% {
    color: white;
  }
  100% {
    color: white;
  }
}
@keyframes highlightSecond {
  0% {
    color: white;
  }
  20% {
    color: white;
  }
  40% {
    color: transparent;
  }
  60% {
    color: transparent;
  }
  80% {
    color: white;
  }
  100% {
    color: white;
  }
}
@keyframes highlightThird {
  0% {
    color: white;
  }
  20% {
    color: white;
  }
  40% {
    color: white;
  }
  60% {
    color: white;
  }
  80% {
    color: transparent;
  }
  100% {
    color: transparent;
  }
} */
</style>
