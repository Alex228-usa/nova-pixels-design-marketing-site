import { WorkType } from "@/types/type.works";

import solarPower from "@/assets/webp/solar-power.webp";
import mobileScreen from "@/assets/webp/mobile_screen.webp";
import tvScreen from "@/assets/webp/tv_screen.webp";
import mobileApp from "@/assets/webp/mobile-app.webp";

import featuredImage1 from "@/assets/webp/works/project-one/featured-image01.webp";
import featuredImage2 from "@/assets/webp/works/project-one/featured-image02.webp";
import featuredImage3 from "@/assets/webp/works/project-one/featured-image03.webp";
import featuredImage4 from "@/assets/webp/works/project-one/featured-image04.webp";
import featuredImage5 from "@/assets/webp/works/project-one/featured-image05.webp";
import featuredImage6 from "@/assets/webp/works/project-one/featured-image06.webp";
import featuredImage7 from "@/assets/webp/works/project-one/featured-image07.webp";
import featuredImage8 from "@/assets/webp/works/project-one/featured-image08.webp";
import featuredImage9 from "@/assets/webp/works/project-one/featured-image09.webp";

import hero01 from "@/assets/webp/works/project-one/hero01.webp";
import processHero01 from "@/assets/webp/works/project-one/process-hero.webp";
import lastHero from "@/assets/webp/works/project-one/last-hero.webp";
import resultHero from "@/assets/webp/works/project-one/result-hero.webp";

