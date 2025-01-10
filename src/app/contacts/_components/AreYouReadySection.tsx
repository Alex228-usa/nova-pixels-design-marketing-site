import HighlightedText from "@/components/common/highlighted-text";
import clsx from "clsx";
import Image from "next/image";
import waveIcon from "@/assets/svg/wave.svg";
import NoiseAnimation from "@/components/common/noise-animation";

const OnePixelBox = () => {
  return (
    <div className="relative px-4 w-full">
      <div
        className={clsx(
          "flex items-center justify-center w-full px-2.5 py-8 md:px-5 md:py-10 lg:px-[25px] lg:py-[45px] 2xl:px-[30px] 2xl:py-[45px] border-2 border-tiffany"
        )}
      >
        <div className="flex w-full justify-between items-center">
          <p className="font-unbounded flex-1 whitespace-nowrap text-black text-[15px] md:w-[30px] lg:text-[40px] not-italic font-normal leading-[100%] tracking-[-1.6px] uppercase">
            one pixel
          </p>
          <Image
            src={waveIcon}
            alt={"Wave"}
            className="w-[119px] flex-1 md:w-[273px] lg:w-[343px]"
          />
          <p className="font-unbounded text-end flex-1 whitespace-nowrap text-black text-[15px] md:w-[30px] lg:text-[40px] not-italic font-normal leading-[100%] tracking-[-1.6px] uppercase">
            at a time
          </p>
        </div>
        <div className="absolute w-full flex justify-between h-full left-0">
          <div className="h-full py-2">
            <div className="border-2 border-tiffany border-r-bg-gray w-2 py-2 h-full ml-2.5">
              <div className="border-2 border-tiffany border-r-bg-gray  w-2 h-full -ml-2"></div>
            </div>
            <NoiseAnimation />
          </div>
          <div className="h-full py-2">
            <div className="border-2 border-tiffany w-2 py-2 h-full border-l-bg-gray mr-2.5">
              <div className="border-2 border-tiffany w-2 h-full border-l-bg-gray ml-[4px]"></div>
            </div>
            <NoiseAnimation />
          </div>
          <NoiseAnimation />
        </div>
      </div>
    </div>
  );
};

export const AreYouReadySection = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        "w-full flex flex-col gap-8 justify-start items-start",
        className
      )}
    >
      <p className="text-black font-lt-superior font-normal text-xl md:text-[26px] lg:text-[37px] 2xl:text-[40px] not-italic leading-[100%] tracking-[-1.6px]">
        Are you ready to start <HighlightedText>something new?</HighlightedText>{" "}
        We’re thrilled to connect with you! Whether you have a grand vision
        ready to come to life or just a spark of an
        <HighlightedText>idea</HighlightedText> , we’re here to help bring it
        all together -
      </p>
      <OnePixelBox />
      <p className="text-black font-lt-superior font-normal text-xl md:text-[26px] lg:text-[37px] 2xl:text-[40px] not-italic leading-[100%] tracking-[-1.6px]">
        At Nova Pixels, we believe{" "}
        <HighlightedText>
          great design starts with a conversation
        </HighlightedText>{" "}
        Let’s collaborate,{" "}
        <HighlightedText>innovate and create</HighlightedText> something
        extraordinary. Stop by and visit us at 2980 NE 207 Street, Suite 3XX,
        Aventura FL, 33180
      </p>
    </section>
  );
};
