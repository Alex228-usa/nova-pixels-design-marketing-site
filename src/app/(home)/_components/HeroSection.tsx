"use client";

import ButtonBase from "@/components/common/button-base";
import { useRouter } from "next/navigation";
import WorksBanner from "@/components/common/banners/works-banner";

const INTRO_TEXT =
  "Data-driven creativity that makes your brand unforgettable. We blend innovative design with UX analytics to create impactful, unique solutions.";

export default function HeroSection() {
  const router = useRouter();
  const goToContactUs = () => {
    router.push("/contacts");
  };
  return (
    <section className="w-full my-2 lg:my-6">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row lg:block justify-between">
        <div className="flex flex-col gap-6 items-start lg:block">
          {/* Header Section */}
          <div className="flex justify-between md:flex-row-reverse lg:flex-row">
            {/* Who Are We Section (Desktop) */}
            <div className="hidden h-auto lg:flex flex-col justify-between">
              <h2 className="mb-2 text-lg font-medium text-black">
                <span className="text-teal-400">[</span> WHO ARE WE?{" "}
                <span className="text-teal-400">]</span>
              </h2>
              <p className="text-base text-gray-600 max-w-[330px]">
                {INTRO_TEXT}
              </p>
            </div>
            {/* Main Heading */}

            <h2 className="font-unbounded text-[clamp(1rem,1rem_+_13.5417vw,7.5rem)] md:text-[clamp(7.5rem,12.5rem_+_-7.8125vw,6.75rem)] lg:text-[clamp(7.5rem,3.75rem_+_7.8125vw,8.75rem)] 2xl:text-[clamp(14.375rem,14.375rem,14.375rem)] font-normal !leading-[0.8]">
              NOVA
            </h2>
          </div>

          {/* Pixels Section */}
          <div className="flex justify-between items-end mt-3 space-y-4">
            <h2 className="font-unbounded text-[clamp(1rem,1rem_+_13.5417vw,7.5rem)] md:text-[clamp(7.5rem,12.5rem_+_-7.8125vw,6.75rem)] lg:text-[clamp(7.5rem,3.75rem_+_7.8125vw,8.75rem)] 2xl:text-[clamp(14.375rem,14.375rem,14.375rem)] font-normal !leading-[0.8]">
              PIXELS
            </h2>

            {/* Call-to-Action Button (Desktop) */}
            <div className="hidden lg:block">
              <ButtonBase
                type="button"
                title="WORK WITH US"
                className="group text-xl inline-flex items-center w-[350px] h-[70px] justify-center gap-2 font-medium text-black transition-colors"
                arrowClassName="h-5 w-5"
                onClick={goToContactUs}
              />
            </div>
          </div>
        </div>

        {/* Who Are We Section (Mobile) */}
        <div className="flex flex-col gap-6 justify-between mt-6 lg:hidden md:h-auto">
          <div>
            <h2 className="mb-2 text-lg font-medium text-black">
              <span className="text-teal-400">[</span> WHO ARE WE?{" "}
              <span className="text-teal-400">]</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-[330px]">{INTRO_TEXT}</p>
          </div>

          {/* Call-to-Action Button (Mobile) */}
          <ButtonBase
            type="button"
            title="WORK WITH US"
            className="group text-xl inline-flex items-center w-[350px] h-[70px] justify-center gap-2 font-black text-black transition-colors"
            arrowClassName="h-5 w-5"
            onClick={goToContactUs}
          />
        </div>
      </div>

      {/* Banner Section */}
      <WorksBanner />
    </section>
  );
}