export const works: WorkType[] = [
  {
    id: "solar-power",
    title: "BRAND IDENTITY, SIGNAGE & ENVIRONMENTAL GRAPHICS",
    categoryId: "branding",
    category: "branding",
    tags: ["Mobile app design", "E-commerce store", "UX research and audit"],
    image: solarPower,
    type: "web",
    project: {
      id: "1",
      title: "Cosmetics",
      hero: {
        url: hero01,
        alt: "Hero image",
      },
      lastHero: {
        url: lastHero,
        alt: "Last hero image",
      },
      about: {
        id: "about-1",
        title: "ABOUT THE PROJECT",
        description:
          "Uoga is a natural & organic cosmetics brand from Lithuania. With significant growth representing more and more boutiques in Lithuania and major European cities, a crafty look for the natural cosmetic brand required a change. Meaning that the brand’s identity needed to move towards and go more for a contemporary natural look to invite new cosmetic audiences — the ones that care for their bodies even in their constant hustles in the city.",
        details: {
          lineOfBusiness: "Cosmetics",
          photos: "Martyna Paukste",
          deliveredServices: ["Packaging system", "Communication design"],
        },
        featuredImage: [
          {
            url: featuredImage1,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage2,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage3,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage4,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage5,
            alt: "Mobile device showcasing On Natura app",
          },
        ],
      },
      process: {
        id: "process-1",
        title: "PROCESS",
        description:
          "Logotype, typography, and bright colours with natural tones predominating are all integral to the identity. The primary colours, Ivory and Black, are often repeated in the layouts, while additional colours are selected based on the ingredients used in the products.",
        hero: {
          url: processHero01,
          alt: "Process hero image",
        },
        featuredImage: [
          {
            url: featuredImage6,
            alt: "featured image 6",
          },
          {
            url: featuredImage7,
            alt: "featured image 7",
          },
          {
            url: featuredImage8,
            alt: "featured image 8",
          },
          {
            url: featuredImage9,
            alt: "featured image 9",
          },
        ],
      },
      result: {
        id: "result-1",
        title: "RESULT",
        hero: {
          url: resultHero,
          alt: "Result hero image",
        },
        metrics: [
          {
            label: "User Engagement",
            value: 45.7,
            suffix: "%",
          },
          {
            label: "Design Efficiency",
            value: 30,
            suffix: "%",
          },
          {
            label: "User Satisfaction",
            value: 4.8,
            suffix: "/5",
          },
        ],
        featuredImage: [
          {
            url: featuredImage1,
            alt: "featured image 1",
          },
          {
            url: featuredImage2,
            alt: "featured image 7",
          },
        ],
      },
    },
  },
  {
    id: "mobile-app",
    title: "Brand Identity, Signage & Environmental Graphics",
    categoryId: "graphic_design",
    category: "graphic design",
    tags: ["Mobile app design", "E-commerce store", "UX research and audit"],
    image: mobileScreen,
    type: "mobile",
    project: {
      id: "1",
      title: "Cosmetics",
      hero: {
        url: hero01,
        alt: "Hero image",
      },
      lastHero: {
        url: lastHero,
        alt: "Last hero image",
      },
      about: {
        id: "about-1",
        title: "ABOUT THE PROJECT",
        description:
          "Uoga is a natural & organic cosmetics brand from Lithuania. With significant growth representing more and more boutiques in Lithuania and major European cities, a crafty look for the natural cosmetic brand required a change. Meaning that the brand’s identity needed to move towards and go more for a contemporary natural look to invite new cosmetic audiences — the ones that care for their bodies even in their constant hustles in the city.",
        details: {
          lineOfBusiness: "Cosmetics",
          photos: "Martyna Paukste",
          deliveredServices: ["Packaging system", "Communication design"],
        },
        featuredImage: [
          {
            url: featuredImage1,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage2,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage3,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage4,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage5,
            alt: "Mobile device showcasing On Natura app",
          },
        ],
      },
      process: {
        id: "process-1",
        title: "PROCESS",
        description:
          "Logotype, typography, and bright colours with natural tones predominating are all integral to the identity. The primary colours, Ivory and Black, are often repeated in the layouts, while additional colours are selected based on the ingredients used in the products.",
        hero: {
          url: processHero01,
          alt: "Process hero image",
        },
        featuredImage: [
          {
            url: featuredImage6,
            alt: "featured image 6",
          },
          {
            url: featuredImage7,
            alt: "featured image 7",
          },
          {
            url: featuredImage8,
            alt: "featured image 8",
          },
          {
            url: featuredImage9,
            alt: "featured image 9",
          },
        ],
      },
      result: {
        id: "result-1",
        title: "RESULT",
        hero: {
          url: resultHero,
          alt: "Result hero image",
        },
        metrics: [
          {
            label: "User Engagement",
            value: 45.7,
            suffix: "%",
          },
          {
            label: "Design Efficiency",
            value: 30,
            suffix: "%",
          },
          {
            label: "User Satisfaction",
            value: 4.8,
            suffix: "/5",
          },
        ],
        featuredImage: [
          {
            url: featuredImage1,
            alt: "featured image 1",
          },
          {
            url: featuredImage2,
            alt: "featured image 7",
          },
        ],
      },
    },
  },
  {
    id: "tv-app",
    title: "BRAND IDENTITY, SIGNAGE & ENVIRONMENTAL GRAPHICS",
    categoryId: "ux_ui_design",
    category: "ux/ui design",
    tags: ["Mobile app design", "E-commerce store", "UX research and audit"],
    image: tvScreen,
    type: "web",
    project: {
      id: "1",
      title: "Cosmetics",
      hero: {
        url: hero01,
        alt: "Hero image",
      },
      lastHero: {
        url: lastHero,
        alt: "Last hero image",
      },
      about: {
        id: "about-1",
        title: "ABOUT THE PROJECT",
        description:
          "Uoga is a natural & organic cosmetics brand from Lithuania. With significant growth representing more and more boutiques in Lithuania and major European cities, a crafty look for the natural cosmetic brand required a change. Meaning that the brand’s identity needed to move towards and go more for a contemporary natural look to invite new cosmetic audiences — the ones that care for their bodies even in their constant hustles in the city.",
        details: {
          lineOfBusiness: "Cosmetics",
          photos: "Martyna Paukste",
          deliveredServices: ["Packaging system", "Communication design"],
        },
        featuredImage: [
          {
            url: featuredImage1,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage2,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage3,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage4,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage5,
            alt: "Mobile device showcasing On Natura app",
          },
        ],
      },
      process: {
        id: "process-1",
        title: "PROCESS",
        description:
          "Logotype, typography, and bright colours with natural tones predominating are all integral to the identity. The primary colours, Ivory and Black, are often repeated in the layouts, while additional colours are selected based on the ingredients used in the products.",
        hero: {
          url: processHero01,
          alt: "Process hero image",
        },
        featuredImage: [
          {
            url: featuredImage6,
            alt: "featured image 6",
          },
          {
            url: featuredImage7,
            alt: "featured image 7",
          },
          {
            url: featuredImage8,
            alt: "featured image 8",
          },
          {
            url: featuredImage9,
            alt: "featured image 9",
          },
        ],
      },
      result: {
        id: "result-1",
        title: "RESULT",
        hero: {
          url: resultHero,
          alt: "Result hero image",
        },
        metrics: [
          {
            label: "User Engagement",
            value: 45.7,
            suffix: "%",
          },
          {
            label: "Design Efficiency",
            value: 30,
            suffix: "%",
          },
          {
            label: "User Satisfaction",
            value: 4.8,
            suffix: "/5",
          },
        ],
        featuredImage: [
          {
            url: featuredImage1,
            alt: "featured image 1",
          },
          {
            url: featuredImage2,
            alt: "featured image 7",
          },
        ],
      },
    },
  },
  {
    id: "e-commerce",
    title: "BRAND IDENTITY, SIGNAGE & ENVIRONMENTAL GRAPHICS",
    categoryId: "consulting_and_audit",
    category: "consulting and audit",
    tags: ["Mobile app design", "E-commerce store", "UX research and audit"],
    image: mobileApp,
    type: "mobile",
    project: {
      id: "1",
      title: "Cosmetics",
      hero: {
        url: hero01,
        alt: "Hero image",
      },
      lastHero: {
        url: lastHero,
        alt: "Last hero image",
      },
      about: {
        id: "about-1",
        title: "ABOUT THE PROJECT",
        description:
          "Uoga is a natural & organic cosmetics brand from Lithuania. With significant growth representing more and more boutiques in Lithuania and major European cities, a crafty look for the natural cosmetic brand required a change. Meaning that the brand’s identity needed to move towards and go more for a contemporary natural look to invite new cosmetic audiences — the ones that care for their bodies even in their constant hustles in the city.",
        details: {
          lineOfBusiness: "Cosmetics",
          photos: "Martyna Paukste",
          deliveredServices: ["Packaging system", "Communication design"],
        },
        featuredImage: [
          {
            url: featuredImage1,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage2,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage3,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage4,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage5,
            alt: "Mobile device showcasing On Natura app",
          },
        ],
      },
      process: {
        id: "process-1",
        title: "PROCESS",
        description:
          "Logotype, typography, and bright colours with natural tones predominating are all integral to the identity. The primary colours, Ivory and Black, are often repeated in the layouts, while additional colours are selected based on the ingredients used in the products.",
        hero: {
          url: processHero01,
          alt: "Process hero image",
        },
        featuredImage: [
          {
            url: featuredImage6,
            alt: "featured image 6",
          },
          {
            url: featuredImage7,
            alt: "featured image 7",
          },
          {
            url: featuredImage8,
            alt: "featured image 8",
          },
          {
            url: featuredImage9,
            alt: "featured image 9",
          },
        ],
      },
      result: {
        id: "result-1",
        title: "RESULT",
        hero: {
          url: resultHero,
          alt: "Result hero image",
        },
        metrics: [
          {
            label: "User Engagement",
            value: 45.7,
            suffix: "%",
          },
          {
            label: "Design Efficiency",
            value: 30,
            suffix: "%",
          },
          {
            label: "User Satisfaction",
            value: 4.8,
            suffix: "/5",
          },
        ],
        featuredImage: [
          {
            url: featuredImage1,
            alt: "featured image 1",
          },
          {
            url: featuredImage2,
            alt: "featured image 7",
          },
        ],
      },
    },
  },
  {
    id: "e-commerce_one",
    title: "BRAND IDENTITY, SIGNAGE & ENVIRONMENTAL GRAPHICS",
    categoryId: "consulting_and_audit",
    category: "consulting and audit",
    tags: ["Mobile app design", "E-commerce store", "UX research and audit"],
    image: mobileApp,
    type: "mobile",
    project: {
      id: "1",
      title: "Cosmetics",
      hero: {
        url: hero01,
        alt: "Hero image",
      },
      lastHero: {
        url: lastHero,
        alt: "Last hero image",
      },
      about: {
        id: "about-1",
        title: "ABOUT THE PROJECT",
        description:
          "Uoga is a natural & organic cosmetics brand from Lithuania. With significant growth representing more and more boutiques in Lithuania and major European cities, a crafty look for the natural cosmetic brand required a change. Meaning that the brand’s identity needed to move towards and go more for a contemporary natural look to invite new cosmetic audiences — the ones that care for their bodies even in their constant hustles in the city.",
        details: {
          lineOfBusiness: "Cosmetics",
          photos: "Martyna Paukste",
          deliveredServices: ["Packaging system", "Communication design"],
        },
        featuredImage: [
          {
            url: featuredImage1,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage2,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage3,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage4,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage5,
            alt: "Mobile device showcasing On Natura app",
          },
        ],
      },
      process: {
        id: "process-1",
        title: "PROCESS",
        description:
          "Logotype, typography, and bright colours with natural tones predominating are all integral to the identity. The primary colours, Ivory and Black, are often repeated in the layouts, while additional colours are selected based on the ingredients used in the products.",
        hero: {
          url: processHero01,
          alt: "Process hero image",
        },
        featuredImage: [
          {
            url: featuredImage6,
            alt: "featured image 6",
          },
          {
            url: featuredImage7,
            alt: "featured image 7",
          },
          {
            url: featuredImage8,
            alt: "featured image 8",
          },
          {
            url: featuredImage9,
            alt: "featured image 9",
          },
        ],
      },
      result: {
        id: "result-1",
        title: "RESULT",
        hero: {
          url: resultHero,
          alt: "Result hero image",
        },
        metrics: [
          {
            label: "User Engagement",
            value: 45.7,
            suffix: "%",
          },
          {
            label: "Design Efficiency",
            value: 30,
            suffix: "%",
          },
          {
            label: "User Satisfaction",
            value: 4.8,
            suffix: "/5",
          },
        ],
        featuredImage: [
          {
            url: featuredImage1,
            alt: "featured image 1",
          },
          {
            url: featuredImage2,
            alt: "featured image 7",
          },
        ],
      },
    },
  },
  {
    id: "e-commerce_two",
    title: "BRAND IDENTITY, SIGNAGE & ENVIRONMENTAL GRAPHICS",
    categoryId: "consulting_and_audit",
    category: "consulting and audit",
    tags: ["Mobile app design", "E-commerce store", "UX research and audit"],
    image: mobileApp,
    type: "mobile",
    project: {
      id: "1",
      title: "Cosmetics",
      hero: {
        url: hero01,
        alt: "Hero image",
      },
      lastHero: {
        url: lastHero,
        alt: "Last hero image",
      },
      about: {
        id: "about-1",
        title: "ABOUT THE PROJECT",
        description:
          "Uoga is a natural & organic cosmetics brand from Lithuania. With significant growth representing more and more boutiques in Lithuania and major European cities, a crafty look for the natural cosmetic brand required a change. Meaning that the brand’s identity needed to move towards and go more for a contemporary natural look to invite new cosmetic audiences — the ones that care for their bodies even in their constant hustles in the city.",
        details: {
          lineOfBusiness: "Cosmetics",
          photos: "Martyna Paukste",
          deliveredServices: ["Packaging system", "Communication design"],
        },
        featuredImage: [
          {
            url: featuredImage1,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage2,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage3,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage4,
            alt: "Mobile device showcasing On Natura app",
          },
          {
            url: featuredImage5,
            alt: "Mobile device showcasing On Natura app",
          },
        ],
      },
      process: {
        id: "process-1",
        title: "PROCESS",
        description:
          "Logotype, typography, and bright colours with natural tones predominating are all integral to the identity. The primary colours, Ivory and Black, are often repeated in the layouts, while additional colours are selected based on the ingredients used in the products.",
        hero: {
          url: processHero01,
          alt: "Process hero image",
        },
        featuredImage: [
          {
            url: featuredImage6,
            alt: "featured image 6",
          },
          {
            url: featuredImage7,
            alt: "featured image 7",
          },
          {
            url: featuredImage8,
            alt: "featured image 8",
          },
          {
            url: featuredImage9,
            alt: "featured image 9",
          },
        ],
      },
      result: {
        id: "result-1",
        title: "RESULT",
        hero: {
          url: resultHero,
          alt: "Result hero image",
        },
        metrics: [
          {
            label: "User Engagement",
            value: 45.7,
            suffix: "%",
          },
          {
            label: "Design Efficiency",
            value: 30,
            suffix: "%",
          },
          {
            label: "User Satisfaction",
            value: 4.8,
            suffix: "/5",
          },
        ],
        featuredImage: [
          {
            url: featuredImage1,
            alt: "featured image 1",
          },
          {
            url: featuredImage2,
            alt: "featured image 7",
          },
        ],
      },
    },
  },
];
