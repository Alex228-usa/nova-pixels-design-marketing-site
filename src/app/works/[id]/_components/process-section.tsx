import BannerImage from "@/components/common/banner-image";
import { WorkProcessType } from "@/types/type.works";
import { x, xClsH, xClsW, yClsH, yClsW } from "./constant";
import Card from "@/components/common/card";
import clsx from "clsx";

const ProcessSection = (data: WorkProcessType) => {
  const { description, hero, featuredImage } = data;
  return (
    <section>
      {/* <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw]"> */}
      <BannerImage src={hero.url} alt={hero.alt} />
      {/* </div> */}
      <div className="flex items-center w-full lg:max-w-[70%] lg:mx-auto">
        <p
          className={
            "text-black w-full text-base mt-10 mb-[120px] not-italic md:max-w-96 font-normal leading-[normal]"
          }
        >
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:flex lg:flex-wrap w-full lg:gap-y-20">
        {featuredImage.map((item, i) => {
          const remains = i % 4;
          const imgClassName = x.includes(remains)
            ? `${xClsW} ${xClsH}`
            : `${yClsW} ${yClsH}`;

          return (
            <Card
              key={"process_section" + i}
              src={item.url}
              alt={item.alt}
              imgClassName={clsx(
                "transition-all duration-300",
                imgClassName,
                i === 3 ? "width-[100%]" : ""
              )}
              className={i % 2 === 0 ? "lg:mr-auto" : ""}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSection;
