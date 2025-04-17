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
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
    redirectTo: "web-intro-2",
  },
  "web-intro-2": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
    // redirectTo: "web-intro-3",
  },
  "web-intro-3": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
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
