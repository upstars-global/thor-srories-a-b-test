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
        const segment1_duration = ref(0);
        const segment2_duration = ref(0);
        const segment3_duration = ref(0);
        const segment4_duration = ref(0);
        const video = ref(null);
        const end_link = ref('https://winspirit3.com/registration');

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
        const texts = ref('en');
        const pressTimer = ref(null);
        const pressDuration = 500;
        const longPress = ref(false);
        const currentTime = ref(0);
        const duration = ref(0);
        const shouldSeek = ref(0);
        const isPlaying = ref(true);
        const isPaused = ref(false);
        const numberOfSegments = ref(4);
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

            if (totalSegments > 0) {
                const computedValue = (segment1Progress + segment2Progress + segment3Progress + segment4Progress)
                    / totalSegments * 100;
                numberOfSegments.value = totalSegments;
                if (!isNaN(computedValue)) {
                    result = computedValue;
                }
            }

            if (segment4_time.value > 0 && !reach_end.value) {

                reach_end.value = true;
            }

            return result;
        });

        const segmentStartTimes = computed(() => [
            0,
            segment1_duration.value,
            segment1_duration.value + segment2_duration.value,
            segment1_duration.value + segment2_duration.value + segment3_duration.value,
            segment1_duration.value + segment2_duration.value + segment3_duration.value + segment4_duration.value,
        ]);

        const jumpToSegment = (direction) => {
            let currentSegment = segmentStartTimes.value.findIndex((startTime, i) => {
                return currentTime.value >= startTime && currentTime.value < segmentStartTimes.value[i + 1];
            });

            if (direction === "backward") {
                if (currentSegment === -1) {
                    let newTime = segmentStartTimes.value[numberOfSegments.value - 2];
                    tl.time(newTime + defaultDuration);
                    video.value.currentTime = newTime + defaultDuration;
                } else {
                    let newTime = segmentStartTimes.value[currentSegment - 1];
                    if (newTime < 0) {
                        newTime = 0;
                    }
                    tl.time(newTime + defaultDuration);
                    video.value.currentTime = newTime + defaultDuration;
                }
            } else if (direction === "forward") {
                if (currentSegment === -1) {
                    return;
                }
                if (currentSegment === numberOfSegments.value - 1) {
                    return;
                }
                let newTime = segmentStartTimes.value[currentSegment + 1];
                tl.time(newTime);
                video.value.currentTime = newTime + defaultDuration;
            }
        };

        const closeStory = () => {
            setTimeout(() => {
                window.location.href = end_link.value;
            }, 150);
        };
        const watchAgain = () => {
            setTimeout(() => {
                window.location.reload();
            }, 150);
        };

        const regButton = () => {
            setTimeout(() => {
                window.location.href = end_link.value;
            }, 150);
        };
        let pauseTimer = null;

        const playerPause = () => {
            isPlaying.value = false;
            isPaused.value = true;
            tl.pause();
            video.value.pause();
            if (pauseTimer) {
                clearTimeout(pauseTimer);
            }
            pauseTimer = setTimeout(() => {
                if (!isPlaying.value) {

                }
            }, 300);
        };
        const playerPlay = () => {
            isPlaying.value = true;
            isPaused.value = false;
            tl.play();
            video.value.play();
            if (longPress.value) {

            }
        };

        const togglePlayState = () => {
            if (isPlaying.value) {
                isPlaying.value = false;
                isPaused.value = true;
                tl.pause();
                video.value.pause();
            } else {
                isPlaying.value = true;
                isPaused.value = false;
                tl.play();
                video.value.play();
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

            const urlParams = new URLSearchParams(window.location.search);

            if (urlParams.has("language")) {
                texts.value = urlParams.get("language");
            }
            if (urlParams.has("end_link")) {
                end_link.value = urlParams.get("end_link");
            }

            const defaultLanguage = navigator.language.split('-')[0];
            if (availableLanguages.languages.includes(defaultLanguage)) {
                texts.value = defaultLanguage;
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

            segment1.add(() => {
                video.value.autoplay = true;
                video.value.load();
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
            segment2.to(["#text_2_1", "#text_2_2"],
                {
                    opacity: 0,
                    duration: 0.5,
                    delay: 5
                });
            segment2_duration.value = segment2.duration();

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
            story_icon,
            jumpToSegment,
            togglePlayState,
            animationPauseStyle,
            texts,
            closeStory,
            watchAgain,
            video_bg,
            video_bg_webm,
            video,
            regButton
        };
    },
};
