

import { ref, computed, onMounted } from "vue";
import StoriesTopBar from "@components/Stories/UI/storiesTopBar.vue";
import mobileControlArea from "@components/Stories/UI/mobileControlArea.vue";
import desktopControlButton from "@components/Stories/UI/desktopControlButton.vue";
import desktopPausePlayButton from "@components/Stories/UI/desktopPausePlayButton.vue";
import CloseButton from "@components/Stories/UI/closeButton.vue";
import gsap from "gsap";
import availableLanguages from "/src/components/Stories/localization/available-languages.json";
import en from '@components/Stories/localization/en.json';
import it from '@components/Stories/localization/it.json';
import de from '@components/Stories/localization/de.json';
import fr from '@components/Stories/localization/fr.json';
import story_icon from "@components/Stories/img/avatar.webp";
import bottom_gradient1 from "@components/Stories/img/bottom_gradient1.svg";
import icon_replay from "@components/Stories/img/icons/icon_replay.svg";
import video_bg from "@components/Stories/img/video.mp4";
import video_bg_webm from "@components/Stories/img/video.webm";






export default {
    name: "Bonuses",
    components: {
        StoriesTopBar,
        mobileControlArea,
        desktopControlButton,
        desktopPausePlayButton,
        CloseButton,
    },
    setup() {
        const defaultDuration = 0.3;
        const tl = gsap.timeline({
            paused: true,
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                currentTime.value = tl.time();
            }
        });
        const reach_end = ref(false);
        const segment1_time = ref(0);
        const segment2_time = ref(0);
        const segment3_time = ref(0);
        const segment4_time = ref(0);
        const segment5_time = ref(0);
        const segment6_time = ref(0);
        const segment7_time = ref(0);
        const segment8_time = ref(0);
        const segment1_duration = ref(0);
        const segment2_duration = ref(0);
        const segment3_duration = ref(0);
        const segment4_duration = ref(0);
        const segment5_duration = ref(0);
        const segment6_duration = ref(0);
        const segment7_duration = ref(0);
        const segment8_duration = ref(0);
        const video = ref(null);


        const segment1 = gsap.timeline({
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                segment1_time.value = segment1.time();
            }
        });
        const segment2 = gsap.timeline({
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                segment2_time.value = segment2.time();
            }
        });
        const segment3 = gsap.timeline({
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                segment3_time.value = segment3.time();
            }
        });
        const segment4 = gsap.timeline({
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                segment4_time.value = segment4.time();
            }
        });
        const segment5 = gsap.timeline({
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                segment5_time.value = segment5.time();
            }
        });
        const segment6 = gsap.timeline({
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                segment6_time.value = segment6.time();
            }
        });
        const segment7 = gsap.timeline({
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                segment7_time.value = segment7.time();
            }
        });
        const segment8 = gsap.timeline({
            defaults: { duration: defaultDuration, ease: "power1.inOut" },
            onUpdate: () => {
                segment8_time.value = segment8.time();
            }
        });
        const texts = ref('en');
        const currency = ref('EUR');
        const name = ref('');
        const player_name = ref('');
        const prizes = ref(965);
        const top_prize = ref(5000);
        const pressTimer = ref(null);
        const pressDuration = 500;
        const longPress = ref(false);
        const currentTime = ref(0);
        const duration = ref(0);
        const shouldSeek = ref(0);
        const isPlaying = ref(true);
        const isPaused = ref(false);
        const thumbs_part = ref(0);
        const numberOfSegments = ref(6);
        const isPlayingHasBeenSet = ref(false);
        const animationPauseStyle = computed(() => ({
            "animation-play-state": isPaused.value ? "paused" : "running",
        }));
        const languageMap = {
            en,
            it,
            de,
            fr
        };

        const updateTime = () => {
            currentTime.value = tl.time;
            duration.value = tl.duration;

        };
        const progress = computed(() => {
            let result = 0;
            let totalSegments = 0;

            let segment1Progress = 0;
            if (segment1_duration.value > 0) {
                segment1Progress = segment1_time.value / segment1_duration.value;
                totalSegments++;
            }

            let segment2Progress = 0;
            if (segment2_duration.value > 0) {
                segment2Progress = segment2_time.value / segment2_duration.value;
                totalSegments++;
            }

            let segment3Progress = 0;
            if (segment3_duration.value > 0) {
                segment3Progress = segment3_time.value / segment3_duration.value;
                totalSegments++;
            }

            let segment4Progress = 0;
            if (segment4_duration.value > 0) {
                segment4Progress = segment4_time.value / segment4_duration.value;
                totalSegments++;
            }

            let segment5Progress = 0;
            if (segment5_duration.value > 0) {
                segment5Progress = segment5_time.value / segment5_duration.value;
                totalSegments++;
            }

            let segment6Progress = 0;
            if (segment6_duration.value > 0) {
                segment6Progress = segment6_time.value / segment6_duration.value;
                totalSegments++;
            }

            let segment7Progress = 0;
            if (segment7_duration.value > 0) {
                segment7Progress = segment7_time.value / segment7_duration.value;
                totalSegments++;
            }

            let segment8Progress = 0;
            if (segment8_duration.value > 0) {
                segment8Progress = segment8_time.value / segment8_duration.value;
                totalSegments++;
            }

            if (totalSegments > 0) {
                const computedValue = (segment1Progress + segment2Progress +
                        segment3Progress  + segment4Progress + segment5Progress + segment6Progress +
                        segment7Progress + segment8Progress)
                    / totalSegments * 100;
                numberOfSegments.value = totalSegments;
                if (!isNaN(computedValue)) {
                    result = computedValue;
                }
            }

            if (segment8_time.value > 0 && !reach_end.value) {
                gtag('event', 'reach_end', {
                    'event_category': 'user_session',
                    'event_label': 'reach_end'
                });
                reach_end.value = true;
            }

            return result;
        });




        const segmentStartTimes = computed(() => [
            0, // The first segment starts at 0
            segment1_duration.value,
            segment1_duration.value + segment2_duration.value,
            segment1_duration.value + segment2_duration.value + segment3_duration.value,
            segment1_duration.value + segment2_duration.value + segment3_duration.value + segment4_duration.value,
            segment1_duration.value + segment2_duration.value + segment3_duration.value + segment4_duration.value + segment5_duration.value,
            segment1_duration.value + segment2_duration.value + segment3_duration.value + segment4_duration.value + segment5_duration.value + segment6_duration.value,
            segment1_duration.value + segment2_duration.value + segment3_duration.value + segment4_duration.value + segment5_duration.value + segment6_duration.value + segment7_duration.value,
        ]);

        const jumpToSegment = (direction) => {
            // Calculate the current segment based on the start times
            let currentSegment = segmentStartTimes.value.findIndex((startTime, i) => {
                return currentTime.value >= startTime && currentTime.value < segmentStartTimes.value[i + 1];
            });

            if (direction === "backward") {

                // If it's the first segment, do not jump to the last one
                if (currentSegment === -1) {
                    let newTime = segmentStartTimes.value[numberOfSegments.value - 2];
                    tl.time(newTime + defaultDuration);
                } else {

                let newTime = segmentStartTimes.value[currentSegment - 1];
                if (newTime < 0) {
                    newTime = 0;
                }
                tl.time(newTime + defaultDuration);
                }


                gtag('event', 'click_backward', {
                    'event_category': 'button',
                    'event_label': 'backward'
                });
            } else if (direction === "forward") {

                // If it's the last segment or beyond, do not jump to the first one
                if (currentSegment === -1) {
                    return;
                }

                let newTime = segmentStartTimes.value[currentSegment + 1];
                tl.time(newTime);

                gtag('event', 'click_forward', {
                    'event_category': 'button',
                    'event_label': 'forward'
                });
            }
        };



        const closeStory = () => {
            gtag('event', 'close_story', {
                'event_category': 'button',
                'event_label': end_link5.value
            });
            setTimeout(() => {
                window.location.href = end_link5.value;
            }, 150);
        };
        const watchAgain = () => {
            gtag('event', 'watch_again', {
                'event_category': 'button',
                'event_label': 'watch_again'
            });
                setTimeout(() => {
            window.location.reload();
                }, 150);
        };
        let pauseTimer = null;

        const playerPause = () => {
            isPlaying.value = false;
            isPaused.value = true;
            tl.pause();
            // Clear any existing timer
            if (pauseTimer) {
                clearTimeout(pauseTimer);
            }

            // Start a new timer
            pauseTimer = setTimeout(() => {
                if (!isPlaying.value) {
                    if (currentTime.value > 0.6) {
                        window.parent.postMessage("click_pause", "*");
                        gtag('event', 'click_pause', {
                            'event_category': 'button',
                            'event_label': 'click_pause'
                        });
                    }
                }
            }, 300);
        };
        const playerPlay = () => {
            isPlaying.value = true;
            isPaused.value = false;
            tl.play();
            if (longPress.value) {
                if (currentTime.value > 0.4) {
                    window.parent.postMessage("click_start", "*");
                    gtag('event', 'click_start', {
                        'event_category': 'button',
                        'event_label': 'click_start'
                    });
                }
            }
        };

        const togglePlayState = () => {
            if (isPlaying.value) {
                isPlaying.value = false;
                isPaused.value = true;
                tl.pause();
                video.value.pause();
                gtag('event', 'click_pause', {
                    'event_category': 'button',
                    'event_label': 'pause'
                });
            } else {
                isPlaying.value = true;
                isPaused.value = false;
                tl.play();
                video.value.play();
                gtag('event', 'click_start', {
                    'event_category': 'button',
                    'event_label': 'start'
                });
            }
        };

        const press = () => {
            playerPause();
            pressTimer.value = setTimeout(() => {
                longPress.value = true;
            }, pressDuration);
        };

        const release = (direction) => {
            clearTimeout(pressTimer.value);

            if (longPress.value) {
                playerPlay();
            } else {
                playerPlay();
                jumpToSegment(direction);
            }
            longPress.value = false;
        };

        const handleEvent = (direction, event) => {
            if (event.type === "touchstart") {
                event.preventDefault();
                press(direction);
            } else if (event.type === "mousedown") {
                press(direction);
            }
        };


        const handleEventEnd = (direction, event) => {
            if (event.type === "touchend") {
                event.preventDefault();
                release(direction);
            } else if (event.type === "mouseup") {
                release(direction);
            }
        };

        onMounted(async () => {
            window.addEventListener("resize", () => {
                let vh = Math.round(window.innerHeight / 100);
                document.documentElement.style.setProperty("--vh", `${vh}px`);
            });



            const fullURL = window.location.href;
            const queryStartIndex = fullURL.indexOf('?');

            if (queryStartIndex !== -1) {
                const queryPart = fullURL.slice(queryStartIndex + 1);
                const params = queryPart.split('&').reduce((acc, pair) => {
                    const [key, value] = pair.split('=');
                    acc[key] = decodeURIComponent(value);
                    return acc;
                }, {});

                if (params.language) {
                    texts.value = params.language;
                }
                if (params.player_name) {
                    player_name.value = params.player_name;
                }
                if (params.currency) {
                    currency.value = params.currency;
                }
                if (params.top_prize) {
                    top_prize.value = params.top_prize;
                }
                if (params.prizes) {
                    prizes.value = params.prizes;
                }

                name.value = params.name;
                if (params.end_link1) {
                    end_link1.value = params.end_link1;
                }
                if (params.end_link2) {
                    end_link2.value = params.end_link2;
                }
                if (params.end_link3) {
                    end_link3.value = params.end_link3;
                }
                if (params.end_link4) {
                    end_link4.value = params.end_link4;
                }
                if (params.close) {
                    end_link5.value = params.close;
                }

            } else {

                const defaultLanguage = navigator.language.split('-')[0];
                if (availableLanguages.languages.includes(defaultLanguage)) {
                    texts.value = defaultLanguage;
                }

            }

            const locale = texts.value;

            if (availableLanguages.languages.includes(locale)) {
                texts.value = languageMap[locale];
            } else {
                texts.value = en;
            }

            for (let key in texts.value) {
                if (typeof texts.value[key] === 'string') {
                    texts.value[key] = texts.value[key].replace(/\n/g, '<br>');
                }
            }



            // SEGMENT 1
                segment1.add(() => {
                    video.value.currentTime = 0;
                    video.value.play();
                }, 0);
            segment1.fromTo(["#text_1_1", "#text_1_2"],
                {
                    opacity: 0,
                    marginTop: "8%",
                    ease: "power1.inOut",
                    duration: 0.5,
                    stagger: 0.3
                },
                {
                    opacity: 1,
                    marginTop: "0",
                    ease: "power1.inOut",
                    duration: 0.5,
                    stagger: 0.3
                });
            segment1.to(["#text_1_1", "#text_1_2"],
                {
                    opacity: 0,
                    duration: 0.5,
                    delay: 1.5
                });
            segment1.fromTo(["#text_1_3", "#text_1_4"],
                {
                    opacity: 0,
                    marginTop: "8%",
                    ease: "power1.inOut",
                    duration: 0.5,
                    stagger: 0.3
                },
                {
                    opacity: 1,
                    marginTop: "0",
                    ease: "power1.inOut",
                    duration: 0.5,
                    stagger: 0.3
                });

                segment1.to(["#text_1_3", "#text_1_4"],
                {
                    opacity: 0,
                    duration: 0.5,
                    delay: 1.5
                });
                
            segment1_duration.value = segment1.duration();



            // SEGMENT 2


            segment2.add(() => {
                video.value.currentTime = segment1_duration.value;
                video.value.play();
            }, 0);
            segment2.fromTo(["#text_2_1", "#text_2_2"],
                    {
                        opacity: 0,
                        marginTop: "8%",
                        ease: "power1.inOut",
                        duration: 0.5,
                        stagger: 0.3
                    },
                    {
                        opacity: 1,
                        marginTop: "0",
                        ease: "power1.inOut",
                        duration: 0.5,
                        stagger: 0.3
                    });

            segment2.to(["#text_2_1", "#text_2_1"],
                        {
                            opacity: 0,
                            duration: 0.5,
                            delay: 5
                        });

            segment2_duration.value = segment2.duration();

            // SEGMENT 3

            segment3.add(() => {
                video.value.currentTime = segment1_duration.value + segment2_duration.value;
                video.value.play();
            }, 0);
            segment3.fromTo(["#text_3_1", "#text_3_2"],
                {
                    opacity: 0,
                    marginTop: "8%",
                    ease: "power1.inOut",
                    duration: 0.5,
                    stagger: 0.3
                },
                {
                    opacity: 1,
                    marginTop: "0",
                    ease: "power1.inOut",
                    duration: 0.5,
                    stagger: 0.3
                });

            segment3.to(["#text_3_1", "#text_3_2"],
                {
                    opacity: 0,
                    duration: 0.5,
                    delay: 7
                });

            segment3_duration.value = segment3.duration();

            // SEGMENT 4


            segment4.add(() => {
                video.value.currentTime = segment1_duration.value + segment2_duration.value + segment3_duration.value;
                video.value.play();
            }, 0);
            segment4.fromTo(["#text_4_1", "#text_4_2"],
                {
                    opacity: 0,
                    marginTop: "8%",
                    ease: "power1.inOut",
                    duration: 0.5,
                    stagger: 0.3
                },
                {
                    opacity: 1,
                    marginTop: "0",
                    ease: "power1.inOut",
                    duration: 0.5,
                    stagger: 0.3
                });

            segment4.to(["#text_4_1", "#text_4_2"],
                {
                    delay: 15
                });

            segment4.add(() => {
                video.value.currentTime = segment1_duration.value + segment2_duration.value + segment3_duration.value + segment4.duration();
                video.value.play();
            }, 0);

            segment4_duration.value = segment4.duration();

          


            tl.add(segment1);
            tl.add(segment2);
            tl.add(segment3);
            tl.add(segment4);
            tl.play();




            duration.value = tl.duration();

        });

        return {
            isPlayingHasBeenSet,
            progress,
            updateTime,
            shouldSeek,
            playerPause,
            playerPlay,
            isPlaying,
            press,
            release,
            numberOfSegments,
            handleEvent,
            handleEventEnd,
            jumpToSegment,
            togglePlayState,
            animationPauseStyle,
            texts,
            currency,
            name,
            closeStory,
            watchAgain,
            thumbs_part,
            story_icon,
            bottom_gradient1,
            icon_replay,
            prizes,
            top_prize,
            player_name,
            video_bg,
            video_bg_webm,
            video,
        };
    },
    methods: {
        reloadPage() {
            gtag('event', 'click_replay', {
                'event_category': 'button',
                'event_label': 'replay'
            });
            setTimeout(() => {
                window.location.reload();
            }, 150);
        }
    }

};
