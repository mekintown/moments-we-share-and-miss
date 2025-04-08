interface backgroundConfig {
  image: string | string[];
  video?: boolean;
  imagesPreload?: string[];
  stopMotionDuration?: number;
  redirectTo?: string;
  useBackgroundState?: boolean;
}

export const backgroundMapConfig: Record<string, backgroundConfig> = {
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
  "web-color-blue": {
    image: "/animations/transitions/color-blue.mp4",
    video: true,
    redirectTo: "/web-color-green",
    imagesPreload: [],
  },
  "web-color-green": {
    image: "/animations/transitions/color-green.mp4",
    video: true,
    imagesPreload: [],
  },
  "web-color-orange": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-pink": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-purple": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-red": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-white": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-yellow": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
  "web-color-7": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
} as const;
