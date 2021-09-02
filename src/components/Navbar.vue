<template>
  <nav class="flex flex-wrap absolute w-full h-auto justify-between">
    <div
      class="
        block
        flex-grow-0 flex-shrink-0
        m-0
        p-0
        text-offwhite
        px-16
        md:px-24
      "
      id="nav-content"
    >
      <div
        class="relative block overflow-hidden float-left font-light text-2xl"
      >
        SR Portfolio
      </div>
      <div
        class="
          inline-block
          relative
          float-right
          m-0
          p-0
          text-xl
          font-extralight
        "
      >
        <a href="#projects" class="text-phoenixYellow hover:text-offwhite">
          Projects
        </a>
        <a href="#skills" class="text-phoenixYellow hover:text-offwhite ml-3">
          Skills
        </a>
        <a
          href="https://github.com/BunnyTheLifeguard"
          target="_blank"
          class="text-phoenixYellow hover:text-offwhite ml-3"
        >
          GitHub
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  padding-top: 100px;
  /* padding-right: 50px;
  padding-left: 50px; */
}

#nav-content {
  flex-basis: 100%;
}
</style>
