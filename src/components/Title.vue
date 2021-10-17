<template>
  <header display="block">
    <div display="block" h="full" m="0" p="0" id="hero">
      <div
        pos="relative"
        h="full"
        w="full"
        display="flex"
        flex="wrap"
        justify="items-center"
        align="items-end"
        m="0"
        p="0 x-16 md:x-24"
        id="hero-canvas"
      >
        <div
          display="block"
          flex="grow-0 shrink-0"
          m="0"
          p="0 t-0 lg:t-64"
          id="hero-content"
        >
          <h1 font="prata medium tracking-normal" text="offwhite" id="headline">
            <div display="flex">
              <div
                data-aos="fade-down"
                data-aos-easing="ease-in-quart"
                data-aos-duration="1000"
              >
                Fullstack
              </div>
              <div
                data-aos="fade-down-left"
                data-aos-easing="ease-in-quart"
                data-aos-duration="1000"
              >
                Web
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-quart"
              data-aos-duration="1000"
            >
              Development
            </div>
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>

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
</style>
