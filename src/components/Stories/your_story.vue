<template>
  <div class="story-container">
    <StoriesTopBar
        :progress="progress"
        :number-of-segments="numberOfSegments"/>
    <div class="info_row">
      <img :src="story_icon" class="story_icon" alt="">
    </div>
    <div id="text_container_stories" class="text_container">


      <div id="stories-segment_1" class="stories-segment">
        <img :src="bg1" class="bg" alt="">
        <div id="text_1_1" class="h1" style="top: 5%" v-html="texts.s1_1" />
        <div id="text_1_2" class="h1" style="top: 10%" v-html="texts.s1_2" />
        <div id="text_1_3" class="h1" style="top: 5%" v-html="texts.s1_3" />
        <div id="text_1_4" class="h1" style="top: 10%" v-html="texts.s1_4" />

      </div>

      <div id="stories-segment_2" class="stories-segment">
        <img :src="bg2" class="bg" alt="">
        <div id="text_2_1" class="h2" style="top: 22%" v-html="texts.s2_1" />
        <img id="sgm2" :src="sgm2" alt="">
      </div>

      <div id="stories-segment_3" class="stories-segment">
        <img id="bg3" :src="bg3" class="bg" alt="">
        <div class="text_3_scale">

        <div id="text_3_1" class="h2" style="top: 30%; font-size: 3.2vh" v-html="texts.s3_1" />
        <div id="text_3_2" class="h2" style="top: 46%" v-html="texts.s3_2" />
        <div id="text_3_3" class="h2" style="top: 69%; font-size: 3.2vh; max-width: 80%" v-html="texts.s3_3" />
        </div>

      </div>

      <div id="stories-segment_4" class="stories-segment">
        <img id="bg4" :src="bg4" class="bg" alt="">


        <div id="text_4_1" class="h2" style="top: 19%" v-html="texts.s4_1" />

        <img :src="cup_s4_en" v-if="texts.is === 'en'" class="cup" alt="">
        <img :src="cup_s4_de" v-if="texts.is === 'de'" class="cup" alt="">
        <img :src="cup_s4_it" v-if="texts.is === 'it'" class="cup" alt="">
        <img :src="cup_s4_fr" v-if="texts.is === 'fr'" class="cup" alt="">

        <div class="go_to_promo" @click="getGift1">
          <div id="button4_flare" class="flare" :style="animationPauseStyle">
          </div> {{texts.s4_2}}
        </div>


      </div>


      <div id="stories-segment_5" class="stories-segment">
        <img id="bg5" :src="bg5" class="bg" alt="">


        <div id="text_5_1" class="h2" style="top: 19%" v-html="texts.s5_1" />

        <img :src="cup_s5_en" v-if="texts.is === 'en'" class="cup" alt="">
        <img :src="cup_s5_de" v-if="texts.is === 'de'" class="cup" alt="">
        <img :src="cup_s5_it" v-if="texts.is === 'it'" class="cup" alt="">
        <img :src="cup_s5_fr" v-if="texts.is === 'fr'" class="cup" alt="">

        <div class="go_to_promo" @click="getGift2">
          <div id="button5_flare" class="flare" :style="animationPauseStyle">
          </div> {{texts.s5_2}}
        </div>


      </div>

      <div id="stories-segment_6" class="stories-segment">
        <img id="bg6" :src="bg6" class="bg" alt="">


        <div id="text_6_1" class="h2" style="top: 19%" v-html="texts.s6_1" />

        <img :src="cup_s6" class="cup" alt="">

        <div class="go_to_promo" @click="getGift3">
          <div id="button6_flare" class="flare" :style="animationPauseStyle">
          </div> {{texts.s6_2}}
        </div>


      </div>

      <div id="stories-segment_7" class="stories-segment">
        <img id="bg7" :src="bg7" class="bg" alt="">
        <img :src="confety" v-if="isPlaying" class="confety" alt="">
        <div id="text_7_1" class="h2" style="top: 19%" v-html="texts.s7_1" />

        <div class="go_to_promo" @click="getGift4" style="bottom: 10%">
          <div id="button7_flare" class="flare" :style="animationPauseStyle">
          </div> {{texts.s7_2}}
        </div>

        <div id="watch_again" class="watch_again" @click="reloadPage">
          <img :src="icon_replay" class="icon_replay" alt=""> {{texts.s7_3}}
        </div>

      </div>

    </div>
    <a @click='closeStory'>
      <div class="close_button">
        <CloseButton/>
      </div>
    </a>
    <div class="pause_button" @click="togglePlayState">
      <desktopPausePlayButton
          :play-state="isPlaying"/>
    </div>
    <div id="story_controls" class="story_controls">
      <div
          @mousedown="handleEvent('backward', $event)"
          @mouseup="handleEventEnd('backward', $event)"
          @touchstart="handleEvent('backward', $event)"
          @touchend="handleEventEnd('backward', $event)">
        <mobileControlArea
            position="left"/>
      </div>
      <div
          @mousedown="handleEvent('forward', $event)"
          @mouseup="handleEventEnd('forward', $event)"
          @touchstart="handleEvent('forward', $event)"
          @touchend="handleEventEnd('forward', $event)">
        <mobileControlArea
            position="right"/>
      </div>
      <div @click="jumpToSegment('backward')">
        <desktopControlButton
            position="left"/>
      </div>
      <div @click="jumpToSegment('forward')">
        <desktopControlButton
            position="right"/>
      </div>
    </div>

  </div>
</template>

<script src="./scripts.js"></script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');
@import "~@theme/styles";
@import "styles";

</style>
