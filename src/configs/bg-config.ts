interface BackgroundConfig {
  image: string;
  stopMotionImages?: string[];
  video?: boolean;
  imagesPreload?: string[];
  stopMotionDuration?: number;
  redirectTo?: string;
}

export const backgroundMapConfig: Record<string, BackgroundConfig> = {
  "": {
    image: "/backgrounds/home-background.gif",
    imagesPreload: ["/backgrounds/web-opening-1.mp4", "/logo/logo-full.svg"],
  },
  "web-opening-1": {
    image: "/backgrounds/web-opening-1.mp4",
    video: true,
    imagesPreload: ["/backgrounds/main-background.gif"],
  },
  "web-opening-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-opening-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: ["/illustrations/ios1.webp", "/illustrations/ios2.webp"],
  },
  "web-opening-4": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-opening-5": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-opening-6": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: ["/animations/transitions/intro/intro1.mp4"],
  },
  "web-intro-1": {
    image: "/animations/transitions/intro/intro1.mp4",
    video: true,
    redirectTo: "web-intro-2",
    imagesPreload: ["/animations/transitions/intro/intro2.mp4"],
  },
  "web-intro-2": {
    image: "/animations/transitions/intro/intro2.mp4",
    video: true,
    redirectTo: "web-intro-3",
    imagesPreload: ["/animations/transitions/intro/intro3.mp4"],
  },
  "web-intro-3": {
    image: "/animations/transitions/intro/intro3.mp4",
    video: true,
    redirectTo: "web-intro-4",
    imagesPreload: ["/animations/transitions/intro/intro4.mp4"],
  },
  "web-intro-4": {
    image: "/animations/transitions/intro/intro4.mp4",
    video: true,
    redirectTo: "web-intro-5",
    imagesPreload: ["/animations/transitions/intro/intro5.mp4"],
  },
  "web-intro-5": {
    image: "/animations/transitions/intro/intro5.mp4",
    video: true,
    redirectTo: "web-intro-6",
    imagesPreload: ["/animations/transitions/intro/intro6.mp4"],
  },
  "web-intro-6": {
    image: "/animations/transitions/intro/intro6.mp4",
    video: true,
    redirectTo: "web-intro-7",
    imagesPreload: ["/animations/transitions/intro/intro7.mp4"],
  },
  "web-intro-7": {
    image: "/animations/transitions/intro/intro7.mp4",
    video: true,
    redirectTo: "web-intro-8",
    imagesPreload: ["/animations/transitions/intro/intro8.mp4"],
  },
  "web-intro-8": {
    image: "/animations/transitions/intro/intro8.mp4",
    video: true,
    redirectTo: "web-question-1",
    imagesPreload: ["/animations/transitions/intro/question1.mp4"],
  },
  "web-question-1": {
    image: "/animations/transitions/intro/question1.mp4",
    video: true,
  },
  "web-question-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-question-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-question-4": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-question-5": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [
      "/animations/locations/location-home.mp4",
      "/animations/locations/location-car.mp4",
      "/animations/locations/location-beach.mp4",
      "/animations/locations/location-school.mp4",
      "/animations/locations/location-others.mp4",
    ],
  },
  "web-question-7": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-question-8": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-question-home": {
    image: "/animations/locations/location-home.mp4",
    video: true,
    redirectTo: "web-question-7",
  },
  "web-question-car": {
    image: "/animations/locations/location-car.mp4",
    video: true,
    redirectTo: "web-question-7",
  },
  "web-question-beach": {
    image: "/animations/locations/location-beach.mp4",
    video: true,
    redirectTo: "web-question-7",
  },
  "web-question-school": {
    image: "/animations/locations/location-school.mp4",
    video: true,
    redirectTo: "web-question-7",
  },
  "web-question-others": {
    image: "/animations/locations/location-others.mp4",
    video: true,
    redirectTo: "web-question-7",
  },
  "web-color-1": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: ["/animations/transitions/colors/color2.mp4"],
  },
  "web-color-2": {
    image: "/animations/transitions/colors/color2.mp4",
    video: true,
    redirectTo: "web-color-3",
    imagesPreload: ["/animations/transitions/colors/color3.mp4"],
  },
  "web-color-3": {
    image: "/animations/transitions/colors/color3.mp4",
    video: true,
    redirectTo: "web-color-4",
    imagesPreload: ["/animations/transitions/colors/color4.mp4"],
  },
  "web-color-4": {
    image: "/animations/transitions/colors/color4.mp4",
    video: true,
  },
  "web-color-5": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-6": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-blue": {
    image: "/animations/transitions/colors/color-blue.mp4",
    video: true,
    redirectTo: "/web-sound-1",
  },
  "web-color-green": {
    image: "/animations/transitions/colors/color-green.mp4",
    video: true,
    redirectTo: "/web-sound-1",
  },
  "web-color-orange": {
    image: "/animations/transitions/colors/color-orange.mp4",
    video: true,
    redirectTo: "/web-sound-1",
  },
  "web-color-pink": {
    image: "/animations/transitions/colors/color-pink.mp4",
    video: true,
    redirectTo: "/web-sound-1",
  },
  "web-color-purple": {
    image: "/animations/transitions/colors/color-purple.mp4",
    video: true,
    redirectTo: "/web-sound-1",
  },
  "web-color-red": {
    image: "/animations/transitions/colors/color-red.mp4",
    video: true,
    redirectTo: "/web-sound-1",
  },
  "web-color-white": {
    image: "/animations/transitions/colors/color-white.mp4",
    video: true,
    redirectTo: "/web-sound-1",
  },
  "web-color-yellow": {
    image: "/animations/transitions/colors/color-yellow.mp4",
    video: true,
    redirectTo: "/web-sound-1",
  },
  "web-sound-1": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-sound-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: ["/animations/transitions/sound/sound3.mp4"],
  },
  "web-sound-3": {
    image: "/animations/transitions/sound/sound3.mp4",
    video: true,
    redirectTo: "/web-sound-4",
    imagesPreload: ["/animations/transitions/sound/sound4.mp4"],
  },
  "web-sound-4": {
    image: "/animations/transitions/sound/sound4.mp4",
    video: true,
    redirectTo: "/web-sound-5",
    imagesPreload: ["/animations/transitions/sound/sound5.mp4"],
  },
  "web-sound-5": {
    image: "/animations/transitions/sound/sound5.mp4",
    video: true,
    redirectTo: "/web-sound-6",
    imagesPreload: ["/animations/transitions/sound/sound6.mp4"],
  },
  "web-sound-6": {
    image: "/animations/transitions/sound/sound6.mp4",
    video: true,
    imagesPreload: [],
  },
  "web-sound-7": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-transition-1": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-transition-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-transition-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-transition-4": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-transition-5": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-transition-6": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-transition-7": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-transition-8": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: ["/logo/logo-sub.svg"],
  },
  "web-transition-momentswemiss": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
    redirectTo: "web-transition-9",
  },
  "web-transition-9": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
    redirectTo: "web-reveal-1",
  },
  "web-reveal-1": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-reveal-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-reveal-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-reveal-4": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-conclusion-1": {
    image: "/backgrounds/main-background.gif",
    redirectTo: "/web-conclusion-2",
    imagesPreload: ["/animations/transitions/conclusion/conclusion2.mp4"],
  },
  "web-conclusion-2": {
    image: "/animations/transitions/conclusion/conclusion2.mp4",
    video: true,
    imagesPreload: ["/animations/transitions/conclusion/conclusion3.mp4"],
  },
  "web-conclusion-3": {
    image: "/animations/transitions/conclusion/conclusion3.mp4",
    video: true,
    imagesPreload: ["/animations/transitions/conclusion/conclusion4.mp4"],
  },
  "web-conclusion-4": {
    image: "/animations/transitions/conclusion/conclusion4.mp4",
    video: true,
    imagesPreload: ["/animations/transitions/conclusion/conclusion5.mp4"],
  },
  "web-conclusion-5": {
    image: "/animations/transitions/conclusion/conclusion5.mp4",
    video: true,
    imagesPreload: ["/animations/transitions/conclusion/conclusion6.mp4"],
  },
  "web-conclusion-6": {
    image: "/animations/transitions/conclusion/conclusion6.mp4",
    video: true,
    imagesPreload: ["/animations/transitions/conclusion/conclusion7.mp4"],
  },
  "web-conclusion-7": {
    image: "/animations/transitions/conclusion/conclusion7.mp4",
    video: true,
    imagesPreload: ["/illustrations/letter.mp4"],
  },
  "web-ending-1": {
    image: "/illustrations/letter.mp4",
    video: true,
    imagesPreload: [],
  },
  "web-ending-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-ending-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-share-1": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-share-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-share-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-share-4": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: ["/logo/logo-full.svg"],
  },
  "web-share-5": {
    image: "/backgrounds/home-background.gif",
    imagesPreload: [],
  },
} as const;
