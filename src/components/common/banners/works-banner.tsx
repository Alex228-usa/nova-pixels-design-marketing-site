import BannerImage from "@/components/common/banner-image";
import homeBanner from "@/assets/webp/home/home_banner.webp";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import arrowLeft from "@/assets/svg/arrow-left.svg";
import { useCallback, useState } from "react";
import Marquee from "@/components/common/marquee-animation";
import homeBannerTablet from "@/assets/webp/home/home_tablet_b.webp";

const HEADER_TEXT = "Care Hive Care Navigator";

const BRIEF_INFO =
  "Reimaging The DailyWire as a premium content provider through technology";

const TAGS = ["UX", "UI", "3D"];

interface AnimatedButtonProps {
  onClick: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick }) => {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotate: 180,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
    >
      <Button
        onClick={onClick}
        variant="ghost"
        className="relative bg-white flex flex-col items-center justify-center rounded-full w-[84px] h-[84px] hover:bg-accent"
      >
        <Image src={arrowLeft} alt="arrow icon" width={32} height={32} />

        <span className="text-sm -mt-2">more</span>
      </Button>
    </motion.div>
  );
};

const WorksBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  return (
    <div
      className="relative w-screen left-[50%] right-[50%] -mx-[50vw] mt-9"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BannerImage
        src={homeBanner}
        alt="works"
        className={"hidden lg:block h-[768px] 2xl-[900px] max-2xl:h-[1080px]"}
        srcVersions={[
          {
            src: homeBannerTablet,
            alt: "home banner tablet",
            className: "w-full h-[640px] md:h-[1024px] lg:hidden",
          },
        ]}
      />
      <div className="absolute bottom-7 w-full left-0 max-w-1920 px-4 md:px-5 2xl:px-8 mx-auto flex flex-col lg:flex-row justify-between">
        <p className="text-white text-base w-64 lg:ml-36 2xl:ml-72">
          {BRIEF_INFO}
        </p>
        <p className="flex justify-start items-end flex-wrap gap-2 mt-4">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="text-black text-base leading-normal bg-white px-3.5 py-2 h-fit rounded-[100px]"
            >
              {tag}
            </span>
          ))}
        </p>
      </div>
      <AnimatePresence>
        {isHovered && (
          <div className="absolute right-[20%] top-[15%]">
            <AnimatedButton
              onClick={() => {
                // Add your onClick logic here
                console.log("Button clicked");
              }}
            />
          </div>
        )}
      </AnimatePresence>

      <div className="w-full absolute top-1/2 left-0 translate-y-[-50%]">
        <Marquee speed={50} direction="left">
          <p className="text-white font-unbounded whitespace-nowrap text-5xl md:text-9xl lg:text-[170px] 2xl:text-[294.4px] not-italic font-normal uppercase">
            {HEADER_TEXT}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default WorksBanner;
