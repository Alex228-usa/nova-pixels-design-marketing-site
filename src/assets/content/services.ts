import { ServiceType } from "@/types/types.service";

import thumbnail01 from "@/assets/webp/services/thumbnail01.webp";
import thumbnail02 from "@/assets/webp/services/thumbnail02.webp";
import thumbnail03 from "@/assets/webp/services/thumbnail03.webp";

import bannerImage02 from "@/assets/webp/service_01.webp";
import bannerImage01 from "@/assets/webp/service_02.webp";
import bannerImage03 from "@/assets/webp/service_03.webp";

import showcaseImage01 from "@/assets/webp/services/showcase01.webp";
import showcaseImage02 from "@/assets/webp/services/showcase02.webp";
import showcaseImage03 from "@/assets/webp/services/showcase03.webp";
import showcaseImage04 from "@/assets/webp/services/showcase04.webp";

export const services: ServiceType[] = [
  {
    id: "01",
    title: "branding",
    categoryId: "branding",
    description: "Build a Brand That Stands Out",
    details:
      "Elevate your brand's identity with a strategic approach. We create memorable logos, brand guidelines, and comprehensive strategies to bring your vision to life.",
    subServices: [
      {
        title: "Brand Strategy",
        description:
          "We start by understanding your brand's values and audience to create a strategic plan, conduct market research, and foster brand loyalty.",
      },
      {
        title: "Brand Identity & Guidelines",
        description:
          "We craft a cohesive visual identity that reflects your brand's values, ensuring consistency across channels and maintaining brand integrity.",
      },
      {
        title: "Logo Design",
        description:
          "We create logos that are more than symbols—they tell your brand's story at first glance. Our logos reflect your brand's core values, ensuring instant recognition and adaptability across various platforms.",
      },
    ],
    thumbnail: thumbnail01,
    showcaseImage: showcaseImage01,
    bannerImage: bannerImage01,
  },
  {
    id: "02",
    title: "graphic design",
    categoryId: "graphic_design",
    description: "Visuals That Speak Volumes",
    details:
      "From captivating social media graphics to detailed infographics and custom illustrations, our digital art makes your brand shine in any medium.",
    subServices: [
      {
        title: "Social Media",
        description:
          "Our social media designs capture attention and engage your audience with custom graphics, videos, and templates that amplify your brand.",
      },
      {
        title: "Presentations",
        description:
          "Our banners grab attention and convey your message effectively, tailored to your brand's style for maximum impact, digital or physical.",
      },
      {
        title: "AI-Powered Visuals",
        description:
          "Using advanced AI technology, we create dynamic visuals that push creative boundaries and offer personalized content, keeping your brand trendy.",
      },
    ],
    thumbnail: thumbnail01,
    showcaseImage: showcaseImage02,
    bannerImage: bannerImage02,
  },
  {
    id: "03",
    title: "ux/ui design",
    categoryId: "ux_ui_design",
    description: "Designs That Engage and Convert",
    details:
      "We craft intuitive, data-driven web and app experiences tailored for conversion and engagement. Our team delivers fully responsive renders with post-delivery support and consultation.",
    subServices: [
      {
        title: "Website Design",
        description:
          "We create websites that are as beautiful as they are functional, blending cutting-edge design with seamless user experience. Every element is crafted to guide users naturally, providing intuitive navigation and maximizing engagement. Our designs are mobile-responsive, optimized for speed, and built to achieve your brand’s goals",
      },
      {
        title: "Web App Design",
        description:
          "Our web apps are designed with a user-first approach, focusing on intuitive interfaces and smooth functionality. We ensure every interaction is seamless, visually pleasing, and tailored to your users' needs. This approach drives engagement and maximizes usability, providing a superior experience",
      },
      {
        title: "Data-Driven Design",
        description:
          "Our design decisions are informed by deep data insights, user behavior analysis, and analytics. This ensures that every aspect of the design aligns with user needs and delivers measurable results. By blending creativity with data, we create solutions that not only look great but perform exceptionally",
      },
    ],
    thumbnail: thumbnail03,
    showcaseImage: showcaseImage03,
    bannerImage: bannerImage03,
  },
  {
    id: "04",
    title: "consulting and audit",
    categoryId: "consulting_and_audit",
    description: "Consulting and Audit",
    details:
      "Our rigorous research and audits provide a deep understanding of your users' behaviors and pain points. The findings allow us to develop actionable insights that will improve user experience and engagement.",
    subServices: [
      {
        title: "UX Research and Audit",
        description:
          "Our thorough UX research and audits provide a deep understanding of your users’ behaviors and pain points. We leverage tools like heatmaps, analytics, and customer feedback to identify areas for improvement. The insights we gather drive actionable recommendations that enhance user experience and engagement",
      },
      {
        title: "Split Test Design",
        description:
          "Our subscription-based split testing services ensure continuous design optimization based on real-world data. We run A/B tests to measure what works best and refine designs accordingly. This iterative process guarantees your designs remain relevant, effective, and perfectly aligned with user needs",
      },
    ],
    thumbnail: thumbnail03,
    showcaseImage: showcaseImage04,
    bannerImage: bannerImage03,
  },
];
