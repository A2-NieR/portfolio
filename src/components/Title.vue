<template>
  <div class="container max-w-none flex items-center justify-center">
    <video autoplay muted loop id="myVideo" class="static min-w-full z-0">
      <source src="../assets/night.mp4" type="video/mp4" />
    </video>
    <div
      class="
        absolute
        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
        xl:text-9xl
        font-exo2
        uppercase
        z-10
      "
    >
      <h1
        class="
          text-transparent
          bg-clip-text bg-gradient-to-b
          from-red-600
          to-yellow-300
        "
        style="animation: highlightFirst 6s infinite"
      >
        Fullstack
      </h1>
      <h1
        class="
          text-transparent
          bg-clip-text bg-gradient-to-b
          from-yellow-300
          to-green-500
        "
        style="animation: highlightSecond 6s infinite"
      >
        Web
      </h1>
      <h1
        class="
          text-transparent
          bg-clip-text bg-gradient-to-b
          from-green-500
          to-blue-400
        "
        style="animation: highlightThird 6s infinite"
      >
        Development
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@keyframes highlightFirst {
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
}
</style>
