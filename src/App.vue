<script setup>
import WeatherSummary from './components/WeatherSummary.vue';
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input type="text" class="search">
                </div>
                <WeatherSummary />
              </div>
            </section>
            <section class="section section-right">
              <div class="section highlights">
                <div class="title">
                  Today's Highlights
                </div>
                <div class="highlights-wrapper">
                  <div class="highlight">
                    <div class="card">
                      <div class="card-title">
                        Wind
                      </div>
                      <div class="card-pic card-pic--wind"></div>
                      <div class="card-info">
                        <div class="card-justify">
                          <div class="info-main">
                            <div class="info-main-num">
                              3.6
                            </div>
                            <div class="info-main-text">
                              m/s
                            </div>
                          </div>
                          <div class="info-main">
                            <div class="info-main-num">
                              350
                            </div>
                            <div class="info-main-text">
                              deg
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-small">
                      <div class="card-small-title">
                        Wind gusts
                      </div>
                      <div class="card-small-info">
                        <div class="card-small-data">
                          <div class="info-main-num">
                            8.4
                          </div>
                          <div class="info-main-text">
                            m/s
                          </div>
                        </div>
                        <div class="card-small-hint">
                          <div class="card-small-pic card-small-pic--wind"></div>
                          <div class="card-small-text text-egorova">
                            Learn
                            <a href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5"
                              target="_blank">more</a>
                            about gusts
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="highlight">
                    <div class="card">
                      <div class="card-title">
                        Pressure
                      </div>
                      <div class="card-pic card-pic--pressure"></div>
                      <div class="card-info">
                        <div class="card-centered">
                          <div class="info-main">
                            <div class="info-main-num">
                              765
                            </div>
                            <div class="info-main-text">
                              mm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-small">
                      <div class="card-small-title">
                        Feels like
                      </div>
                      <div class="card-small-info">
                        <div class="card-small-data">
                          <div class="info-main-num">
                            21
                          </div>
                          <div class="info-main-text">
                            °C
                          </div>
                        </div>
                        <div class="card-small-hint">
                          <div class="card-small-pic card-small-pic--margin card-small-pic--pressure"></div>
                          <div class="card-small-text">
                            How hot or cold it really feels
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="highlight">
                    <div class="card">
                      <div class="card-title">
                        Sunrise and sunset
                      </div>
                      <div class="card-pic card-pic--sun"></div>
                      <div class="card-info">
                        <div class="states">
                          <div class="state">
                            <div class="state-pic"></div>
                            <div class="state-title">
                              Sunrise
                            </div>
                            <div class="state-time">
                              07:31:42
                            </div>
                          </div>
                          <div class="state">
                            <div class="state-pic state-pic--flipped"></div>
                            <div class="state-title">
                              Sunset
                            </div>
                            <div class="state-time">
                              18:34:19
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-small">
                      <div class="card-small-title">
                        Cloudiness
                      </div>
                      <div class="card-small-info">
                        <div class="card-small-data">
                          <div class="info-main-num">
                            80
                          </div>
                          <div class="info-main-text">
                            %
                          </div>
                        </div>
                        <div class="card-small-hint">
                          <div class="card-small-pic card-small-pic--sun"></div>
                          <div class="card-small-text">
                            The sky fraction obscured by clouds
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="sections">
            <section class="section-bottom">
              <div class="block-bottom">
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-coords"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Longitude: 2.3488
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Longitude measures distance east or west of the prime meridian.
                      </div>
                    </div>
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Latitude: 48.8534
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the
                        equator.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="section-bottom">
              <div class="block-bottom">
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-humidity"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Humidity: 60 %
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of
                        water, is generally invisible to the human eye.
                        <br /><br />
                        The same amount of water vapor results in higher relative humidity in cool air than warm air.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="sass" scoped>
@import './assets/styles/main'
.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  padding: 20px 0
  background-color: #59585d

.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section-left
  width: 30%
  padding-right: 10px

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.section-right
  width: 70%
  padding-left: 10px

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('./assets/img/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  padding: 16px
  font-family: 'Inter', Arial, sans-serif
  color: $white
  background-color: rgba(0, 0, 0, 0.75)
  border-radius: 16px
  border: none
  outline: none
  cursor: pointer

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%
</style>
