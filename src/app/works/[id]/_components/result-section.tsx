import BannerImage from "@/components/common/banner-image";
import { WorkResultType } from "@/types/type.works";
import { xClsH, xClsW, y, yClsH, yClsW } from "./constant";
import Card from "@/components/common/card";
import clsx from "clsx";

const ResultSection = (data: WorkResultType) => {
  const { hero, featuredImage } = data;
  return (
    <section>
      {/* <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw]"> */}
      <BannerImage src={hero.url} alt={hero.alt} />
      {/* </div> */}
      <div className="grid grid-cols-1 gap-[18px] mt-[120px] sm:grid-cols-2 lg:flex lg:flex-wrap w-full lg:gap-y-20">
        {featuredImage.map((item, i) => {
          const remains = i % 4;
          const imgClassName = y.includes(remains)
            ? `${xClsW} ${xClsH}`
            : `${yClsW} ${yClsH}`;

          return (
            <Card
              key={"result_section" + i}
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

export default ResultSection;
