import BannerImage from "@/components/common/banner-image";
import Image from "next/image";
import projectX from "@/assets/svg/project-x.svg";
import { WorkHeroType } from "@/types/type.works";

const SubTitleSection = ({ url, alt }: WorkHeroType) => {
  return (
    <section className="w-full leading-normal">
      <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw]">
        <BannerImage src={url ?? ""} alt={alt} />
      </div>

      <div className="w-full items-baseline leading-none font-unbounded mt-20">
        <h2 className="text-center md:text-start uppercase text-[clamp(2rem,9.5588vw,4.4375rem)] md:text-[clamp(4.4375rem,9.7656vw,6rem)] whitespace-nowrap lg:text-[clamp(6rem,9.375vw,9.375rem)] max-2xl:text-[clamp(9.375rem,9.375vw,9.25rem)] font-normal !leading-[0.8]">
          ab<span>o</span>ut
        </h2>
        <h2 className="text-end  uppercase text-[clamp(2rem,9.5588vw,4.4375rem)] md:text-[clamp(4.4375rem,9.7656vw,6rem)] whitespace-nowrap lg:text-[clamp(6rem,9.375vw,9.375rem)] max-2xl:text-[clamp(9.375rem,9.375vw,9.25rem)] font-normal !leading-[0.8]">
          the
          <span className="font-unbounded uppercase text-gray-medium text-end leading-none">
            <Image
              src={projectX}
              alt={"Project x"}
              className="inline w-[30px] h-[34px] shrink-0 md:w-[68px] md:h-[77px] lg:w-[90.248px] lg:h-[102px] 2xl:w-[161.393px] 2xl:h-[182.409px] max-2xl:w-[186.725px] max-2xl:h-[211.622px]"
            />
          </span>
          project
        </h2>
      </div>
    </section>
  );
};

export default SubTitleSection;
