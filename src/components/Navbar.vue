<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Portfolio</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="
          flex
          items-center
          px-3
          py-2
          border
          rounded
          text-teal-200
          border-teal-400
          hover:text-white hover:border-yellow-500
        "
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#skills"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-yellow-200
            hover:text-white
            mr-4
          "
        >
          Skills
        </a>
        <a
          href="#projects"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-yellow-200
            hover:text-white
          "
        >
          Projects
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.bg-gradient-to-b {
  background-image: -o-linear-gradient(top, var(--tw-gradient-stops));
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(var(--tw-gradient-stops))
  );
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}
</style>
