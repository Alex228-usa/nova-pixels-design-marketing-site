import HighlightedText from "@/components/common/highlighted-text";
import clsx from "clsx";

export const WelcomeTextSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        "w-full flex flex-col gap-8 justify-start items-start",
        className
      )}
    >
      <p className="text-black font-lt-superior font-normal text-xl md:text-[26px] lg:text-[37px] 2xl:text-[40px] not-italic leading-[100%] tracking-[-1.6px]">
        Welcome to Nova Pixels, a world class design studio based in sunny{" "}
        <HighlightedText>Miami</HighlightedText>, FL. We are passionate about
        helping <HighlightedText>businesses</HighlightedText> of all sizes, from{" "}
        <HighlightedText>startups</HighlightedText> to global{" "}
        <HighlightedText>enterprises</HighlightedText>, stand out and drive
        results through <HighlightedText> unique </HighlightedText> and
        user-friendly <HighlightedText> designs </HighlightedText> that
        captivate and inspire.
      </p>
      <p className="text-black font-lt-superior font-normal text-xl md:text-[26px] lg:text-[37px] 2xl:text-[40px] not-italic leading-[100%] tracking-[-1.6px]">
        At Nova Pixels, we believe in the power of collaboration,{" "}
        <HighlightedText>creativity</HighlightedText>, data{" "}
        <HighlightedText>analysis</HighlightedText> and industry{" "}
        <HighlightedText>research</HighlightedText>. By working closely with our
        clients, we craft tailor-made solutions that reflect your unique story
        and <HighlightedText>resonate</HighlightedText>deeply with your
        audience. Our proprietary <HighlightedText>data driven</HighlightedText>{" "}
        and analytical design process has brought our{" "}
        <HighlightedText>real results</HighlightedText>
        results and growth in their ultimate business goals. Let’s create
        something extraordinary together.
      </p>
    </section>
  );
};
