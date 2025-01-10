import BannerImage from "@/components/common/banner-image";
import { WorkHeroType } from "@/types/type.works";

const OtherResultsSection = ({ url, alt }: WorkHeroType) => {
  return (
    <section>
      {/* <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw]"> */}
      <BannerImage src={url} alt={alt} />
      {/* </div> */}
      {/* <div className="grid grid-cols-1 gap-[18px] mt-[120px] sm:grid-cols-2 lg:flex lg:flex-wrap w-full lg:gap-y-20">
                  {OTHER_RESULTS_IMGS.map((item, i) => {
                      const remains = i % 4;
                      const imgClassName = y.includes(remains)
                          ? `${xClsW} ${xClsH}`
                          : `${yClsW} ${yClsH}`;
  
                      return (
                          <Card
                              key={"other_results" + i}
                              src={item.img}
                              alt={item.title}
                              imgClassName={clsx(
                                  "transition-all duration-300",
                                  imgClassName,
                                  i === 3 ? "width-[100%]" : ""
                              )}
                              className={i % 2 === 0 ? "lg:mr-auto" : ""}
                          />
                      );
                  })}
              </div> */}
    </section>
  );
};

export default OtherResultsSection;
