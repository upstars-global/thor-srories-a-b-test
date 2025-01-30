<template>
  <div class="story-container">
    <StoriesTopBar
        :progress="progress"
        :number-of-segments="numberOfSegments"/>
    <div class="info_row">
      <img :src="story_icon" class="story_icon" alt="">
    </div>
    <div id="text_container_stories" class="text_container">
      <video :src="video_bg" class="video_bg" autoplay loop muted></video>


      <div id="stories-segment_1" class="stories-segment">

        <div id="text_1_1" class="h1" style="top: 15%" v-html="texts.s1_1" />
        <div id="text_1_2" class="h1" style="top: 20%" v-html="texts.s1_2" />
        <div id="text_1_3" class="h1" style="top: 15%" v-html="texts.s1_3" />
        <div id="text_1_4" class="h1" style="top: 20%" v-html="texts.s1_4" />

      </div>

      <div id="stories-segment_2" class="stories-segment">
        <div id="text_2_1" class="h1" style="top: 15%" v-html="texts.s2_1" />
        <div id="text_2_1" class="h1" style="top: 20%" v-html="texts.s2_2" />

      </div>



      <div id="stories-segment_3" class="stories-segment">



      </div>



      <div class="go_to_promo" @click="getGift4">
          <div id="button7_flare" class="flare" :style="animationPauseStyle">
          </div> Register on WinSpirit
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
