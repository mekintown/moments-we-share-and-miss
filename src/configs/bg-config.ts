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
    imagesPreload: ["/backgrounds/main-background.gif"],
  },
  "web-opening-1": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-opening-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-opening-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
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
    imagesPreload: [],
  },
  "web-intro-1": {
    image: "/animations/transitions/intro/intro1.mp4",
    video: true,
    redirectTo: "web-intro-2",
  },
  "web-intro-2": {
    image: "/animations/transitions/intro/intro2.mp4",
    video: true,
    redirectTo: "web-intro-3",
  },
  "web-intro-3": {
    image: "/animations/transitions/intro/intro3.mp4",
    video: true,
    redirectTo: "web-intro-4",
  },
  "web-intro-4": {
    image: "/animations/transitions/intro/intro4.mp4",
    video: true,
    redirectTo: "web-intro-5",
  },
  "web-intro-5": {
    image: "/animations/transitions/intro/intro5.mp4",
    video: true,
    redirectTo: "web-intro-6",
  },
  "web-intro-6": {
    image: "/animations/transitions/intro/intro6.mp4",
    video: true,
    redirectTo: "web-intro-7",
  },
  "web-intro-7": {
    image: "/animations/transitions/intro/intro7.mp4",
    video: true,
    redirectTo: "web-intro-8",
  },
  "web-intro-8": {
    image: "/animations/transitions/intro/intro8.mp4",
    video: true,
    redirectTo: "web-question-1",
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
    imagesPreload: [],
  },
  "web-question-7": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-question-8": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-question-house": {
    image: "/animations/locations/location-house.mp4",
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
    image: "/animations/locations/location-scool.mp4",
    video: true,
    redirectTo: "web-question-7",
  },
  "web-question-other": {
    image: "/animations/locations/location-others.mp4",
    video: true,
    redirectTo: "web-question-7",
  },
  "web-color-1": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
    redirectTo: "web-color-3",
  },
  "web-color-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
    redirectTo: "web-color-4",
  },
  "web-color-4": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
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
    imagesPreload: [],
  },
  "web-sound-3": {
    image: "/backgrounds/main-background.gif",
    redirectTo: "/web-sound-4",
    imagesPreload: [],
  },
  "web-sound-4": {
    image: "/backgrounds/main-background.gif",
    redirectTo: "/web-sound-5",
    imagesPreload: [],
  },
  "web-sound-5": {
    image: "/backgrounds/main-background.gif",
    redirectTo: "/web-sound-6",
    imagesPreload: [],
  },
  "web-sound-6": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-sound-7": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
} as const;
