<script setup>

const props = defineProps({
  weatherInfo: {
    required: true,
    type: [Object, null],
  }
})

</script>

<template>
  <div class="block-bottom">
    <div class="block-bottom-inner">
      <div class="block-bottom-pic pic-coords"></div>
      <div class="block-bottom-texts">
        <div class="block-bottom-text-block">
          <div class="block-bottom-text-block-title">
            Longitude: {{ weatherInfo?.coord.lon }}
          </div>
          <div class="block-bottom-text-block-desc">
            Longitude measures distance east or west of the prime meridian.
          </div>
        </div>
        <div class="block-bottom-text-block">
          <div class="block-bottom-text-block-title">
            Latitude: {{ weatherInfo?.coord.lat }}
          </div>
          <div class="block-bottom-text-block-desc">
            Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the
            equator.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
</style>