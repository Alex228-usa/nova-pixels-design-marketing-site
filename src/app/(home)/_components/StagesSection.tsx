import HighlightedText from "@/components/common/highlighted-text";
import clsx from "clsx";

const stages = [
  {
    title: "Deep Dive & Discovery",
    description:
      "We kick off by immersing ourselves in your goals and expectations. Every detail is documented to ensure we're aligned from the start.",
  },
  {
    title: "Strategic Insights & Analysis",
    description:
      "With comprehensive visual and competitor analysis, analysis of pre-existing testmocks, historical analytics, customer journey mapping (CJM), and Jobs to be Done (JTBD) frameworks, we shape a focused, data-driven approach.",
  },
  {
    title: "Blueprint & Prototype Creation",
    description:
      "We design a functional prototype and clear structure that lays the groundwork for user-centric interactions and experiences.",
  },
  {
    title: "Concept Design & Preview",
    description:
      "We bring concepts to life with a tangible design draft—ready for your review, feedback, and even A/B testing to optimize user engagement.",
  },
  {
    title: "Refinement & Ready-to-Launch",
    description:
      "After meticulous refinement, we finalize the design and prepare it for seamless development handover, guaranteeing a smooth transition to execution.",
  },
  {
    title: "Refinement & Ready-to-Launch",
    description:
      "After meticulous refinement, we finalize the design and prepare it for seamless development handover, guaranteeing a smooth transition to execution.",
  },
];

const StagesSection = ({ className }: { className?: string }) => {
  return (
    <section className={clsx(className)}>
      <div className="w-full leading-normal">
        <div className="w-full flex flex-wrap justify-between items-baseline leading-normal">
          <h2 className="font-unbounded uppercase text-[clamp(2rem,8vw,3rem)] md:text-[clamp(4.4375rem,8.5vw,6rem)] whitespace-nowrap lg:text-[clamp(6rem,8.7vw,9.375rem)] max-2xl:text-[clamp(9.375rem,9.375vw,9.25rem)] font-normal !leading-[0.8]">
            <span className="relative">
              <span className="text-teal-400">[</span>How
              <span className="text-teal-400">]</span>is the
            </span>
          </h2>
          <h2 className="font-unbounded w-full text-center uppercase text-[clamp(2rem,8vw,3rem)] md:text-[clamp(4.4375rem,8.5vw,6rem)] whitespace-nowrap lg:text-[clamp(6rem,8.7vw,9.375rem)] max-2xl:text-[clamp(9.375rem,9.375vw,9.25rem)] font-normal !leading-[0.8]">
            work
          </h2>
          <h2 className="font-unbounded w-full text-end uppercase text-[clamp(2rem,8vw,3rem)] md:text-[clamp(4.4375rem,8.5vw,6rem)] whitespace-nowrap lg:text-[clamp(6rem,8.7vw,9.375rem)] max-2xl:text-[clamp(9.375rem,9.375vw,9.25rem)] font-normal !leading-[0.8]">
            going
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {stages.map((item, index) => {
          const forCenterBox = (index + 1) % 3 === 0;
          const forRightBox = index % 3 === 1;
          return (
            <div
              key={`stage-${index}`}
              className={`p-4 flex  ${
                forCenterBox
                  ? "col-span-full lg:justify-center 2xl:mt-20"
                  : forRightBox
                  ? "ml-auto lg:mt-[100px]"
                  : "justify-start w-fit lg:mt-16"
              } `}
            >
              <HighlightedText
                className={`block w-full md:max-w-[558px] min-h-[218px] lg:h-[218px] border-danger`}
                childClassName={"h-full flex flex-col justify-around"}
                cornerClassName={"bg-danger"}
              >
                <span className="block text-2xl">{item.title}</span>
                <span className="text-base">{item.description}</span>
              </HighlightedText>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StagesSection;
