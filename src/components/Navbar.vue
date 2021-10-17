<script setup></script>

<template>
  <nav
    display="flex"
    flex="wrap"
    pos="absolute"
    h="auto"
    w="full"
    justify="between"
  >
    <div
      display="block"
      flex="grow-0 shrink-0"
      m="0"
      p="0 x-16 md:x-24"
      text="offwhite"
      id="nav-content"
    >
      <div
        display="block"
        pos="relative float-left"
        overflow="hidden"
        font="light"
        text="2xl"
      >
        SR Portfolio
      </div>
      <div
        display="inline-flex"
        pos="relative float-right"
        m="0"
        p="0"
        text="xl"
        font="light"
      >
        <a
          href="#project-container"
          m="x-1"
          class="text-phoenixYellow hover:text-offwhite"
        >
          Projects
        </a>
        <a
          href="#skill-container"
          m="x-1"
          class="text-phoenixYellow hover:text-offwhite ml-3"
        >
          Skills
        </a>
        <a
          href="https://github.com/BunnyTheLifeguard"
          target="_blank"
          m="x-1"
          class="text-phoenixYellow hover:text-offwhite ml-3"
        >
          GitHub
        </a>
      </div>
    </div>
  </nav>
</template>

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
