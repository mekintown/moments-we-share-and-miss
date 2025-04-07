interface backgroundConfig {
  image: string | string[];
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
  "web-intro-1": {
    image: "/backgrounds/main-background.gif",
    imagesPreload: [],
  },
} as const;
