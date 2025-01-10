import Image from "next/image";
import blockquoteOpen from "@/assets/svg/blockquote-open.svg";
import blockquoteClose from "@/assets/svg/blockquote-close.svg";
import clsx from "clsx";

// font-size: clamp(6rem, -10.875rem + 16.875vw, 9.375rem);

export const FounderSayingSection = ({ className }: { className?: string }) => {
  return (
    <section className={clsx("w-full mx-auto", className)}>
      <blockquote className="relative space-y-5">
        <div className="md:space-y-4 font-unbounded text-start md:text-end">
          <span className="text-8xl font-black text-black">
            <Image
              src={blockquoteOpen}
              alt={"Blockquote Open"}
              className="text-black w-12 h-9 md:w-[88px] md:h-[68px] lg:w-[104px] lg:h-[80px] 2xl:w-[160px] 2xl:h-[124px] max-2xl:w-[192px] max-2xl:h-[124px]"
            />
          </span>
          <h2 className="text-[clamp(2rem,8vw,3rem)] md:text-[clamp(4.4375rem,8.5vw,6rem)] whitespace-nowrap lg:text-[clamp(6rem,8.7vw,9.375rem)] max-2xl:text-[clamp(9.375rem,9.375vw,9.25rem)] font-normal !leading-[0.8]">
            HELPING BRANDS
            <br />
            <span className="text-base md:text-5xl lg:text-[65px] 2xl:text-[112px] font-normal">
              WHO WANTS
            </span>
            <br />
            TO BE <span className="text-danger font-normal">DIFFERENT</span>
          </h2>
        </div>
        <div className="w-full flex">
          <span className="text-8xl inline-flex w-full md:max-w-[50%] ml-auto text-end justify-between font-black text-black">
            <span className="flex flex-col items-start gap-2 text-sm text-gray-600">
              <span className="font-medium text-base inline-block">
                David Master
              </span>
              <span className="text-xs text-gray-400 font-normal">FOUNDER</span>
            </span>
            <Image
              src={blockquoteClose}
              alt={"Blockquote Close"}
              className="text-black w-12 h-9 md:w-[88px] md:h-[68px] lg:w-[104px] lg:h-[80px] 2xl:w-[160px] 2xl:h-[124px] max-2xl:w-[192px] max-2xl:h-[124px]"
            />
          </span>
        </div>
      </blockquote>
    </section>
  );
};
